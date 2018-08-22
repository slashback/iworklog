import React, { Component } from 'react';
import WorkLogPage from './page.js'

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

class PageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentActivity: 'support',
            currentOpened: '',
            issues: [],
            loading: false,
        }
        this.onChangeCurrentOpened = this.onChangeCurrentOpened.bind(this)
        this.onChangeCurrentActivity = this.onChangeCurrentActivity.bind(this)
        this.onWorkLog = this.onWorkLog.bind(this)
        this.onChangeLoadingState = this.onChangeLoadingState.bind(this)
    }

    onChangeLoadingState() {
        this.setState({
            loading: !!this.state.loading,
        })
    }

    onWorkLog(issueId, time) {
        console.log(`LOGGED on ${issueId}: ${time} (${this.state.currentActivity})`);
    }

    onChangeCurrentOpened(issueKey) {
        console.log(issueKey);
        
        if (issueKey === this.state.currentOpened) {
            this.setState({
                currentOpened: ''
            })
        } else {
            this.setState({
                currentOpened: issueKey,
            })
        }
    }

    onChangeCurrentActivity(activity) {
        this.setState({
            currentActivity: activity,
        })
    }

    componentDidMount() {
        this.setState({
            issues: issues,
        })
    }
    
    render() {
        return (
            <WorkLogPage 
                issues={this.state.issues}
                currentActivity={this.state.currentActivity}
                currentOpened={this.state.currentOpened}
                onChangeCurrentOpened={this.onChangeCurrentOpened}
                onChangeCurrentActivity={this.onChangeCurrentActivity}
                onWorkLog={this.onWorkLog}
                loading={this.state.loading}
            />
        );
    }
}

export default PageContainer