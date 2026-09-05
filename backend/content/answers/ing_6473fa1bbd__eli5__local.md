---
qid: ing_6473fa1bbd__eli5__local
question: 'Explain: Agent-card signed identity, not shared session cookies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 210
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:11-05:00'
sources: []
---

Think of an **agent‑card** like a special ID badge you hand to a robot helper.  
When the robot (the agent) wants to prove who it is, it shows this badge and signs its name with a secret key that only the badge holder knows. The signature is a short “stamp” that anyone can verify but cannot forge.

A **session cookie** is like a temporary note you give a waiter: it says “you’re in room 42 for the next hour.” Both the robot and the waiter read this note, so the note is shared between them.

In an agent‑card system, the badge (identity) stays with the robot; no shared cookie is needed. The robot proves its identity to anyone who checks the signature, but it never gives away a secret note that could be copied or misused by others. This keeps the robot’s true identity private while still letting people trust it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
