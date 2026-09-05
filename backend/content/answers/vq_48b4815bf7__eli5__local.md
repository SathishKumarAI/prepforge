---
qid: vq_48b4815bf7__eli5__local
question: When would you use a Tumbling Window Trigger in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 178
total_tokens: 339
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:13-05:00'
sources: []
---

Imagine your data lake is a big bathtub that keeps filling up with water (new records). You want to take a snapshot of the water every minute so you can see how much has poured in and process it right away—without waiting for hours or days. In Azure Data Factory, a **Tumbling Window Trigger** does exactly that: it chops time into equal, non‑overlapping slices (“windows”) and fires a pipeline each slice as soon as the window closes.

Use it when you need near‑real‑time processing of fresh data—like monitoring sensor feeds, logging events, or updating dashboards. It guarantees each window runs once (no repeats) and that windows run in order, so your downstream tasks always see a consistent snapshot of what arrived during that period.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
