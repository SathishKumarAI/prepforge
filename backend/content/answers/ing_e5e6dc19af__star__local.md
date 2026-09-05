---
qid: ing_e5e6dc19af__star__local
question: 'Explain: Reciprocal Rank Fusion (RRF) — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 301
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:07:35-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the upgrade of our e‑commerce product search. Our click‑through rate on the “Related Products” carousel had slipped to 1.8% because each engine (semantic vector, keyword, and image similarity) produced disjoint rankings that confused users.

**Task** – My goal was to blend the three engines into a single list that maximized relevance while keeping latency under 200 ms per query.

**Action** – I implemented Reciprocal Rank Fusion (RRF). For each engine I kept the top‑10 results and assigned a weight of 1/(rank+40) to each item. The scores were summed across engines, then sorted globally. I added a small decay factor to penalize duplicates and used Redis Streams for real‑time score aggregation. I also set up A/B testing with a control group using the previous single‑engine ranking.

**Result** – Within two weeks of rollout, click‑through rose from 1.8% to 3.4% (+89%), while conversion on recommended products increased by 12%. The system stayed under 180 ms average latency. I learned that simple fusion formulas like RRF can outperform complex neural ensembles when engineered carefully for speed and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
