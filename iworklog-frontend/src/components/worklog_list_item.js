import React from 'react'
import ProgressBar from './progress.js'
import TimePicker from './time_picker.js'

export const WorklogListItem = (props) => {
    const {
        issue,
        color,
    } = props
    console.log(issue.id);
    let opened = false
    if (issue.id === 'CD-31509') {
        opened = true
    }
    const shadowStyle = opened ? "" : "inset 0 -5px 10px -5px rgba(0,0,0,0.9)"
    
    const showProgress = issue.persistent === true ? false : true
    let progressBar
    if (showProgress === true) {
        progressBar = (<ProgressBar
            logged={issue.logged}
            estimated={issue.estimated}
        />)
    }
    return (
        <div>
            <div 
                style={{
                    backgroundColor: color,
                    height: "80px",
                    padding: "10px",
                    color: "white",
                    boxShadow: shadowStyle,
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
            <div
                style={{
                    height: "80px",
                    display: opened ? "block" : "none",
                    backgroundColor: color,
                    boxShadow: "inset 0 -5px 10px -5px rgba(0,0,0,0.9)",
                    
                }}
            >

            </div>
        </div>
    )
}

export default WorklogListItem
