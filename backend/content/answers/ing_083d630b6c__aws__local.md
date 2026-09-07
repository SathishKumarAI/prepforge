---
qid: ing_083d630b6c__aws__local
question: 'Explain: Storage Types — Storagetypes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 511
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:33-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a data‑science platform that had to ingest, store, and serve millions of sensor events for real‑time ML inference. The challenge was choosing the right storage tier so we could keep costs low while meeting strict latency (≤ 200 ms) and durability requirements.

**Action – Design & AWS Services**  
I mapped the data lifecycle into three tiers:

| Tier | Use case | AWS service | Rationale |
|------|----------|-------------|-----------|
| **Hot** | 24‑hour window of active events for inference | **Amazon DynamoDB (On‑Demand)** | Key‑value access, sub‑millisecond reads, auto‑scaling, no operational overhead. |
| **Warm** | 1–7 day archival used for feature engineering | **Amazon S3 Standard‑IA** | Low read latency, 1‑yr durability, cost per GB lower than hot tier, still fast enough for batch jobs. |
| **Cold** | > 30‑day historical data for model retraining | **S3 Glacier Deep Archive** | 99.999999999% durability, $0.004/GB/month, retrieval in hours – acceptable for nightly training cycles. |

I added an **AWS Glue catalog** to unify metadata across tiers and a **Lake Formation policy** to enforce least‑privilege access. For real‑time analytics I enabled **DynamoDB Streams → Lambda → SageMaker Neo** to pre‑warm models on demand.

**Result**  
- Reduced storage cost by 38 % compared to a single DynamoDB design.  
- Maintained inference latency under 150 ms for 99.9 % of requests.  
- Cut model retraining time from 12 h to 4 h by parallelizing data extraction across S3 tiers.

**Learning & Bar‑raiser signals**  
I owned the end‑to‑end architecture, diving deep into DynamoDB capacity units and S3 retrieval costs. The trade‑off analysis (latency vs. cost) was documented in a run‑book that is now part of our ops playbook. When a Lambda timeout occurred early in production, I traced it to insufficient provisioned concurrency and adjusted the auto‑scaling policy—demonstrating bias for action and ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
