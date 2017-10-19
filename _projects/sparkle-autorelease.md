---
layout: project
title: Sparkle-Autorelease
github_link: h4llow3En/sparkle-autorelease
status: "released"
languages: [Python]
---
Publish a new release of an OS X application via the [Sparkle-Framework](http://sparkle-project.org) can be a mess if you are not an OS X Developer. You have to go to serveral Points manually.

This script makes dsa-signed releases for your app using [github-release](https://github.com/aktau/github-release).

## Usage
The script only works with Python2.7 (Python3 will be supportet later).

1. Build and zip your App as usual.
2. To publish a new release update the config.json
3. Run `python release.py`
4. Done

__Notice:__ This script works __*only*__ if the appcast.xml is in the same repository in the gh-pages branch.
