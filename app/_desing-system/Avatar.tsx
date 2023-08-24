import React from 'react';
import IUser from "@/types/User";
import tw, {styled} from "twin.macro";
import {Avatars} from "@/public/assets/avatars";
import Image from "next/image";
import Text from "@/app/_desing-system/Text";

type AvatarProps = {
    user: Omit<IUser, 'messages'>,
    avatarNumber: number
}

const StyledAvatar = styled.div(() => [
    tw`flex gap-2 items-center`
])

const StyledConnectedIcon = styled.div(() => [
    tw`w-3 h-3 rounded-full bg-green-400`
])

function Avatar(props:AvatarProps) {
    const {user: {username},avatarNumber} = props

    return (
        <StyledAvatar>
            <Image width={48} height={48} src={Avatars[avatarNumber]} alt={`${username}-avatar`} className={'rounded-full'}/>
            <Text variant={'bodylg'} className={'flex-1'}>{username}</Text>
            <StyledConnectedIcon/>
        </StyledAvatar>
    );
}

export default Avatar;