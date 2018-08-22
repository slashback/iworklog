import React from 'react'
import ProgressBar from './progress.js'
import TimePicker from './time_picker.js'
import ActivityPicker from './activity_picker.js'

export const WorklogListItem = (props) => {
    const {
        issue,
        color,
        opened,
        currentActivity,
        onChangeCurrentOpened,
        onChangeCurrentActivity,
        onWorkLog,
    } = props
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
                onClick={() => onChangeCurrentOpened(issue.uid)}
            >
                <span
                    style={{
                        margin: "0 8px",
                        fontWeight: "bold",
                        fontSize: "large"
                    }}
                >
                    {issue.uid}
                </span>
                <span>
                    {issue.title}
                </span>
                {progressBar}
            </div>
            <div
                style={{
                    height: "120px",
                    display: opened ? "block" : "none",
                    backgroundColor: color,
                    boxShadow: "inset 0 -5px 10px -5px rgba(0,0,0,0.9)",
                    
                }}
            >
                <ActivityPicker 
                    currentActivity={currentActivity} 
                    onChangeCurrentActivity={onChangeCurrentActivity}
                />
                <TimePicker
                    issueId={issue.uid}
                    onWorkLog={onWorkLog}
                />
            </div>
        </div>
    )
}

export default WorklogListItem
