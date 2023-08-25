import tw, {styled} from "twin.macro";
import TextArea from "@/app/_desing-system/TextAreaInput";
import {ChangeEvent, KeyboardEvent, useState} from "react";

const StyledNewMessage = styled.div(() => [
    tw``
])

function NewMessage() {

    const [message, setMessage] = useState<string>('');
    const handleChange = (event : ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
    const handleKeyDown = (event : KeyboardEvent & KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            if(!message) return
            // TODO: Enviar el mensaje mendiante un evento
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