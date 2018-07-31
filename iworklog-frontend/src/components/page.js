import React from 'react'
import WorklogList from './worklog_list.js'

export const WorklogPage = () => {
    const issues = [
        {
            id: "CD-20626",
            title: "Логирование времени",
            estimated: 3600,
            logged: 2400,
            persistent: true,
        },
        {
            id: "CD-31509",
            title: "[newbuilding-search] презентер для выдачи ЖК",
            estimated: 14400,
            logged: 25213,
        },
        {
            id: "CD-32439",
            title: "[newbuilding-search] Поддержать новые фильтры",
            estimated: 18000,
            logged: 12600,
        },
    ]
    return (
        <div 
            style={{
                textDecoration: "none",
                margin: "0 5px",
                color: "#0064a8",
                borderBottom: "1px solid #0064a8",
            }}
        >
            <WorklogList
                issues={issues}
            />
        </div>
    )
}

export default WorklogPage