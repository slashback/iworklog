import json
from dataclasses import asdict, dataclass
from typing import Any, Dict, List
from aiohttp import web, BasicAuth, ClientSession
from os import environ


jira_user = environ.get('JIRA_USER')
jira_token = environ.get('JIRA_TOKEN')
# jira_user = 'm.mazaev'
jira_username = 'alexey.sozykin'


@dataclass
class Issue:
    uid: int
    issue_type: str
    title: str
    status: str
    estimated: int
    logged: int


async def fetch_issues_from_jira(
        client: ClientSession
    ) -> List[Dict[str, Any]]:
    if not (jira_user and jira_token):
        raise EnvironmentError(
            'Please set correct credentials (JIRA_USER, JIRA_TOKEN)'
        )
    get_issues_url = (
        f'https://cianru.atlassian.net/rest/api/2/search?jql='
        f'sprint%20in%20openSprints%20()%20%26%20assignee%20%3D%20{jira_username}'
    )
    async with client.get(
        get_issues_url,
        auth=BasicAuth(jira_user, jira_token)
    ) as resp:
        assert resp.status == 200
        jira_resp = await resp.json()
        return jira_resp['issues']

async def get_issues() -> List[Issue]:
    raw_issues: List[Dict[str, Any]] = []
    async with ClientSession() as client:
        raw_issues = await fetch_issues_from_jira(client)
    
    result = []
    for issue in raw_issues:
        resp_item = Issue(
            uid=issue['key'],
            issue_type=issue['fields']['issuetype']['name'],
            title=issue['fields']['summary'],
            status=issue['fields']['status']['name'],
            estimated=issue['fields']['aggregatetimeoriginalestimate'] or 0,
            logged=issue['fields']['timespent'] or 0,
        )
        result.append(resp_item)
    return result


async def get_current_sprint_issues(request: web.Request) -> web.Response:
    issues: List[Issue] = []
    error = None
    try:
        issues = await get_issues()
    except Exception as ex:
        error = str(ex)
    resp = {
        'issues': [asdict(issue) for issue in issues],
        'error': error,
    }
    return web.json_response(resp)


if __name__ == '__main__':   
    app = web.Application()
    app.add_routes([
        web.get('/api/issues', get_current_sprint_issues)
    ])
    web.run_app(app)
