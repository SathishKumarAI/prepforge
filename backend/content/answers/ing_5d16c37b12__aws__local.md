---
qid: ing_5d16c37b12__aws__local
question: 'Explain: Create real-time value by processing data in motion rather than
  data at rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:13-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to replace a nightly batch‑processing pipeline that delivered recommendation scores for 3 M users (≈200 GB/day) with a real‑time system so the catalog could surface fresh content within seconds of a user action.

**Action – Technical Design**  
I built an event‑driven architecture:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingest clickstream | **Kinesis Data Streams** (shard 4) | Low latency, auto‑scaling. |
| Stream processing | **Lambda** + **SageMaker Edge** | Stateless compute; each event triggers a lightweight inference container. |
| Feature store & model registry | **AWS SageMaker Feature Store** + **Model Registry** | Centralized, versioned features and models. |
| Real‑time cache | **ElastiCache Redis** (cluster mode) | Sub‑100 ms read/write for personalized scores. |

We added a fallback **S3‑based batch job** to keep the model fresh when traffic spikes. The design guarantees 99.9% availability, scales horizontally by adding shards or Lambda concurrency, and costs ≈$0.15/1M events (≈$5k/month vs $12k for the old batch job).

**Result**  
Latency dropped from 2 min to <200 ms per user action, boosting click‑through rate by **18%** (from 4.8% to 5.7%) and increasing revenue by **$1.3M/year**.

**Reflection – Bar‑raiser cues**  
I owned the end‑to‑end pipeline, dove deep into event schema and model latency, quantified impact with A/B testing, and learned that over‑provisioning shards hurts cost—so we tuned to 4 shards and auto‑scaling. This aligns with *Customer Obsession* (faster recommendations) and *Ownership* (full lifecycle responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
