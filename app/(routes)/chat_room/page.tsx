'use client'

// import {useGetAllMessagesQuery} from "@/api/messages-api";
import tw, {styled} from "twin.macro";
import WhiteContainer from "@/app/_desing-system/WhiteContainer";
import ConnectedUsers from "@/app/_components/ConnectedUsers";
import Chat from "@/app/_components/Chat";
import Button from "@/app/_desing-system/Button";

const StyledMain = styled.main(() => [
    tw`min-h-screen h-screen p-16 bg-neutral-950 text-white`
])

const StyledContent = styled.div(() => [
    tw`h-full w-full flex items-center justify-center gap-20`
])

export default function ChatRoom() {

    // TODO: Deslogear al usuario borrando el token y redirigir al inicio

    // TODO: Revisar si el usuario esta logeado, si no, retornar al login.

    return (
        <StyledMain>
            <Button>Loguot</Button>
            <StyledContent>
                <WhiteContainer>
                    <Chat/>
                </WhiteContainer>
                <WhiteContainer>
                    <ConnectedUsers/>
                </WhiteContainer>
            </StyledContent>
        </StyledMain>
    )
}

