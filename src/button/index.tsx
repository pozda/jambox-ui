import * as React from 'react';
import { StyledButton } from './buttonStyles';

interface Props {
    children: string | React.ReactNode;
    type: 'submit' | 'button' | 'reset'
}

export default class Button extends React.Component<Props> {
    render() {
        const { children, type = 'button' } = this.props
        return (
            <StyledButton type={type}>{children}</StyledButton>
        )
    }
}