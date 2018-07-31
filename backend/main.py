import requests
from requests.auth import HTTPBasicAuth
from os import environ


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
    for issue in response['issues']:
        uid = issue['key']
        issue_type = issue['fields']['issuetype']['name']
        title = issue['fields']['summary']
        status = issue['fields']['status']['name']
        estimate = issue['fields']['aggregatetimeoriginalestimate']
        logged = issue['fields']['timespent']
        print((uid, title, issue_type, status, estimate, logged))


if __name__ == '__main__':
    get_issues()
