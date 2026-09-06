---
qid: ing_8466b17c14__fp__local
question: 'Explain: The NGM application sits inside a VPC — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 546
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:47-05:00'
sources: []
---

### Choosing the Right NoSQL Store for an NGM‑Inside‑VPC App  
*(derived from the 2021 re:Invent “Which NoSQL database is right for you?” keynote)*  

| Goal | Core Requirement | Candidate DB | Why it fits (principle) |
|------|------------------|--------------|------------------------|
| **Ultra‑low latency, high throughput** | *Deterministic single‑digit ms response* | **Amazon DynamoDB** | DynamoDB’s key‑value engine is engineered for *O(1)* lookups. It uses SSD‑backed storage and a *partition‑key* distribution that guarantees consistent performance—an embodiment of the “concurrency → linear scalability” principle in distributed systems. |
| **Schema‑flexible, rich query** | *Dynamic attributes per entity, ad‑hoc filtering* | **Amazon DocumentDB (MongoDB compatible)** | DocumentDB stores JSON documents and supports secondary indexes and aggregation pipelines. It maps to the *information‑theoretic* idea that data should be stored in a form close to how it is queried, reducing transformation overhead. |
| **Transactional consistency across multiple items** | *Multi‑item ACID guarantees* | **Amazon Aurora (NoSQL mode)** or **DynamoDB Transactions** | These provide *serializable isolation* for multi‑key operations—a direct application of the CAP theorem’s trade‑off: we sacrifice some latency to guarantee consistency. |
| **Data locality & VPC isolation** | *All traffic stays inside a private subnet, no public endpoint* | **Amazon DynamoDB (private link)** or **DocumentDB in VPC** | PrivateLink keeps traffic off the public internet, satisfying the security principle that “data should never traverse an untrusted network unless encrypted.” |

#### Non‑obvious insight  
Most people equate *NoSQL* with *“no consistency”*. In practice, AWS offers transaction primitives (DynamoDB Transactions, Aurora’s MVCC) that let you pick **exactly** the level of consistency you need without sacrificing performance. The right choice is therefore not a single database but a *combination* tailored to the access patterns: use DynamoDB for key‑value lookups, DocumentDB for flexible queries, and enable transactions only where cross‑document integrity matters. This layered approach aligns with the principle of **“least privilege in data operations”**—only grant strong guarantees when absolutely required, keeping latency low elsewhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
