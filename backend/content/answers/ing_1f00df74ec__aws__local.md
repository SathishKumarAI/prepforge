---
qid: ing_1f00df74ec__aws__local
question: 'Explain: we need to be able to rewrite — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 402
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:25-05:00'
sources: []
---

**Situation & Task (S)**  
When the Seattle conference was live‑streamed on our internal YouTube‑style platform, we hit a 2 GB per‑minute peak that caused buffer stalls and dropped views. The business metric—**average watch time**—fell from 85 % to 60 % during the event, costing us $12K in lost sponsorship revenue.

**Action (A)**  
I owned the end‑to‑end rewrite:  
1. **Audit & Design** – performed a *Dive Deep* on media ingestion pipelines and identified a single monolithic transcoder that throttled throughput.  
2. **Service Decomposition** – split it into stateless microservices on ECS Fargate, each handling a codec conversion, backed by S3 for intermediate storage.  
3. **Auto‑Scaling & Queueing** – wired the services to an EventBridge event bus and an SQS queue that scales with incoming GOPs; added *Lambda* functions for real‑time metadata tagging.  
4. **Cost Optimization** – leveraged Spot Instances for transcoding, saving 35 % vs on‑demand.  
5. **Monitoring & Feedback Loop** – set up CloudWatch dashboards and an SNS alert chain to catch any latency spike within seconds.

**Result (R)**  
During the next live event we saw:  
- *Average watch time* rise back to 88 %.  
- Peak ingestion throughput increase from 2 GB/min to **8 GB/min** without packet loss.  
- Cost per GB dropped by **$0.03**, saving ~$5K monthly.

**Reflection (Leadership Principles)**  
I demonstrated **Ownership** by taking full responsibility, **Dive Deep** through detailed profiling, and **Bias for Action** with a rapid redesign that delivered measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
