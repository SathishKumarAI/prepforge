---
qid: ing_d64e1d6339__aws__local
question: 'Explain: At the same time, we want to — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 431
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:48-05:00'
sources: []
---

**Situation & Task**  
I was tasked with redesigning an internal messaging platform (inspired by Google Wave) to support real‑time collaboration for 50k concurrent users while keeping latency under 200 ms. The goal: deliver a highly available, cost‑effective service that could scale to millions of users.

**Action – Architecture & AWS Services**  
* **Event‑driven core:** Used **Amazon SQS** + **AWS Lambda** (Node.js) for state changes, ensuring at‑least‑once delivery without over‑provisioning.  
* **Real‑time sync:** Deployed a **WebSocket API Gateway** backed by **Amazon ElastiCache Redis** (cluster mode) to broadcast delta updates; Redis’ pub/sub gives sub‑millisecond latency.  
* **Conflict resolution & CRDTs:** Implemented a simple CRDT in Lambda, persisting the immutable operation log in **Amazon DynamoDB** (partition key = documentId).  
* **Scalability/Availability:** Auto‑scaling Lambda + API Gateway handles traffic spikes; Redis cluster spans 3 AZs for HA. Global replication via **DynamoDB global tables** keeps data fresh across regions.  
* **Cost control:** Spot instances for cache nodes, on‑demand for Lambda, and DynamoDB provisioned throughput tuned to 2 k RCU/WCU per document.

**Result**  
Within 4 months we achieved:  
* 99.999% uptime (single‑point failure < 1 min).  
* Latency ≤ 180 ms for 95th percentile of edits.  
* Operational cost reduced by **30%** vs. the legacy monolith.  

**Learning & Ownership**  
I took ownership of the entire stack, iterated on conflict resolution after a 12‑hour outage, and documented trade‑offs in an internal wiki—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
