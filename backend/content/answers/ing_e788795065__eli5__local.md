---
qid: ing_e788795065__eli5__local
question: 'Explain: Append-only (mostly) — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 248
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:11-05:00'
sources: []
---

Imagine a huge, ever‑growing library where new books are added but the old ones never change or disappear. Each book is a *data stream*: it arrives in one direction (you read from the front), and you can keep adding more pages later, but you never rewrite what’s already there. That’s the **append‑only** principle – data is written once and only ever appended to, ensuring integrity and simplifying backups.

Now picture each book not as a single bound volume but as a *collection of sticky notes* that can be rearranged, expanded, or removed without tearing the whole page. In machine‑learning terms, an **elastic document** is this flexible set of key–value pairs (like a JSON object) that can grow or shrink on the fly. It lets algorithms ingest new features or drop obsolete ones while keeping the core record intact.

Together, append‑only streams and elastic documents give ML pipelines a reliable, evolving data source: you keep adding fresh evidence, but every record stays true to its original form, just with more context when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
