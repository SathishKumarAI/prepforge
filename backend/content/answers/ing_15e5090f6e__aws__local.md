---
qid: ing_15e5090f6e__aws__local
question: 'Explain: Our Team — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 410
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:49-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team at **AWS Analytics**, we were tasked with building a *real‑time fraud detection pipeline* for a high‑volume payment gateway (≈ 3 M transactions/day). The goal was to reduce false positives by 30% while keeping latency < 200 ms.

**Action – Design & Execution**  
1. **Ownership & Dive Deep** – I mapped the data flow, identified bottlenecks in the current Spark batch jobs, and scoped a shift‑to‑streaming architecture.  
2. **AWS Services** – *Kinesis Data Streams* for ingestion, *Lambda* + *SageMaker Edge* for inference, and *DynamoDB* (global tables) for feature storage.  
3. **Scalability & Availability** – Leveraged Kinesis Auto Scaling (shards up to 200) and Lambda Provisioned Concurrency (1 k concurrent invocations) to guarantee sub‑200 ms latency with 99.999% availability.  
4. **Cost Trade‑off** – Replaced on‑prem Spark workers (≈$15k/month) with spot‑infused Lambda, cutting compute cost by 70%.  
5. **Bias for Action & Deliver Results** – Deployed a canary rollout; in the first week we observed a **32% drop in false positives** and a **12% lift in true positive rate**, translating to $2M/month saved in chargeback fees.

**Result**  
Within three months, the new pipeline processed 3.5 M TPS with < 180 ms latency, achieved 99.999% uptime, and reduced operational cost by 70%. I documented best practices for feature store versioning (Invent & Simplify) and conducted a post‑mortem on an early scaling failure, turning it into a live training session—demonstrating continuous learning and ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
