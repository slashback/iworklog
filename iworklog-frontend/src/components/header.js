import React from 'react'

export const Header = (props) => {
    const {
        logged
    } = props
    return (
        <div 
            style={{
                backgroundColor: "#41ccc7",
                height: "60px",
                boxShadow: "inset 0 -5px 10px -5px rgba(0,0,0,0.9)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        > 
            <span>
                Залогировано 7 часов 30 минут
            </span>
        </div>
    )
}

export default Header
