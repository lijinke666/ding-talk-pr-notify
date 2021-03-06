<p align="center">
  <a href="">
    <img width="140" src="https://avatars.githubusercontent.com/u/73879334?s=200&v=4" />
  </a>
</p>

<h1 align="center">Ding Talk PR Notify</h1>

![](https://img.shields.io/github/workflow/status/actions-cool/action-js-template/CI?style=flat-square)
[![](https://img.shields.io/badge/marketplace-action--js--template-blueviolet?style=flat-square)](https://github.com/marketplace/actions/action-js-template)
[![](https://img.shields.io/github/v/release/actions-cool/action-js-template?style=flat-square&color=orange)](https://github.com/actions-cool/action-js-template/releases)

## ๐ How to use?

```bash
name: ๐ PR Ding Talk Notify

on: pull_request

# ๅฆๆไธๆณ้ข็น็ๆถๅฐๆ็คบ, ๅฏไปฅๅชๅจPRๆๅผ็ๆถๅๆ็คบ
# on:
#   pull_request:
#     types: [opened]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: lijinke666/ding-talk-pr-notify@main
        with:
          ding_talk_token: ${{ secrets.DING_TALK_ACCESS_TOKEN}}  # ้้ webhook token (ๅฟๅกซ)
          at_all: true  # ๆฏๅฆ@ๆๆไบบ (ๅฏ้)
          extra_content: '' # ้ขๅค็ๆๆฌๅๅฎน (ๅฏ้)
```

![image](https://user-images.githubusercontent.com/21015895/114188466-c16b6480-997b-11eb-8953-f881cc3a04ee.png)


## ๐ Catalog Introduction

```
โโโ .github/workflows/     The CI for make sure it is packaged correctly
โโโ dist                   Package the generated Aciton execution code
โโโ src                    Component home directory
โ   โโโ main.js            Your code
โโโ action.yml             Action config
```

The rest of the documents can be consulted by yourself.

## ๐ค Command introduction

| Name | Desc |
| -- | -- |
| package | action build for release |
| format | prettier write |
| format-check | prettier check |

## โก Feedback

You are very welcome to try it out and put forward your comments. You can use the following methods:

- Report bugs or consult with [Issue](https://github.com/actions-cool/action-js-template/issues)
- Submit [Pull Request](https://github.com/actions-cool/action-js-template/pulls) to improve the code of `action-js-template`

ไนๆฌข่ฟๅ?ๅฅ ้้ไบคๆต็พค

![](https://github.com/actions-cool/resources/blob/main/dingding.jpeg?raw=true)

## Changelog

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](./LICENSE)
