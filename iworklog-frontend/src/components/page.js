import React from 'react'
import WorklogList from './worklog_list.js'


export const WorklogPage = (props) => {
    return (
        <div 
            style={{
                textDecoration: "none",
                margin: "0 5px",
                color: "#0064a8",
                borderBottom: "1px solid #0064a8",
            }}
        >   
            <div
                style={{
                    display: props.loading ? 'flex' : 'none',
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    width: "100%",
                    zIndex: '1',
                    paddingTop: '50px',
                    justifyContent: 'center',
                    fontSize: '300%',
                    font: '50px',
                    backgroundColor: "rgba(255,255,255, 0.8)"
                }}
            >
                <span>LOADING</span>
            </div>
            <WorklogList
                issues={props.issues}
                currentActivity={props.currentActivity}
                currentOpened={props.currentOpened}
                onChangeCurrentOpened={props.onChangeCurrentOpened}
                onChangeCurrentActivity={props.onChangeCurrentActivity}
                onWorkLog={props.onWorkLog}
            />
        </div>
    )
}

export default WorklogPage