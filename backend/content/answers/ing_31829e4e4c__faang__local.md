---
qid: ing_31829e4e4c__faang__local
question: 'Explain: 5.3 Reliability — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 521
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:22-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *reliable notification service* (push/email/SMS). Assume: high‑volume traffic (~10M msgs/day), real‑time delivery, at least 99.9% success, eventual consistency for failures, multi‑region support, and idempotent retries.

**2️⃣ Approach**  
1. **Ingest & Queue** – API gateway → *Kafka* topic (partitioned by user ID).  
2. **Processing Workers** – Consume from Kafka, de‑duplicate via a Redis cache keyed on message ID + expiry.  
3. **Delivery Layer** – For each channel call dedicated microservice (e.g., PushAPI, EmailSMTP).  
4. **Retry & Back‑off** – Use exponential back‑off with capped attempts; store retry state in PostgreSQL.  
5. **Dead‑Letter Queue (DLQ)** – Persist permanently after max retries for manual investigation.  
6. **Monitoring & Alerting** – Prometheus + Grafana dashboards, SLOs on latency and success rate.

**3️⃣ Depth**  
- *Throughput*: Kafka scales horizontally; workers can be auto‑scaled by message lag.  
- *Reliability*: At least one copy of each event in Kafka ensures durability; Redis cache prevents duplicate sends.  
- *Latency*: Push notifications are <200 ms, emails ~2–3 s, SMS ~5 s; we expose per‑channel SLA.  
- *Complexity*: O(1) lookup for dedupe, O(log n) DB writes for retries.  
- *Trade‑offs*: Using Kafka over SQS gives higher throughput but requires more operational overhead.

**4️⃣ Edge Cases**  
- Duplicate API calls → idempotency key.  
- Channel provider outage → fallback to another channel or enqueue to DLQ.  
- User opt‑out → flag in DB; workers skip.  
- Time‑zone & scheduling → store scheduled timestamp, worker polls accordingly.

**5️⃣ Optimize & Communicate**  
Future improvements:  
- *Eventual consistency* via CQRS pattern for status updates.  
- *Serverless functions* for lightweight channel handlers to reduce cost.  
- *Feature flags* to roll out new channels gradually.  

Explain decisions clearly, tie each component back to the reliability SLOs, and show how metrics guide scaling—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
