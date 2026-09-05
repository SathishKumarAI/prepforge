---
qid: ing_c015390813__eli5__local
question: 'Explain: Store Events for Audit and Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 271
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:17-05:00'
sources: []
---

Imagine a café that keeps a **logbook** of every coffee order it takes—who ordered, what they chose, when, and the price. If later someone asks “Did we serve a latte to Alice on Tuesday?” or if a software bug caused a wrong bill, the barista can simply flip back through the logbook, see exactly what happened, and even replay the steps (re‑issue the latte) to fix it.

In system design, that logbook is an **event store**.  
*Event*: a record of something that happened (“User 123 logged in”).  
*Audit*: checking past events to verify compliance or investigate problems.  
*Replay*: re‑processing stored events (e.g., rebuilding a user’s shopping cart) by feeding them again into the system.

Webhooks are like the café’s “order ticket” sent out instantly: when an event occurs, the system pushes that record to any interested service (e.g., analytics or billing). By also writing each webhook payload into the event store, we have both a real‑time stream and a durable history—so we can audit what happened and replay events whenever needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
