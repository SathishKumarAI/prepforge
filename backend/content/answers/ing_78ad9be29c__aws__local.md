---
qid: ing_78ad9be29c__aws__local
question: 'Explain: Dynamic Programming (11/11) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 444
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:10-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a data‑science sprint to replace a legacy rule‑based fraud detector that processed ~200 k transactions per day. The goal was to build a dynamic‑programming (DP) model that could adapt in real time and reduce false positives by 30 % while keeping latency under 50 ms.

**Action**  
I owned the end‑to‑end pipeline:  
1. **Data ingestion** – used Kinesis Data Streams for low‑latency event capture.  
2. **Feature engineering** – wrote a Lambda function that applied DP on sliding windows (O(n) time, O(1) space) to compute cumulative risk scores per account.  
3. **Model training & inference** – deployed the algorithm in SageMaker batch transform jobs; for real‑time scoring I wrapped it in an API Gateway + Lambda layer and cached intermediate DP states in ElastiCache Redis (10 ms read).  
4. **Observability** – instrumented CloudWatch metrics and set up a Grafana dashboard to track false‑positive rates.

**Result**  
Within 6 weeks the system was live:  
- False positives dropped from 15 % → 9.8 % (≈30 % improvement).  
- Latency remained <45 ms, satisfying SLA.  
- Cost savings of $12K/month by eliminating expensive rule‑engine instances.

**Reflection**  
I practiced **Ownership** by driving the solution through all AWS services, and **Dive Deep** by profiling DP memory usage to keep it under 512 B per transaction. The bar‑raiser will note my quantified impact, end‑to‑end ownership, and learning from an earlier attempt that used a naïve O(n²) DP which caused 200 ms spikes.

> *Leadership Principles*: **Customer Obsession** (reducing false positives), **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
