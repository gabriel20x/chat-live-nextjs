'use client'

// import {useGetAllMessagesQuery} from "@/api/messages-api";
import tw, {styled} from "twin.macro";
import WhiteContainer from "@/app/_desing-system/WhiteContainer";
import ConnectedUsers from "@/app/_components/ConnectedUsers";
import Chat from "@/app/_components/Chat";
import Button from "@/app/_desing-system/Button";
import {getAccessToken, removeAccessToken} from "@/lib/auth-token-cookies/authTokenCookies";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {socketManager} from "@/api/messages-api";

const StyledMain = styled.main(() => [
    tw`min-h-screen h-screen p-16 bg-neutral-950 text-white`
])

const StyledContent = styled.div(() => [
    tw`h-full w-full flex items-center justify-center gap-20`
])

export default function ChatRoom() {
    const router = useRouter()

    // TODO: Deslogear al usuario borrando el token y redirigir al inicio
    const logout = () => {
        const socket = socketManager.socket('/', { auth: {
                Authorization: getAccessToken()
            } });
        socket.disconnect()
        removeAccessToken()
        router.push('/')
    }

    // TODO: Revisar si el usuario esta logeado, si no, retornar al login.
    useEffect(() => {
        const USER_TOKEN = getAccessToken()
        if(!USER_TOKEN) router.push('/')
    }, []);

    return (
        <StyledMain>
            <Button onClick={logout} >Loguot</Button>
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

