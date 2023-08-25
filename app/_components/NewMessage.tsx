import tw, {styled} from "twin.macro";
import TextArea from "@/app/_desing-system/TextAreaInput";
import {useSendMessageMutation} from "@/api/messages-api";
import {ChangeEvent, KeyboardEvent, useState} from "react";

const StyledNewMessage = styled.div(() => [
    tw``
])

function NewMessage() {

    const [sendMessage] = useSendMessageMutation()
    const [message, setMessage] = useState<string>('');
    const handleChange = (event : ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
    const handleKeyDown = (event : KeyboardEvent & KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            // 👇 Get input value
            if(!message) return
            sendMessage({message});
            setMessage('')
        }
    };
    return (
        <StyledNewMessage>
            <TextArea value={message} onChange={handleChange} onKeyDown={handleKeyDown}/>
        </StyledNewMessage>
    );
}

export default NewMessage;