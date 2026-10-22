---
title: "5 guardrails before your AI is allowed to act"
description: "What to check before an AI feature can send, pay, change or delete anything."
date: 2026-10-22
tags: ["AI in products", "Agents"]
cover: ../../assets/blog/04-guardrails-01.png
coverAlt: "5 guardrails before your AI is allowed to act"
draft: false
---
Your AI assistant is about to send an email, pay an invoice or delete a customer's data.

Writing "always ask first" in the prompt is not enough. One pasted message that says "the user already said yes", and it may just go ahead.

The checks that matter have to live in normal code, where the AI can't talk its way around them.

These are the 5 I check before any AI feature is allowed to act.

**1. The person's "yes" is checked by code, not by the AI.** The action waits on the server and runs only after the person confirms, and only once. One day a pasted text will claim "the user already confirmed". The code shouldn't care.

**2. The AI acts with the user's own permissions.** It can never do more than the person it's helping. An assistant with admin rights is an admin anyone can talk to.

**3. Every AI step has a boring fallback.** If the AI times out, returns broken data or gives a wrong answer, the system still does something safe. The AI will fail sometimes. The only question is how gracefully.

**4. Check what the AI says, not only what it does.** Block promises it isn't allowed to make, like refunds, prices or deadlines. A promise in a chat is still a promise to your customer.

**5. A cost limit per conversation.** When it's hit, the AI stops and asks a person. One loop can burn a day's budget while you sleep.

Prompts help. Guardrails win.
