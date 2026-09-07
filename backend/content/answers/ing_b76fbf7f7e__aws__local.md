---
qid: ing_b76fbf7f7e__aws__local
question: 'Explain: How Pub/Sub Works — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 500
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:35-05:00'
sources: []
---

**Situation (S)**  
In my last role I led the redesign of a real‑time analytics pipeline for an e‑commerce platform that had > 1M daily users. The existing monolithic queue was causing 4‑second latency spikes during flash sales, hurting conversion rates.

**Task (T)**  
I needed to replace the legacy queue with a scalable publish/subscribe system that could handle peak bursts of up to 50k events per second while guaranteeing at‑least‑once delivery and low cost.

**Action (A)**  
1. **Requirements & Architecture** – I scoped three key needs: decoupled producers, fault‑tolerant consumers, and horizontal scaling.  
2. **Design** – Adopted **Amazon SNS** as the *publisher* layer to fan‑out events to multiple topics. For each consumer we used **SQS FIFO** queues with *deduplication IDs* to ensure idempotency.  
3. **Scalability & Availability** – SNS automatically scales to millions of messages/second; SQS offers 120,000 transactions per second per queue and multi‑AZ durability.  
4. **Cost & Trade‑offs** – SNS pricing ($0.50 Mth) + SQS ($0.40 Mth) remained < $300/month vs the legacy on‑prem solution (~$2k). The trade‑off was a slight increase in latency (≈ 200 ms) which was acceptable for analytics.  
5. **Implementation** – Added CloudWatch metrics, automated retries, and dead‑letter queues; integrated with Lambda for lightweight consumers.

**Result (R)**  
- Latency dropped from 4 s to < 300 ms during peak events.  
- Throughput increased by 6×, supporting 50k events/s without throttling.  
- Conversion rate improved by **3%**, translating to ~$1.2M additional revenue annually.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered a smoother checkout experience for millions of shoppers.  
- *Ownership & Dive Deep*: Took full responsibility, dissected the bottleneck, and engineered a resilient solution with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
