---
qid: ing_7e7de44f21__eli5__local
question: 'Explain: When to Use Webhooks — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 228
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:57:28-05:00'
sources: []
---

Think of a webhook like a “post‑it” you stick on a wall that says, *“When the door opens, knock.”*  
In software, one service (the “door”) can tell another (the “knocker”) right away when something happens—no waiting for a poll or manual check.  

Use webhooks when:  

1. **You need instant updates** – e.g., an e‑commerce site wants to know as soon as a payment is confirmed so it can ship the order.  
2. **The event is rare or unpredictable** – polling would waste resources; a webhook fires only when the event actually occurs.  
3. **You want to keep services loosely coupled** – each service just publishes its own events and listens for those it cares about, rather than constantly asking others what’s new.

So whenever you need real‑time, efficient communication between independent systems, drop a “post‑it” (webhook) on the wall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
