---
qid: ing_f2c2d84609__aws__local
question: 'Explain: Obviously, that''s you know a bit of — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 499
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:25-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to design a *real‑time recommendation engine* for a video platform that needed to serve millions of users with sub‑second latency while staying within a tight budget. The goal: increase watch time by 12 % and reduce cold‑start latency from 1 s to <200 ms.

**Action & Technical Design**  
I broke the problem into three layers:

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Data ingestion** | Kinesis Data Streams → Lambda → S3 (raw logs) | Captures clickstream in micro‑seconds, scales to 10 k events/s. |
| **Feature store** | DynamoDB + DAX cache | Low‑latency reads for user & video metadata; DAX reduces RCU cost by 60 %. |
| **Model training** | SageMaker Pipelines on Spot instances | Automates feature engineering, hyper‑parameter tuning, and model evaluation. |
| **Serving** | SageMaker Neo + Lambda@Edge (CloudFront) | Compiles the model to edge runtimes; latency <200 ms with 99.9 % availability. |

I added a *feedback loop* that pushes inference results back into Kinesis for continuous retraining every 12 h, ensuring the system adapts to changing trends.

**Result**  
- Watch time grew by **15 %**, exceeding the target.  
- Cold‑start latency dropped from **1 s → 180 ms** (95 % percentile).  
- Cost decreased by **30 %** due to Spot usage and DAX caching.

**Leadership Principles Highlighted**  
*Customer Obsession*: We measured success with user watch time, the ultimate metric of satisfaction.  
*Ownership & Dive Deep*: I owned the end‑to‑end pipeline, from ingestion to edge serving, continuously profiling bottlenecks and iterating on the design.  

**Bar‑raiser Takeaway**  
The interviewers look for: a clear problem statement, data‑driven impact, thoughtful trade‑offs (cost vs latency), and evidence of learning—here, moving from a batch model to an online, edge‑centric architecture after observing real user metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
