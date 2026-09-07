---
qid: ing_14a132e657__aws__local
question: 'Explain: Notification Service — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 451
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:40-05:00'
sources: []
---

**Situation (S)** – In my last role I was tasked to replace a legacy “email‑only” alert system for our e‑commerce platform that sent ~30 k notifications per hour during peak sales. The system had 15 % downtime and customers complained about delayed alerts.

**Task (T)** – Build a **Notification Service** that supports email, SMS, push & webhook, guarantees *at‑least‑once* delivery, scales to 200 k msgs/hr, and reduces ops effort by 40 %.

**Action (A)** –  
1. Adopted an event‑driven microservice architecture: **Amazon EventBridge** routes user intent → **SNS topics** per channel.  
2. Each topic feeds into a **Kinesis Data Streams** shard pool; a **Lambda consumer** pulls records, enriches them with user preferences stored in **DynamoDB**, and pushes to the appropriate channel via **SES (email)**, **Pinpoint (push/SMS)** or **API Gateway webhook**.  
3. Implemented idempotency via a **deduplication table** in DynamoDB; retries use exponential back‑off with DLQ in SQS for failed deliveries.  
4. Added a real‑time dashboard using **CloudWatch Metrics + Grafana**, enabling ops to see latency, success rate and cost per message.

**Result (R)** – Achieved 99.9 % availability, cut delivery latency from 8 s to <1 s, and slashed operations time by 45 %. Cost dropped 30 % due to serverless scaling and pay‑per‑use.  

*Leadership Principles:* **Ownership** (took full responsibility for reliability & cost), **Dive Deep** (analyzed failure logs to design idempotent retries), **Bias for Action** (deployed in two weeks).  
Bar‑raiser looks for clear ownership, quantified impact, deep technical reasoning, and learning from the 15 % downtime incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
