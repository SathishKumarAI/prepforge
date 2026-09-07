---
qid: ing_f31095f225__aws__local
question: 'Explain: We could have, you know, researched all — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 437
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:18-05:00'
sources: []
---

**Situation:**  
At the 2023 Seattle Conference on Scalability, my team was tasked with designing a machine‑learning pipeline to power YouTube’s recommendation engine at scale—serving millions of users per second while keeping latency under 100 ms.

**Task:**  
I needed to research and prototype a distributed inference architecture that could ingest live video metadata, run a deep neural net in real time, and feed predictions back into the CDN.

**Action:**  
* **Customer Obsession & Ownership:** I mapped user pain points (cold‑start latency, stale recommendations) and set a target 30 % reduction in response time.  
* **Dive Deep & Bias for Action:** I benchmarked several frameworks—TensorFlow Serving, TorchServe, and AWS SageMaker Edge Manager—running microbenchmarks on EC2 G4dn instances.  
* **Design:** Adopted *model sharding* across **Amazon Elastic Inference** attached to **EC2 Spot Instances** (cost‑saving 40 %) with a global **AWS Global Accelerator** fronting an **Elastic Load Balancer**. Predictions were cached in **Amazon ElastiCache for Redis** (TTL 5 s) to hit 99.9 % availability.  
* **Scalability & Cost:** Autoscaling groups triggered by CloudWatch metrics ensured 95 % CPU utilization, keeping cost per inference < $0.0003 while handling a 10× traffic spike during prime‑time.  

**Result:**  
Post‑deployment, end‑to‑end latency dropped from 140 ms to 85 ms (30 % improvement). The new pipeline supported a 12 × increase in concurrent streams with < $200/day operational cost—directly translating to higher watch time and ad revenue.

*Bar‑raiser signals:* clear ownership, deep quantitative analysis, pragmatic trade‑offs, and learning loop from live A/B tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
