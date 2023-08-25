import tw, {css, styled} from "twin.macro";
import Text from "@/app/_desing-system/Text";
import IMessage from "@/types/Message";
import {stringToColour} from "@/lib/stringToColor";

const StyledMessage = styled.div<{id:string}>(({id}) => [
    tw`p-2 rounded-sm`,
    css`
      background-color: ${stringToColour(id)}35;
    `
])

type MessageProps = {
    key?:string
    message: IMessage
}

function Message(props:MessageProps) {
    const {message} = props
    return (
        <StyledMessage id={message.sender.id}>
            <Text variant={'bodysm'}><strong>{message.sender.username}</strong></Text>
            <Text variant={'bodymd'}>{message.message}</Text>
        </StyledMessage>
    );
}

export default Message;