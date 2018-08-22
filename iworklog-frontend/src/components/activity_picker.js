import React from 'react'

export const ActivityPicker = (props) => {
    const {
        currentActivity,
        onChangeCurrentActivity,
    } = props
    
    const activities = [
        'code', 'support', 'review',
    ]
    const itemStyle = {
        color: 'white',
        margin: "10px 10px",
        padding: '5px',
        backgroundColor: "rgba(0,0,0,0.3)",
        width: '60px',
        borderRadius: "9px",
    }
    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: "space-around",
            }}
        > 
            {activities.map((item) => {
                let style
                if (item === currentActivity) {
                    style = {
                        ...itemStyle,
                        backgroundColor: 'rgba(255,255,255,0.3)',
                    }
                } else {
                    style = itemStyle
                }
                return (<div
                    style={style}
                    key={item}
                    onClick={() => onChangeCurrentActivity(item)}
                >
                    {item}                
                </div>)
            }) }
        </div>
    )
}

export default ActivityPicker
