'use client'

import tw, {styled} from "twin.macro";
import WhiteContainer from "@/app/_desing-system/WhiteContainer";
import LoginForm from "@/app/_components/LoginForm";

const StyledMain = styled.main(() => [
    tw`min-h-screen h-screen flex items-center justify-center p-16 bg-neutral-950 text-white`
])

const StyledContent = styled.div(() => [
    tw`h-max w-full flex items-center justify-center gap-20`
])

export default function Home() {

    return (
        <StyledMain>
            <StyledContent>
                <WhiteContainer>
                    <LoginForm/>
                </WhiteContainer>
            </StyledContent>
        </StyledMain>
    )
}

