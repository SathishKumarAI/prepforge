---
qid: ing_5beaea7dec__star__local
question: 'Explain: When to Use This Pattern — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 315
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:18-05:00'
sources: []
---

**Situation**  
At my last company we were building a recommendation engine for an e‑commerce platform that needed to scale from 10k to 1M concurrent users while keeping latency under 50 ms. The data pipeline was fragmented: raw logs went into Kafka, processed by Spark jobs, then stored in DynamoDB and served via a Flask API.

**Task**  
I had to design an architecture that would support real‑time personalization, easy feature experimentation, and reliable fault tolerance without rewriting the entire stack.

**Action**  
I evaluated several AI‑specific patterns: *Feature Store*, *Batch–Serving Split*, and *Model Registry*. I chose a **Feature Store + Batch–Serving Split** pattern. We built a central feature store in Redis for low‑latency lookups, while Spark jobs updated it nightly from Kafka streams. For the model registry, we used MLflow to version models and tie them to specific feature sets. This allowed us to roll back or A/B test new models without touching the API layer.

**Result**  
Latency dropped from 120 ms to 35 ms, throughput increased by 4×, and the engineering team could deploy model updates in under an hour. The key lesson: use architecture patterns when you need a clear separation of concerns that aligns with data velocity, experimentability, and operational reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
