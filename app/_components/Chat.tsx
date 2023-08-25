import tw, {styled, css} from "twin.macro";
import Text from "@/app/_desing-system/Text";
import Message from "@/app/_desing-system/Message";
import NewMessage from "@/app/_components/NewMessage";
import {useEffect, useRef} from "react";
import IMessage from "@/types/Message";

const StyledChat = styled.div.attrs({role:'connected-users-list'})(() => [
    tw`flex flex-col gap-2 h-full`
])
const StyledMessagesContainer = styled.div.attrs({role:'connected-users-list'})(() => [
    tw`flex flex-col gap-2 overflow-y-scroll flex-1`,
    css`
    &::-webkit-scrollbar {
      width: 0;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  `,
])

function Chat() {

    const data: IMessage[] = []


    const chatRef = useRef(null);

    useEffect(() => {
        if (chatRef?.current) {
            (chatRef.current as HTMLDivElement).scrollTo({
                top: (chatRef.current as HTMLDivElement).scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [data]);

    return (
        <StyledChat>
            <Text variant={'h5'} className={'text-center'}>Henry Room</Text>
            {/*  TODO: Mostrar el historial de los mensajes.  */}
            {/*  TODO: Agregar mensajes nuevos al historial en tiempo real.  */}
            <StyledMessagesContainer ref={chatRef}>
                { data.map((message) => (
                    <Message key={message.id} message={message}/>
                ))}
            </StyledMessagesContainer>
            {/*  TODO: Enviar mensajes a los demas sockets  */}
            <NewMessage/>
        </StyledChat>
    );
}

export default Chat;