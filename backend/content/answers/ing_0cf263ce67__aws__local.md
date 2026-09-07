---
qid: ing_0cf263ce67__aws__local
question: 'Explain: Dropbox - High Level Design — Doccollaborationdropboxgoogledocs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 546
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:53-05:00'
sources: []
---

**Situation (S)**  
At a previous role I was asked to sketch a high‑level architecture for a real‑time document collaboration platform similar to Dropbox/Google Docs, where thousands of users edit the same file concurrently.

**Task (T)**  
Design a system that guarantees *low latency* edits, *strong consistency* for final state, and *high availability* across global regions while keeping operational cost reasonable.

**Action (A)**  

| Component | AWS Service(s) | Rationale |
|-----------|----------------|-----------|
| **Client sync** | Amazon S3 + Transfer Acceleration | Durable storage; fast edge delivery. |
| **Edit stream** | Amazon Kinesis Data Streams | Low‑latency, partitioned event flow for each document. |
| **Operational state** | DynamoDB (Global Tables) | Multi‑region active‑active with eventual consistency and fine‑grained TTLs for edit metadata. |
| **Conflict resolution** | Lambda + CRDT library | Serverless compute scales to millions of edits; Conflict‑Free Replicated Data Types keep merges deterministic. |
| **Realtime UI** | Amazon API Gateway + WebSocket, Amplify | Push updates to browsers with minimal overhead. |
| **Batch persistence** | AWS Glue / Athena on S3 | Periodic export for audit and analytics. |

- **Scalability:** Kinesis shards auto‑scale; DynamoDB handles 10⁶ RCU/WCU per table.  
- **Availability:** Global Tables keep data in sync with <200 ms latency; S3 provides 99.999% durability.  
- **Cost:** Serverless Lambda + pay‑per‑use reduces idle capacity; Kinesis shards are billed only when active.

**Result (R)**  
Prototype achieved <30 ms round‑trip for edit propagation to 95th percentile users in two continents, while ingesting ~1 M edits/day with a total cost of $4k/month—10× cheaper than an on‑prem cluster.

---

### Leadership Principles Highlighted
- **Ownership** – I selected services that balance performance and cost, taking responsibility for long‑term operational health.  
- **Dive Deep** – Detailed trade‑offs between DynamoDB consistency models, Kinesis shard sizing, and Lambda concurrency were considered to meet SLA targets.  

Bar‑raiser cues: clear metrics (latency %, throughput), explicit design decisions, and a willingness to iterate on failure scenarios such as eventual consistency conflicts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
