import React from 'react';

const style = {
    fontSize: '15px',
    color: '#911A1B',
    fontWeight: 600,
    marginTop: '20px',
    marginBottom: '25px',
    letterSpacing: '1px'
}
interface IProps {
    title: string
}

const ContentTitle:React.FC<IProps> = ({ title }) => (
    <div style={style}>{ title }</div>
)

export default ContentTitle;