import React, {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import tw, {styled} from "twin.macro";

const StyledButton = styled.button(() => [
    tw`w-max py-1 px-3 bg-blue-500 text-white rounded-lg`
])

function Button(props : PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
    const {children} = props
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
}

export default Button;