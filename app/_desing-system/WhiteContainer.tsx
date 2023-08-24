import {ReactNode} from "react";
import tw, {styled} from "twin.macro";

type WhiteContainerProps = {
    children : ReactNode
}

const StyledContainer = styled.div(() => [
    tw`bg-white p-3 max-w-[20rem] w-full h-[inherit] rounded-lg drop-shadow-[0_2px_8px_#7dd3fc] text-neutral-950`
])

const StyledInsideBorder = styled.div(() => [
    tw`border-2 border-sky-100 h-full rounded-lg py-2 px-4 flex flex-col gap-2`
])

function WhiteContainer({children} : WhiteContainerProps) {
    return (
        <StyledContainer>
            <StyledInsideBorder>
                {children}
            </StyledInsideBorder>
        </StyledContainer>
    );
}

export default WhiteContainer;