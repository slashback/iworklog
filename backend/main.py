import json
import requests
from bottle import route, run, response
from os import environ
from requests.auth import HTTPBasicAuth


jira_user = environ.get('JIRA_USER')
jira_token = environ.get('JIRA_TOKEN')

def get_issues():
    if not (jira_user and jira_token):
        raise EnvironmentError(
            'Please set correct credentials (JIRA_USER, JIRA_TOKEN)'
        )
    get_issues_url = (
        'https://cianru.atlassian.net/rest/api/2/search?jql='
        'sprint%20in%20openSprints%20()%20%26%20assignee%20%3D%20m.mazaev'
    )
    response = requests.get(
        get_issues_url,
        auth=HTTPBasicAuth(jira_user, jira_token),
    ).json()
    result = []
    for issue in response['issues']:
        resp_item = dict(
            uid=issue['key'],
            issue_type=issue['fields']['issuetype']['name'],
            title=issue['fields']['summary'],
            status=issue['fields']['status']['name'],
            estimate=issue['fields']['aggregatetimeoriginalestimate'] or 0,
            logged=issue['fields']['timespent'] or 0,
        )
        result.append(resp_item)
        print(resp_item)
    return result


@route('/issues')
def get_current_sprint_issues():
    issues = []
    error = None
    try:
        issues = get_issues()
    except Exception as ex:
        error = str(ex)
    resp = {
        'issues': issues,
        'error': error,
    }
    response.content_type = 'application/json'
    return json.dumps(resp)


if __name__ == '__main__':   
    run(host='localhost', port=8080)
