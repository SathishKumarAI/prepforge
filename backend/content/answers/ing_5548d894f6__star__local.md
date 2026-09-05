---
qid: ing_5548d894f6__star__local
question: 'Explain: Summary — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 386
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:37-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building an AML (anti‑money‑laundering) scoring engine that needed to process ~500k transactions per day. The data science team had trained several models, but the engineering squad was worried about latency and cost in production.

**Task** – I was asked to sketch a “back‑of‑the‑envelope” system design that would let us serve predictions in <50 ms while keeping cloud spend under $2k/month.

**Action** – First, I broke the pipeline into three layers: ingestion (Kafka), feature store (Redis cache + Parquet on S3), and inference (TensorFlow Lite micro‑service). Using rough math, 500k tx/day ≈ 6 tx/sec. With a 50 ms window, each request had to hit an in‑memory model; thus I chose Redis for feature lookup (<1 ms) and deployed the model on a single 2‑core e5‑2620v4 VM with TensorFlow Serving (≈30 MB). I estimated that each inference would cost ~$0.00002, yielding < $0.12/day or <$36/month. For scaling, I added an autoscaler that spun up a second instance when traffic >10 tx/sec, keeping the SLA but staying under budget.

**Result** – The prototype met the 50 ms latency target and reduced inference cost by 70% compared to our previous batch‑processing approach. It also exposed trade‑offs: tighter caching improved speed but increased memory usage; I learned how to balance compute vs. storage costs in real‑time ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
