---
title: "What goes where in a Claude Code project"
description: "Each part of a Claude Code setup has one job. What to put in each, and what to keep out."
date: 2026-10-29
tags: ["Tools", "AI coding"]
cover: ../../assets/blog/21-what-goes-where.png
coverAlt: "What goes where in a Claude Code project"
draft: true
---
Most people put everything about their project into one big CLAUDE.md file.

It works for a while. Then the file gets long, the agent starts missing things, and nobody knows which rule lives where.

A Claude Code project has a few places, and each one has a job. Here's what goes where, and what doesn't.

**CLAUDE.md.** What every task needs: what the project is, how to run it, the few rules that always apply. Keep it short. Not everything you know goes here, because long files get followed worse.

**rules/.** Rules for one area, like tests or the API. A rule file can apply only to some folders, so the agent sees it when it works there. Rules for every task stay in CLAUDE.md.

**skills/.** A recipe for one kind of task, like "release a new version". It loads when the task fits, or when you type its name. Don't put must-follow rules in a skill. It may not load.

**agents/.** Helpers with one job, their own tools and their own model. They work apart from the main conversation and report back. Don't make one for work the main agent already does fine.

**Hooks, in settings.json.** Checks that always run before or after an action, and can block it. A script sitting in a folder does nothing by itself. It runs only if the settings file lists it.

**.mcp.json.** Connections to your tools: GitHub, a database, a browser. This file is shared with the team, so keys and passwords stay out of it.

If you remember one thing: when something must always happen, don't write it as a rule. Make it a hook.

A rule asks. A hook makes sure.
