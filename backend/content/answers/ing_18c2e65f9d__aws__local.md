---
qid: ing_18c2e65f9d__aws__local
question: 'Explain: ByteDance Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 701
total_tokens: 932
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:56-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was asked to design a “ByteDance‑style” recommendation engine for a short‑video platform that had 200 M active users and needed to surface new content in real time. The product team insisted on “custom problems” – we couldn’t just use a generic ranking model; every user’s context (device, network, session length) had to be considered.

**Task (T)**  
Build an end‑to‑end ML pipeline that ingests 10 TB of clickstream data per day, trains daily models with <30 s inference latency, and scales to 200 M concurrent requests while keeping cost below $2 M/month.

**Action (A)**  

| AWS Service | Role |
|-------------|------|
| **Amazon Kinesis Data Streams** | Real‑time ingestion of user events. |
| **AWS Glue / Lake Formation** | ETL into a columnar data lake on S3, partitioned by day/hour. |
| **Amazon SageMaker Pipelines** | Automated nightly training (feature store + model). Uses **SageMaker Neo** for edge‑optimized inference. |
| **Amazon Personalize** | Baseline recommendation; we wrapped it in a custom Lambda that injects contextual features. |
| **AWS AppConfig** | Feature flags to roll out new “custom problem” logic gradually. |
| **Amazon CloudFront + Lambda@Edge** | Deliver model predictions with <10 ms latency globally. |

*Scalability:* Kinesis shards auto‑scaling; SageMaker training uses Spot Instances (cost 60% lower).  
*Availability:* Multi‑AZ deployment, failover via Route 53 health checks.  
*Cost:* Daily training on 8 p-nodes ($0.15/hr each) → ~$1.4 k/day ≈ $40 k/month; inference cost < $1 M due to CDN caching.

**Result (R)**  

- Click‑through rate increased from **3.2% → 5.7%** (+78%) in the first month after rollout.  
- Latency dropped to **<12 ms** average, meeting SLA.  
- Cost stayed within budget; we saved $300k/year by using Spot Instances and caching.

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Focused on real‑time relevance → higher CTR & user retention. |
| **Ownership** | Took full responsibility for data pipeline, model lifecycle, and cost control. |
| **Dive Deep** | Analyzed shard utilization, GPU memory usage, and latency traces to pinpoint bottlenecks. |
| **Bias for Action** | Deployed a proof‑of‑concept within 2 weeks; iterated rapidly with Lambda@Edge rollouts. |

### What a Bar‑Raiser Listens For

- **Quantified impact:** I present concrete metrics (CTR lift, latency, cost).  
- **Depth & ownership:** Detailed design choices and trade‑offs show deep technical understanding.  
- **Learning from failure:** After an initial 30 % inference error due to feature drift, we added a feedback loop; now the model auto‑re‑trains when error >5%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
