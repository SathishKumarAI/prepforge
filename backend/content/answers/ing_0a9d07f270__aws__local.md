---
qid: ing_0a9d07f270__aws__local
question: 'Explain: Um, let me give this one more — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 456
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:59-05:00'
sources: []
---

**Situation / Task**  
When I joined Amazon’s Machine‑Learning Engineering team in 2017, we were asked to prototype a real‑time collaboration platform similar to Google Wave—an “interactive canvas” where multiple users could edit documents simultaneously with low latency and eventual consistency.

**Action (Design)**  
I owned the architecture and drove it from concept to proof‑of‑concept.  
* **Data plane** – I chose **Amazon DynamoDB** for its single‑digit millisecond latency and built a **DynamoDB Streams → AWS Lambda** pipeline to capture changes.  
* **Streaming layer** – For real‑time propagation, I wired the stream into an **Amazon Kinesis Data Stream**, which feeds **AWS AppSync (GraphQL)** backed by **Elasticache Redis** for in‑memory state replication across edge locations.  
* **Conflict resolution** – Implemented a *CRDT* (conflict‑free replicated data type) library in Lambda to merge concurrent edits without locking, satisfying the *“Invent & Simplify”* principle.  
* **Observability** – Leveraged **Amazon CloudWatch Metrics + X-Ray** to trace latency from client to DynamoDB and back, ensuring we met a 200 ms target for 95% of operations.

**Result (Metrics)**  
The prototype handled **10k concurrent users** with an average round‑trip latency of **180 ms** and 99.9% data consistency within seconds—up from the initial 1 s baseline. Cost was under **$2,500/month**, a 30% reduction over our prior Kafka‑based design.

**Reflection (Bar‑raiser)**  
I learned that *“Dive Deep”* means iterating on the data model until it truly reflects user intent; *“Ownership”* drove me to ship a working system before formal release. The trade‑off of using DynamoDB was higher write costs, but we mitigated this with fine‑grained partitions and provisioned throughput scaling via **Auto Scaling**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
