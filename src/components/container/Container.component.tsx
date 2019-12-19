import React from 'react';

import {
    ContainerStyle
} from './container.style';

interface IProps {
    children: React.ReactNode
}
const Container = (props: IProps) => {
    const { children } = props;
    return (
        <ContainerStyle>
            { children }
        </ContainerStyle>
    )
}

export default Container;