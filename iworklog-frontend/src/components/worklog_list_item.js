import React from 'react'
import ProgressBar from './progress.js'

export const WorklogListItem = (props) => {
    const {
        issue,
        color,
    } = props
    console.log(color);
    const progress =  Math.round(issue.logged * 100 / issue.estimated)
    console.log(progress);
    
    const showProgress = issue.persistent === true ? false : true
    let progressBar
    if (showProgress === true) {
        progressBar = <ProgressBar progress={progress} />
    }
    return (
        <div 
            style={{
                backgroundColor: color,
                height: "80px",
                padding: "10px",
                color: "white",
                boxShadow: "inset 0 -5px 10px -5px rgba(0,0,0,0.9)",
                textAlign: "left",
                position: "relative",
            }}
        > 
            <span
                style={{
                    margin: "0 8px",
                    fontWeight: "bold",
                    fontSize: "large"
                }}
            >
                {issue.id}
            </span>
            <span>
                {issue.title}
            </span>
            {progressBar}
        </div>
    )
}

export default WorklogListItem
