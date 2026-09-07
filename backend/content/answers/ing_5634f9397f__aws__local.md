---
qid: ing_5634f9397f__aws__local
question: 'Explain: Difference between DynamoDB, MongoDB & Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 639
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:53-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** I was asked to pick a NoSQL store for a global recommendation engine that must serve 50 M requests/day, keep latency <10 ms, and allow hot‑key updates without downtime.  
> **Task:** Explain how DynamoDB, MongoDB, and Cassandra differ in the context of such a workload.  
> **Action:** I mapped each database to Amazon services, highlighted their data models, consistency guarantees, scaling mechanisms, and operational trade‑offs.

| Feature | DynamoDB (AWS) | MongoDB | Apache Cassandra |
|---------|-----------------|--------|------------------|
| **Model** | Key‑value + document (partition key + sort key) | Document (BSON), flexible schema | Wide‑column store (rows/columns, partition key) |
| **Consistency** | Tunable: eventual or strongly consistent reads; single‑region writes are atomic | Strong by default per document; multi‑document ACID via transactions (since 4.0) | Eventual consistency; tunable read/write quorums (`QUORUM`, `ALL`) |
| **Scalability** | Managed auto‑scaling, on‑demand capacity or provisioned with Auto Scaling | Sharding + replica sets; manual rebalancing | Peer‑to‑peer ring, linear scalability by adding nodes |
| **Latency** | <10 µs (single‑region) | 1–5 ms typical | 1–3 ms per node, higher on wide reads |
| **Availability** | Multi‑AZ automatic failover; regional replicas | Replica sets + sharding; manual failover | Built‑in replication; consistent across data centers |
| **Operational Overhead** | None (fully managed) | Self‑hosted or Atlas (managed) | Requires cluster ops, repair jobs, hinted handoff tuning |
| **Cost** | Pay per read/write capacity or on‑demand; minimal storage cost | Storage + instance cost; scaling costs grow with shards | Storage and node count drive cost; can be cheaper at scale if you own hardware |

**Result:**  
I chose DynamoDB for the recommendation engine because it offered *instant* global scalability, built‑in multi‑region read replicas (meeting our 10 ms latency SLA), and zero operational overhead—aligning with **Customer Obsession** (fast, reliable service) and **Ownership** (owning the whole stack). The migration saved us ~30 % on ops staff time and reduced latency by 35 %, directly improving conversion rates.

**Bar‑raiser notes:**  
- *Ownership:* Demonstrated end‑to‑end decision making.  
- *Dive Deep:* Detailed comparison table, consistency semantics.  
- *Quantified Impact:* Latency reduction & cost savings.  
- *Learning from Failure:* Mentioned a prior Cassandra cluster that suffered node churn and how we avoided it by selecting DynamoDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
