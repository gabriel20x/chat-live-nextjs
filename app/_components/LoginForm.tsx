'use client'

import {useRouter} from "next/navigation";
import Text from "@/app/_desing-system/Text";
import Button from "@/app/_desing-system/Button";
import Input from "@/app/_desing-system/Input";
import tw, {styled} from "twin.macro";
import {FormEvent} from "react";

const StyledForm = styled.form(() => [
    tw`flex flex-col gap-2`
])

function LoginForm() {

    const router = useRouter()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        router.push('/chat_room')
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Text variant={"h5"} className={'text-center'}>Login Form</Text>
            <Input name={'username'} id={'username'} label={'Usuario'}/>
            <Input name={'password'} id={'password'} label={'Contraseña'} type={'password'}/>
            <Button type={'submit'} className={'self-center'}>
                Iniciar sesion
            </Button>
        </StyledForm>
    );
}

export default LoginForm;