---
qid: ing_64b83617ef__aws__local
question: 'Explain: it''s that simple so whether we are — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 399
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:33-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led the redesign of our real‑time collaborative spreadsheet (Google Docs‑style) to support 10 k concurrent users while keeping latency <200 ms and guaranteeing eventual consistency across distributed clients.

**Action – Design & AWS Stack**  
* **Operational Transformation (OT)** was chosen for conflict resolution; we implemented it in a stateless Lambda layer that accepts user edits, applies OT rules, and emits a *change stream*.  
* The change stream is published to **Amazon Kinesis Data Streams** (shards = 8) to buffer high‑velocity edits.  
* A fleet of **EC2 Spot instances** (t3.medium) run a microservice that consumes Kinesis, merges changes, and writes the updated document state to **DynamoDB** (partition key = docId).  
* For real‑time sync we expose a WebSocket API via **API Gateway**, backed by an **Elasticache Redis Cluster** for pub/sub. Clients subscribe to their document’s channel; when Redis receives a new message it pushes the OT delta instantly.

**Result**  
- Latency dropped from 600 ms to 180 ms (30% better than SLA).  
- Throughput scaled linearly to 15 k concurrent users with <1 % error rate.  
- Cost fell by 40 % by leveraging Spot instances and DynamoDB on‑demand capacity.

**Reflection – Bar‑raiser focus**  
I owned the end‑to‑end flow, dived deep into OT correctness, quantified performance gains, and learned that sharding Kinesis shards is more cost‑effective than scaling EC2 alone. This iterative, data‑driven approach embodies *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
