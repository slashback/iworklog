import React from 'react'

export const TimePicker = () => {
    // const {
    //     logged
    // } = props
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

    }
    return (
        <div 
            style={{
            
            }}
        > 
            {intervals.map((item) => {

                return (<span
                    style={itemStyle}
                >
                    {item.title}                
                </span>)
            }) }
        </div>
    )
}

export default TimePicker
