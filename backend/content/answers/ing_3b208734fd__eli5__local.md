---
qid: ing_3b208734fd__eli5__local
question: 'Explain: Span Processors — GitHub - Arize-ai/phoenix: AI Observability
  & Evaluation \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 199
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:09:52-05:00'
sources: []
---

Imagine your computer’s data flow as a busy highway of tiny cars called **spans**—each car carries a piece of work (like “load image” or “run model”). A **Span Processor** is like a traffic‑control system that watches every car on the road.

When a span starts, the processor can do things such as:

* **Log it** – write a note to a log file.
* **Send it out** – forward the span to a monitoring service (Arize) for analysis.
* **Filter or batch** – keep only spans that matter or group many together before sending.

So, just as traffic lights and toll booths decide what happens to each car on a highway, Span Processors decide how each span is handled—captured, stored, forwarded, or discarded—so you can later study the system’s performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
