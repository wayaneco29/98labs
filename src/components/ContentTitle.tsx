import React from 'react';

const style = {
    fontSize: '1rem',
    color: '#911A1B',
    fontWeight: 500,
    marginTop: '20px',
    marginBottom: '25px',
}

interface IProps {
    title: string
}

const ContentTitle:React.FC<IProps> = ({ title }) => (
    <div style={style}>{ title }</div>
)

export default ContentTitle;