import React from 'react'
import {formatTime} from '../utils.js'

export const ProgressBar = (props) => {
    const {
        logged,
        estimated,
    } = props
    let progress =  Math.round(logged * 100 / estimated)
    progress = progress > 100 ? 100 : progress

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
                    {formatTime(logged)}
                </span>
                <span>
                    {formatTime(estimated)}
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
