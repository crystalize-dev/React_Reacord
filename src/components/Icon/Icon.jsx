import React from 'react';

const Icon = ({children}) => {
    return (
        <span style={{userSelect: "none"}} className="material-symbols-outlined">{children}</span>
    );
};

export default Icon;