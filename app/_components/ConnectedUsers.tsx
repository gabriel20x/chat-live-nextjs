import tw, {styled} from "twin.macro";
import Text from "@/app/_desing-system/Text";
import {useGetConnectedUsersQuery} from "@/api/messages-api";
import {useGetAllUsersQuery} from "@/api/users-api";
import Avatar from "@/app/_desing-system/Avatar";
import {useEffect, useState} from "react";
import IUser from "@/types/User";

const StyledConnectedUsers = styled.div.attrs({role:'connected-users-list'})(() => [
    tw`flex flex-col gap-2`
])

function ConnectedUsers() {

    const {data: allUsers, isSuccess } = useGetAllUsersQuery()
    const {data: usersConnected, isSuccess: eventsConnected } = useGetConnectedUsersQuery()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        if((isSuccess && eventsConnected)) {
            setUsers(allUsers.filter((user) => usersConnected.some((id) => id === user.id)))
        }
    }, [allUsers,usersConnected,isSuccess,eventsConnected]);


    return (
        <StyledConnectedUsers>
            <Text variant={'h5'} className={'text-center'}>Online</Text>
            {/*  TODO: Agregar la lista de los usuarios conectados.  */}
            {users.map((user, index) => (
                <Avatar key={user.id} user={user} avatarNumber={index}/>
            ))}
        </StyledConnectedUsers>
    );
}

export default ConnectedUsers;