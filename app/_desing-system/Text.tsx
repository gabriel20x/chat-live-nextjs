import { ReactNode, useMemo} from "react";
import tw, {styled} from "twin.macro";

type TextVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'bodylg'
    | 'bodymd'
    | 'bodysm'
    | 'label'
    | 'span'

type TextProps = {
    children: ReactNode,
    variant: TextVariant,
    className?: string
}

const StyledText = styled.span(({role, className}) => [
    tw`text-current`,
    className ? tw`${className}` : null,
    role === 'h1' && tw`text-[2.75rem] font-bold leading-[3.25rem]`,
    role === 'h2' && tw`text-[2.5rem] font-bold leading-[3rem]`,
    role === 'h3' && tw`text-[2rem] font-bold leading-[2.5rem]`,
    role === 'h4' && tw`text-2xl font-bold leading-[3.5rem]`,
    role === 'h5' && tw`text-xl font-bold leading-[3.5rem]`,
    role === 'h6' && tw`text-lg font-bold leading-[3.5rem]`,
    role === 'label' && tw`text-base font-bold`,
    role === 'bodylg' && tw`text-lg`,
    role === 'bodymd' && tw`text-base`,
    role === 'bodysm' && tw`text-sm`,
])

function Text(props : TextProps) {
    const {children, variant, className} = props

    const As = useMemo(() => {
        if (variant === 'h1') return 'h1';
        if (variant === 'h2') return 'h2';
        if (variant === 'h3') return 'h3';
        if (variant === 'h4') return 'h4';
        if (variant === 'h5') return 'h5';
        if (variant === 'h6') return 'h6';
        if (variant === 'bodylg') return 'p';
        if (variant === 'bodymd') return 'p';
        if (variant === 'bodysm') return 'p';
        if (variant === 'label') return 'label';
        return 'span';
    }, [variant]);

    return (
        <StyledText role={variant} className={className}>
            <As>
                {children}
            </As>
        </StyledText>
    );
}

export default Text;