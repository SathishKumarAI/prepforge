---
qid: ing_d24a1fbefa__aws__local
question: 'Explain: Netflix System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 536
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:11-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a team that built the recommendation engine for a streaming platform similar to Netflix. The goal was to reduce cold‑start latency by 70 % and increase user engagement by 12 % in one quarter.

**Task (T)**  
Design an end‑to‑end ML pipeline that ingests millions of viewing events, trains models on demand, and serves predictions with <5 ms latency at scale.

**Action (A)**  

1. **Data ingestion & storage** – Use **Amazon Kinesis Data Streams** for real‑time event capture; batch snapshots go to **S3 Glacier Deep Archive** for long‑term compliance.  
2. **Feature store** – Deploy **AWS SageMaker Feature Store** so feature engineering happens once and is served via a low‑latency cache (ElastiCache Redis).  
3. **Model training** – Leverage **SageMaker Processing** with spot instances to train matrix‑factorization models nightly; automatically trigger new jobs via EventBridge when user churn exceeds 5 %.  
4. **Serving** – Deploy models as endpoints in **Amazon SageMaker RealTimeInference**, auto‑scaling to 1,000 concurrent requests per region; use **Lambda@Edge** for edge caching of top‑10 items.  
5. **Monitoring & rollback** – Integrate **CloudWatch Metrics** and **SageMaker Model Monitor**; roll back to the last stable version if A/B test accuracy drops below 2 %.

**Result (R)**  
Latency dropped from 350 ms to 4 ms, driving a 12 % lift in watch time. Cost per recommendation fell by 35 % thanks to spot‑training and cache reuse.  

**Leadership Principles**  
- **Ownership** – Took end‑to‑end responsibility for data quality, model accuracy, and cost control.  
- **Dive Deep** – Analyzed latency graphs to pinpoint the 5 ms bottleneck; iterated on caching layers until metrics met targets.  

**Bar‑raiser notes**  
Interviewers will look for concrete ownership, evidence of deep technical trade‑offs (e.g., spot vs. on‑demand), and quantified business impact. Also expect discussion of a failure point—our first model drift caused a 3 % dip in recommendations; we learned to add continuous validation pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
