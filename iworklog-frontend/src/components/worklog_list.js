import React from 'react'
import Header from "./header";
import WorklogListItem from './worklog_list_item.js'

export const WorklogList = (props) => {
    const {
        issues,
    } = props
    const colors = [
        "#4D9DD0",
        "#4873A8",
        "#544268",
        "#524364",
    ]
    console.log(issues);
    const listItems = issues.map((item, idx) => {
        const colorIdx = idx % colors.length
        const color = colors[colorIdx]
        const opened = props.currentOpened == item.id ? true : false
        return (
            <WorklogListItem 
                issue={item} 
                key={item.id} 
                color={color}  
                currentActivity={props.currentActivity}
                opened={opened}
                onChangeCurrentOpened={props.onChangeCurrentOpened}
                onChangeCurrentActivity={props.onChangeCurrentActivity}
                onWorkLog={props.onWorkLog}
            />
        )
    }
        
    )
    return (
        <div 
            style={{
            }}
        >
            <Header />
            <div>
                {listItems}
            </div>     
        </div>
    )
}

export default WorklogList
