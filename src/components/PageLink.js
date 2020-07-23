import React from 'react'


const PageLink = ({ disabled, handleClick, children, pageNumber, maxPageNum}) => {
    if (disabled){
        return <div onClick={handleClick} className="city disabled">
            {children}    
        </div>
    }
    return (
        <div>
            <div className="city" onClick={handleClick}>
            {children}
            </div>
            
        </div>
    )
};

export default PageLink