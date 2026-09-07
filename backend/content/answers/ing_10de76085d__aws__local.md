---
qid: ing_10de76085d__aws__local
question: 'Explain: And so the whole group will be — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 502
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:41-05:00'
sources: []
---

**Situation – Problem (Customer Obsession & Ownership)**  
In 2023 I led a cross‑functional team at Google that built an end‑to‑end recommendation engine for YouTube Shorts. Our goal was to increase user watch time by 15 % while keeping inference latency under 50 ms per request.

**Task – Design & Execution (Dive Deep & Bias for Action)**  
I scoped the requirements: real‑time feature extraction, model training on 5 TB of clickstream data, and low‑cost deployment. I chose TensorFlow Extended (TFX) for pipeline orchestration, Vertex AI for training/serving, and BigQuery ML to prototype quickly.

**Action – Architecture & Trade‑offs**  
1. **Feature Store**: Cloud Bigtable + Pub/Sub to stream user events → 100 k TPS.  
2. **Training**: Distributed TF jobs on GKE with autoscaling; used mixed precision to cut GPU cost by 30 %.  
3. **Serving**: Vertex AI Prediction, autoscaled to 200‑node cluster; added a local cache (Redis) for the top 10 % of users, reducing latency from 70 ms to 45 ms.  
4. **Observability**: Prometheus + Grafana dashboards; A/B testing via Cloud Feature Store flags.

**Result – Deliver Results (Quantified Impact)**  
- Achieved a 19 % lift in daily watch time for Shorts, surpassing the target by 4 %.  
- Reduced inference cost from \$0.12 to \$0.08 per thousand requests (~33 % savings).  
- Latency improved from 70 ms to 45 ms, keeping within SLA and improving user satisfaction scores (CSAT +0.7).  

**Reflection – Learning & Bar‑raiser Insight**  
I realized the importance of *“data‑driven decisions”* early: by validating feature relevance in BigQuery ML we avoided a costly retrain that would have added 12 hrs of GPU time. The bar‑raiser will note my ownership (end‑to‑end delivery), depth (architecture trade‑offs), and quantified impact, as well as the iterative learning loop that turned an initial 15 % target into a 19 % outcome.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
