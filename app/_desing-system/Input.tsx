import React, {InputHTMLAttributes} from 'react';
import tw, {styled} from "twin.macro";
import Text from "@/app/_desing-system/Text";

const StyledInput = styled.input(() => [
    tw`w-full py-1 px-3 border-sky-200 border-2 rounded-lg`
])

type InputProps = {
    label:string
} & InputHTMLAttributes<HTMLInputElement>

function Input(props:InputProps) {
    const { label, ...inputAttributes } = props
    return (
        <fieldset>
            <Text variant={'label'}>{label}</Text>
            <StyledInput {...inputAttributes} />
        </fieldset>
    );
}

export default Input;