import tw, {styled} from "twin.macro";
import Text from "@/app/_desing-system/Text";

const StyledConnectedUsers = styled.div.attrs({role:'connected-users-list'})(() => [
    tw`flex flex-col gap-2`
])

// TODO: obtener una lista de los usuarios del chat.
// TODO: Filtrar de esa lista los id de los usuarios que estan conectados.

function ConnectedUsers() {
    return (
        <StyledConnectedUsers>
            <Text variant={'h5'} className={'text-center'}>Online</Text>
            {/*  TODO: Agregar la lista de los usuarios conectados.  */}
        </StyledConnectedUsers>
    );
}

export default ConnectedUsers;