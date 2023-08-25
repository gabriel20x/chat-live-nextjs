import tw, {styled} from "twin.macro";
import Text from "@/app/_desing-system/Text";
import {useGetConnectedUsersQuery} from "@/api/messages-api";

const StyledConnectedUsers = styled.div.attrs({role:'connected-users-list'})(() => [
    tw`flex flex-col gap-2`
])

function ConnectedUsers() {

    const {data } = useGetConnectedUsersQuery()

    return (
        <StyledConnectedUsers>
            <Text variant={'h5'} className={'text-center'}>Online</Text>
            {/*  TODO: Agregar la lista de los usuarios conectados.  */}
        </StyledConnectedUsers>
    );
}

export default ConnectedUsers;