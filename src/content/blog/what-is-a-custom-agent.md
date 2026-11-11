---
title: "Custom agents in Claude Code: what, why and how"
description: "What a custom agent is, why it helps, and how to make one in a few minutes."
date: 2026-11-11
tags: ["Agents", "AI coding"]
draft: false
---
Custom agents in Claude Code: what they are, why they're useful, and how to make one.

## What it is

A specialist your main agent can hand work to. It gets one job, its own instructions, its own tools and its own model. It does the job in a separate space and sends back a short report.

## Why it's useful

1. Your main chat stays clean. The specialist can read 50 files, and only its summary comes back. Long sessions stay sharp.
2. It stays in its lane. A reviewer without edit tools can't "fix" things behind your back. It can only report.
3. You pay less. Simple jobs like running tests go to a fast, cheap model. Careful review gets the strongest one.
4. It does the job the same way every time. You explain it once, not in every chat.

Good first agents: a code reviewer, a test runner, a docs researcher.

## How to make one

1. Type /agents in Claude Code and choose to create a new agent.
2. Pick project (this repo only) or personal (all your projects).
3. Describe the job in plain words. Claude drafts the file for you.
4. Fix the description. The main agent reads it to decide when to call the specialist. "Use after every code change" works. "Code reviewer" doesn't.
5. Remove every tool it doesn't need.
6. Try it on a real task: "Use the reviewer agent on my last change." Read the result and tighten the instructions.

One thing people miss: it doesn't see your chat. It only knows what the main agent tells it. Vague handoff, weak result.
