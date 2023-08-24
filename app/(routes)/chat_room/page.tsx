'use client'

// import {useGetAllMessagesQuery} from "@/api/messages-api";
import tw, {styled} from "twin.macro";
import WhiteContainer from "@/app/_desing-system/WhiteContainer";
import ConnectedUsers from "@/app/_components/ConnectedUsers";
import Chat from "@/app/_components/Chat";

const StyledMain = styled.main(() => [
    tw`min-h-screen h-screen p-16 bg-neutral-950 text-white`
])

const StyledContent = styled.div(() => [
    tw`h-full w-full flex items-center justify-center gap-20`
])

export default function ChatRoom() {

    // al llamar el hook, se realiza la petición, esta se mantendra en cache, por lo que si la peticion es la misma, no se realizara de nuevo.
    // const {data, isLoading, isSuccess, refetch} = useGetAllMessagesQuery()

    return (
        <StyledMain>
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

