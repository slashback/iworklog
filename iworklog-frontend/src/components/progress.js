import React from 'react'

export const ProgressBar = (props) => {
    const progress = props.progress > 100 ? 100 : props.progress
    console.log(progress);
    
    return (
        <div 
            style={{
                position: "absolute",
                bottom: "15px",
                width: "92%",
            }}
        >  
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <span>
                    2h
                </span>
                <span>
                    15h
                </span>
            </div>
            <div
                style={{
                    position: "relative",
                    height: "5px",
                    width: `${progress}%`,
                    backgroundColor: "white"
                }}
            >
            </div>
        </div>
    )
}

export default ProgressBar
