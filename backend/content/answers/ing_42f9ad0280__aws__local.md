---
qid: ing_42f9ad0280__aws__local
question: 'Explain: Cons — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:27-05:00'
sources: []
---

**Situation (S)** – While leading a sprint for a new marketing platform, I was asked to design a **URL shortener** that would be used by millions of users worldwide. The client wanted *high availability*, *low latency* and *minimal cost*.  

**Task (T)** – Build a system that could handle 10 M requests/sec with <50 ms response time, while keeping the infrastructure budget under $5K/month.

**Action (A)** –  
1. **Dive Deep & Ownership**: I broke down the traffic into hot vs cold URLs and chose *Amazon DynamoDB* for hot keys (provisioned 40 WCU/RCU) and *S3 + CloudFront* for cold ones, ensuring at least 99.999% availability.  
2. **Bias for Action & Invent**: Implemented a hash‑based collision resolver using *AWS Lambda* + *Step Functions*, eliminating the need for a monolithic service.  
3. **Cost/Scale Trade‑off**: Leveraged DynamoDB’s on‑demand mode for burst traffic, keeping average spend ~ $2K/month; used CloudWatch alarms to auto‑scale Lambda concurrency.

**Result (R)** – Deployed within 48 hrs, the system handled 12 M req/sec with 99.998% uptime and a latency of 32 ms avg. Monthly cost stayed at $3.8K, 24% below target. The solution also reduced operational overhead by 40% compared to our legacy Java‑based service.

**Bar‑raiser checkpoints** – I owned the end‑to‑end design, dove into AWS pricing models for deep cost insight, quantified performance gains, and learned that choosing a hybrid storage strategy is critical for bursty workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
