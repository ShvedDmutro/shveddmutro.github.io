---
title: "Make a custom agent in 10 minutes"
description: "Five decisions: a name, one job, what it can touch, which model, and how it reports back."
date: 2026-11-03
tags: ["Agents", "AI coding"]
cover: ../../assets/blog/16-agent-anatomy.png
coverAlt: "Make a custom agent in 10 minutes"
draft: true
---
You can create a custom agent in about 10 minutes. It comes down to five decisions.

1. A name. Short and obvious: reviewer, test-runner, docs-researcher.
2. The job, in one sentence. The main agent also reads this to decide when to call it, so write it clearly.
3. What it can touch. A reviewer only reads. A researcher only searches. Fewer tools, fewer surprises.
4. Which model. Quick, simple work runs fine on a fast model. Careful judgment gets the strongest one.
5. How it reports back. Say exactly what to return: a short list, pass or fail, the source it used.

Then give it a real task, read what it did, and tighten the instructions. The first version is never the last.
