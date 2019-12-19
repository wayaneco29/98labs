import React from 'react';

interface IProps {
    children: React.ReactNode
}

const ContentText:React.FC<IProps> = ({ children }) => (
    <div>{ children }</div>
)

export default ContentText;