import {styled} from "twin.macro";
import Text from "@/app/_desing-system/Text";

const StyledMessage = styled.div(() => [

])

function Message() {
    return (
        <StyledMessage>
            <Text variant={'bodysm'}>Mensaje</Text>
        </StyledMessage>
    );
}

export default Message;