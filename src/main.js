const core = require('@actions/core');
const github = require('@actions/github');
const DingRobot = require('ding-robot');

async function run() {
  try {
    const context = github.context;
    const pr = context.payload.pull_request;
    const dingTalkToken = core.getInput('ding_talk_token');
    const extraContent = core.getInput('extra_content') || '';
    const repoUrl = core.getInput('repo_url');
    const atAll = core.getInput('at_all') || false;

    if (!dingTalkToken) {
      core.setFailed('Please set DingTalk access token!');
    }

    const robot = new DingRobot(dingTalkToken, error => {
      if (error) {
        core.setFailed(error.message);
      }
    });
    const prLink = repoUrl ? `${repoUrl}/${pr.number}` : pr.html_url;
    const content = `📢 ${pr.user.login} 发起PR: (${pr.title}), 请大家帮忙review 👀 \n🔗 链接: ${prLink} \n${extraContent}`;
    robot.atAll(atAll).text(content);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
