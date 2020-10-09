import React from 'react'

function Header() {
    const headerStyle = {
        width : '100%',
        height : '3em',
        border : '1px white solid'
    }
    return (
        <div style={headerStyle}>
            <div className="productCart">{}</div>
        </div>
    )
}

export default Header
