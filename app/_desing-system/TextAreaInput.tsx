import React, { TextareaHTMLAttributes} from 'react';
import tw, {styled} from "twin.macro";

const StyledTextArea = styled.textarea(() => [
    tw`w-full py-1 px-3 border-sky-200 border-2 rounded-lg resize-none h-20`
])


function TextArea(props:TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <StyledTextArea {...props} />
    );
}

export default TextArea;