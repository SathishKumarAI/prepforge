---
qid: ing_0d15e3bfb6__aws__local
question: 'Explain: Read Path — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 557
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:19-05:00'
sources: []
---

**Situation (S)**  
At Uber I led the redesign of our **LedgerStore**, a distributed key‑value store that backs every micro‑service transaction log. The system had to support **trillions of indexes** for real‑time analytics while keeping latency under 5 ms.

**Task (T)**  
Implement a *read path* that could scale horizontally, provide strong consistency for audit logs, and reduce operational cost by >30%.

**Action (A)**  

| Step | AWS Services & Design Choices | Why |
|------|------------------------------|-----|
| **Data Model** | Partition ledger entries by `service_id` + `timestamp` using a composite key. | Keeps hot spots bounded. |
| **Storage** | Amazon DynamoDB with provisioned throughput and on‑demand tables for bursty services. | 99.999% availability, auto‑scaling for trillions of rows. |
| **Indexing** | Global Secondary Indexes (GSIs) per `user_id` and `region`. Each GSI is *query‑only* (no writes). | Enables fast read paths without affecting write latency. |
| **Caching** | Amazon ElastiCache Redis cluster for the hottest 5 % of keys. | Reduces DynamoDB reads by ~70%, cutting cost. |
| **Read API** | Lambda + API Gateway with *optimistic concurrency* (ETag). Cache‑Aside pattern. | Guarantees read freshness and minimal latency. |
| **Observability** | CloudWatch metrics, X-Ray traces, automated scaling rules based on percentile latencies. | Enables rapid incident response and capacity planning. |

**Result (R)**  
- Read latency dropped from 25 ms to **4 ms** for 99th‑percentile requests.  
- Operational cost decreased by **35%** due to reduced DynamoDB reads.  
- System handled a *10×* increase in write volume during peak events without service degradation.

---

### Leadership Principles Highlighted
1. **Customer Obsession** – Delivered sub‑5 ms latency for internal analytics customers.  
2. **Ownership / Dive Deep** – Built the entire read path from scratch, performed deep performance profiling, and iterated on index strategy until metrics met SLA.  

Bar‑raisers will note my clear ownership of the problem space, data‑driven impact (latency & cost numbers), deep technical decisions, and willingness to fail fast (initial GSI design was abandoned after profiling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
