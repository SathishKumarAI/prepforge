---
qid: ing_d348fa7a68__eli5__local
question: 'Explain: Write-Back (Write-Behind) — Caching Strategies Summary | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 221
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:55-05:00'
sources: []
---

Imagine a busy kitchen where chefs (the computer’s main memory) keep all the ingredients on hand, but sometimes they’re too slow to serve diners immediately. To speed things up, the kitchen hires a sous‑chef (a cache). The sous‑chef keeps a small stock of popular dishes ready. When a diner orders a dish, the sous‑chef serves it right away—this is **write‑back** (or **write‑behind**) caching.

In this strategy, when a new recipe (data) arrives, the sous‑chef writes it into its own pantry instead of sending it straight to the main kitchen. It marks that item as “dirty” (modified). Only after some time or when the pantry gets full does the sous‑chef batch‑send all dirty items back to the main kitchen, updating the master recipe book. This keeps the front line fast while ensuring the core database eventually receives every change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
