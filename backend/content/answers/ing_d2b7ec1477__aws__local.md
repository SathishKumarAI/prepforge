---
qid: ing_d2b7ec1477__aws__local
question: 'Explain: Summary — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 473
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:08-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation & Task** – While building a SaaS product that exposes real‑time alerts, I was asked to replace our legacy “push” API with **webhooks** so partners could consume events instantly. The goal: 99.9 % delivery latency < 200 ms and ≥ 95 % success rate under peak load (≈ 10k concurrent subscriptions).  

**Action** –  
1. **Design**:  
   * Store subscription metadata in **DynamoDB** (partitioned by `clientId`).  
   * Use **Amazon SNS** topics per event type; each subscription is an SNS endpoint (`https://<host>/webhook/<id>`).  
   * A lightweight Lambda (Python) pulls events from a **SQS FIFO queue**, retries with exponential back‑off, and records delivery status in DynamoDB.  
2. **Reliability**: Enable **SNS dead‑letter queues**; if > 5 consecutive failures, flag the subscription for manual review.  
3. **Scalability & Cost**: SNS + Lambda are serverless; costs ≈$0.20 per million deliveries vs $12k/month on our old VM stack.  
4. **Observability**: CloudWatch metrics (`WebhookSuccessRate`, `DeliveryLatency`) trigger alarms, and a Grafana dashboard visualizes real‑time health.  

**Result** – Within 3 weeks we hit 99.7 % success, latency < 180 ms under peak load, and cut infrastructure costs by **82 %**.  
**Learnings** – Early integration of dead‑letter handling prevented silent failures; monitoring was critical to maintain SLAs.  

> **Leadership Principles:** *Customer Obsession* (delivering instant, reliable notifications), *Ownership* (architecting a fully serverless solution), *Dive Deep* (analyzing failure patterns), and *Bias for Action* (rapid iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
