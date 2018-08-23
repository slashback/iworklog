import React, { Component } from 'react';
import WorkLogPage from './page.js'
import { getUserNameFromUrl } from '../utils.js'

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
            loading: !this.state.loading,
        })
    }

    getIssues() {
        this.onChangeLoadingState()
        const userName = getUserNameFromUrl()
        fetch(`/api/issues/${userName}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    issues: result.issues,
                })
                this.onChangeLoadingState()
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
                this.onChangeLoadingState()
            }
        )
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
        this.getIssues()
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