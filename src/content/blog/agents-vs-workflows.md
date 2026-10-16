---
title: "Most AI agents should be workflows"
description: "Most business tasks need plain code with a few AI steps, not a free-running agent."
date: 2026-10-16
tags: ["Agents"]
cover: ../../assets/blog/02-agent-vs-workflow.png
coverAlt: "Most AI agents should be workflows"
draft: false
---
Most of the "AI agents" I've been asked to build should have been workflows.

An agent means the AI decides every step on its own. Looks great in a demo. In real work, it's hard to trust.

Take a simple case. A customer emails: "Can I move my booking to Friday?"

The agent way: the AI reads it, decides to check the calendar, decides to change the booking, decides what to reply. Any of those steps can go wrong.

The workflow way: the AI only reads the email and pulls out "booking, new date Friday". Then normal code checks the date, changes the booking and sends the confirmation. Same every time.

The AI does the one thing code can't: understand a messy human message. Code does the rest.

A real agent is worth it only when nobody can plan the steps in advance. For most business tasks, you can.
