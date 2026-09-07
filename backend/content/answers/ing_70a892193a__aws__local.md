---
qid: ing_70a892193a__aws__local
question: 'Explain: Intervals (5 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 412
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:18-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a feature that delivered real‑time confidence intervals for ML predictions (e.g., credit risk scores). The product was used by underwriting teams who needed *five* disjoint interval estimates to gauge uncertainty under different market regimes.

**Action – Technical Design**  
1. **Data ingestion**: Kinesis Data Streams fed raw prediction logs into an EMR cluster.  
2. **Feature extraction & model scoring**: Spark jobs computed bootstrap resamples and produced 5‑percentile, 25‑, 50‑, 75‑, 95‑percentile intervals per record.  
3. **Storage & serving**: Results landed in DynamoDB (partitioned by `model_version`) and were cached in ElastiCache Redis for < 10 ms latency to the underwriting UI.  
4. **Scalability / Availability**: EMR auto‑scales on spot instances; DynamoDB provides 99.999% SLA with global tables for multi‑region failover.  
5. **Cost & Trade‑offs**: Spot pricing saved ~40 % vs. on‑demand, at the cost of brief job interruptions mitigated by checkpointing in S3.

**Result**  
Processed 10M predictions per day; latency dropped from 1 s to < 50 ms, boosting underwriting throughput by **30 %** and reducing false positives by **12 %** (validated via A/B test).  

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end pipeline, dove deep into Spark’s memory management to avoid OOMs, quantified impact with clear metrics, and iterated after an initial spike in latency by shifting to Redis. This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
