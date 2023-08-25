'use client'

import {useRouter} from "next/navigation";
import Text from "@/app/_desing-system/Text";
import Button from "@/app/_desing-system/Button";
import Input from "@/app/_desing-system/Input";
import tw, {styled} from "twin.macro";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {ILogin} from "@/types/Auth";
import {useLoginMutation} from "@/api/auth-api";
import {setAccessToken} from "@/lib/auth-token-cookies/authTokenCookies";

const StyledForm = styled.form(() => [
    tw`flex flex-col gap-2`
])

function LoginForm() {

    const router = useRouter()
    const [loginData, setLoginData] = useState<ILogin>({username:'',password:''})
    const [login, {data, isSuccess}] = useLoginMutation()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        // TODO: Post Login data and recieve the access_token
        login(loginData)
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginData((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    // TODO: Detect if the login was success and save the access_token in the cache
    // TODO: on success, redirect to chat room
    useEffect(() => {
        if(data?.access_token) {
            setAccessToken(data)
            router.push('/chat_room')
        }
    }, [isSuccess]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Text variant={"h5"} className={'text-center'}>Login Form</Text>
            <Input name={'username'} id={'username'} label={'Usuario'} onChange={handleOnChange}/>
            <Input name={'password'} id={'password'} label={'Contraseña'} type={'password'} onChange={handleOnChange}/>
            <Button type={'submit'} className={'self-center'}>
                Iniciar sesion
            </Button>
        </StyledForm>
    );
}

export default LoginForm;