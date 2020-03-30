import * as React from 'react';
import { StyledDutton } from './duttonStyles';

interface Props {
    children: string | React.ReactNode;
    type: 'submit' | 'button' | 'reset'
}

export default class Dutton extends React.Component<Props> {
    render() {
        const { children, type = 'button' } = this.props
        return (
            <StyledDutton type={type}>{children}</StyledDutton>
        )
    }
}