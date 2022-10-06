import React from 'react';

const Icon = ({children, onClick, style}) => {
    return (
        <span style={style} onClick={onClick} className="material-symbols-outlined">{children}</span>
    );
};

export default Icon;