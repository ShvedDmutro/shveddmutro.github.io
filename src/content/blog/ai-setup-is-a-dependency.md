---
title: "Your AI coding setup is a dependency"
description: "Keep rules and workflows portable, so losing one AI account doesn't stop your work."
date: 2026-10-06
tags: ["AI coding", "Tools"]
draft: false
---

Your AI coding setup is a dependency. Treat it like one.

This week I read a post from a developer who lost access to his AI account overnight. No warning, no explanation, and his whole workflow lived inside that one tool.

Whatever happened in that case, the risk is real for all of us.

Over the last year many of us moved a lot of real engineering work into our AI tools: project rules, prompts, workflows, custom agents. If all of it only works in one tool, behind one login, it's a single point of failure.

So I checked my own setup this week. It only worked in one tool. Now my rules live in one plain file that Claude Code and Codex both read. It took half a day.

Three cheap habits:
1. Keep rules and workflows in plain files that live with your code, not only in a tool's settings.
2. Write them so any capable agent can follow them. Plain instructions first, tool-specific tricks only where you need them.
3. Once in a while, open your project in a second tool and see what breaks.

The model is replaceable. Your way of working shouldn't depend on one login.
