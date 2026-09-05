---
qid: ing_b9311d8583__eli5__local
question: 'Explain: Event Sourcing — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 221
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:30:47-05:00'
sources: []
---

Imagine a busy kitchen where every action—cutting onions, adding spices, turning on the stove—is written down on a single recipe card that everyone can read. That card is the **event log**: a chronological record of all changes (events) in the system.  

When a new dish is prepared, chefs (services) publish an event (“OnionCut” or “SauceAdded”) to a public bulletin board—this is **Pub/Sub**. Any chef who cares about that event can read it and update their own recipe copy, but no one changes the original card.  

Thus, the kitchen keeps a tamper‑proof history of every step (event sourcing) while letting many chefs stay in sync through the bulletin board (pub/sub). The log is immutable; the board distributes updates. This keeps the system consistent and recoverable without complex locking or direct calls between chefs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
