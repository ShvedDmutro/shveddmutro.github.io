---
title: "Code decides. The model talks."
description: "The rule for AI inside a product: AI understands and writes language, code makes the decisions."
date: 2026-10-04
tags: ["AI in products"]
draft: true
---
The best rule I know for AI inside a product is four words long.

Code decides. The model talks.

AI is great at understanding what a person meant. Typos, slang, half a sentence, a voice message.
It's bad at being a reliable state machine.

So split the job.
AI reads the message and turns it into clean data.
Code decides what happens next.
AI writes the answer in a friendly human way.

I learned this the slow way. When the rules live in the prompt, every fix is one more paragraph. Every new paragraph breaks something else. The prompt grows and the bot gets worse.

When the rules live in code, you can test them like any other code.
