---
qid: ing_7da204695b__aws__local
question: 'Explain: Synchronous vs Asynchronous Replication — Availability | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 533
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:28-05:00'
sources: []
---

**Situation & Task**  
I was leading the design of a global e‑commerce catalog service that had to support real‑time price updates across 20 regions while guaranteeing *no single point of failure*. The core requirement: *high availability* without sacrificing consistency for critical read traffic.

**Action (Design)**  
1. **Synchronous Replication** – For the primary “price engine” node, I used **AWS Aurora Serverless v2** with cross‑region read replicas. Writes go to the writer instance; changes are *committed* to each replica within ~50 ms via Aurora’s global cluster replication. This guarantees that any region can serve a fresh price immediately after an update, satisfying *Customer Obsession* for instant accuracy.

2. **Asynchronous Replication** – For heavy catalog metadata (e.g., product descriptions), I leveraged **Amazon DynamoDB Global Tables** with eventual consistency. Updates are propagated in the background using DynamoDB Streams + Lambda, decoupling write latency from read performance. This reduces *write amplification* and keeps cost down.

3. **Failover & Availability** – I configured Aurora’s *Multi‑AZ* for primary failover and set up a **Route 53 health check** to redirect traffic within 30 seconds if the writer goes offline. DynamoDB’s multi‑region replication guarantees data remains accessible even during an AZ outage.

4. **Cost/Trade‑offs** – Synchronous replication adds ~15 % latency but ensures consistency for price changes (~$0.02 per request). Asynchronous replication keeps read costs near $0.00013 per 1,000 reads and tolerates a few seconds of staleness—acceptable for non‑critical metadata.

**Result (Metrics)**  
- *Availability* improved from **99.9 % to 99.999 %** during peak traffic.  
- Price update latency dropped from 200 ms to <50 ms, reducing cart abandonment by **12 %**.  
- Operational cost for the catalog service decreased by **18 %** due to efficient use of DynamoDB Global Tables.

**Reflection (Bar‑raiser Focus)**  
I *owned* the end‑to‑end resilience strategy, *dived deep* into Aurora’s global replication limits, and quantified impact through SLA improvements. After a brief outage where asynchronous updates lagged by 5 s, I added a lightweight **SQS buffer** to throttle writes during spikes—learning that “Fail fast, fail safe” is key in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
