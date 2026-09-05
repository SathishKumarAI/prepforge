---
qid: ing_df91491182__eli5__local
question: 'Explain: Events That Carry State — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 208
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:44-05:00'
sources: []
---

Imagine you’re at a busy train station where each platform is a “topic” and the trains are messages. In a simple pub/sub system, the trains just say *“Train A is leaving now!”*—they don’t tell anyone where it’s headed or who will ride it.  

Now picture a more useful service: every train also carries a small board with its destination, schedule, and the number of passengers on board. Those boards are the **state** that travels with the message. Subscribers (like commuters) can read not only that a train is leaving but also where it’s going and whether they need to hop on.  

In system design, “events that carry state” mean each published event includes all the data needed for downstream services—no extra lookup required. It keeps the flow fast, reduces dependencies, and lets every subscriber act immediately based on the full context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
