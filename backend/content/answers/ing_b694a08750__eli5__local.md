---
qid: ing_b694a08750__eli5__local
question: 'Explain: Make Processing Safe to Repeat — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 225
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:51-05:00'
sources: []
---

Imagine you’re sending a message through a town’s mail delivery service that sometimes loses letters or delivers them twice. To keep the city running smoothly, every time the post office receives a letter it writes down exactly what happened—who sent it, when, and what was inside—so if the same letter shows up again, the post office can just ignore it instead of processing it twice.

In system design, that “write‑down” is called an **idempotent** operation. A webhook is a way for one service to tell another: “Hey, here’s an event.” Because network hiccups may cause the same webhook to arrive multiple times, we make the receiving side *repeat‑safe*: it records each event’s unique ID and checks it before acting. If the ID has already been handled, the service skips processing, just like the post office skipping a duplicate letter. This keeps data consistent even when messages are retried or duplicated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
