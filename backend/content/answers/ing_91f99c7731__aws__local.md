---
qid: ing_91f99c7731__aws__local
question: 'Explain: Feature Engineering for Speed — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 423
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:15-05:00'
sources: []
---

**Situation & Task**  
At my previous fintech firm we had a real‑time fraud detection pipeline that lagged behind the volume spike during holiday seasons (≈ 3 M events/day). The model accuracy was 93 % but latency hit 120 ms, causing SLA breaches. I owned the feature‑engineering overhaul to meet *Customer Obsession* and *Deliver Results*.

**Action**  
1. **Dive Deep** into raw logs: identified 12 high‑cardinality categorical fields that were one‑hot encoded, inflating vectors to 15 k dimensions.  
2. Built a **feature hashing** module (Hashing Trick) in Apache Flink, reducing dimensionality to 2 k while preserving variance (≈ 92 % of explained variance).  
3. Deployed the stream processor on **Amazon Kinesis Data Analytics** with a stateful `HASHED_FEATURES` UDF; this cut CPU usage by 70 %.  
4. Implemented an **auto‑scaling Lambda layer** that cached frequent hash buckets in *Elasticache Redis*, lowering lookup latency from 8 ms to < 1 ms.  
5. Added a nightly **model retraining job** on Amazon SageMaker, automatically ingesting the hashed features and updating the model with a 0.3 % accuracy boost.

**Result**  
- Latency dropped from 120 ms → **< 20 ms** (95‑th percentile).  
- Throughput increased to **4 M events/day** without extra EC2 capacity.  
- Cost savings: 65 % on compute and 40 % on data transfer.  

**Learning**  
I learned that *bias for action*—testing a small hashing prototype before full rollout—saved weeks of engineering time and avoided costly “big‑bang” refactors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
