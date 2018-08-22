import React from 'react'

export const TimePicker = (props) => {
    const {
        issueId,
        onWorkLog,
    } = props
    const intervals = [
        {
            title: '15m',
            seconds: 15*60,
        }, {
            title: '30m',
            seconds: 30*60,
        }, {
            title: '1h',
            seconds: 60*60,
        }, {
            title: '2h',
            seconds: 60*60*2,
        },
    ]
    const itemStyle = {
        color: 'white',
        margin: "10px 10px",
        padding: '5px',
        backgroundColor: "rgba(0,0,0,0.3)",
        width: '40px',
        borderRadius: "9px",
        boxShadow: "0px 0px 2px 2px rgba(50, 50, 50, 0.3)",
    }
    return (
        <div 
            style={{
                marginTop: "12px",
                display: 'flex',
                justifyContent: "space-around",
            }}
        > 
            {intervals.map((item) => {

                return (<div
                    style={itemStyle}
                    key={item.title}
                    onClick={() => onWorkLog(issueId, item.seconds)}
                >
                    {item.title}                
                </div>)
            }) }
        </div>
    )
}

export default TimePicker
