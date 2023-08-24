import tw, {styled} from "twin.macro";
import TextArea from "@/app/_desing-system/TextAreaInput";

const StyledNewMessage = styled.div(() => [
    tw``
])

function NewMessage() {
    return (
        <StyledNewMessage>
            <TextArea/>
        </StyledNewMessage>
    );
}

export default NewMessage;