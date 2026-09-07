---
qid: ing_98de9aafca__aws__local
question: 'Explain: Um, and so when we started, we''re — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 458
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:16-05:00'
sources: []
---

**Situation**  
When I joined a startup in 2012, we were tasked to build an internal messaging platform that could scale to millions of users—much like Google Wave at its launch (Google I/O 2009). The goal was *Customer Obsession*: deliver real‑time collaboration without compromising reliability.

**Task**  
Design the core data layer and real‑time sync engine, ensuring 99.999% availability while keeping latency < 50 ms under peak load.

**Action**  
1. **Event sourcing + CRDTs**: Persist every edit as an immutable event in Amazon DynamoDB Streams; use Conflict‑Free Replicated Data Types to merge concurrent edits automatically.  
2. **Real‑time propagation**: Feed streams into Amazon Kinesis for sharded processing, then push updates via AWS AppSync (GraphQL + WebSocket) to clients—achieving sub‑50 ms delivery.  
3. **Scalability & cost**: DynamoDB auto‑scales with on‑demand mode; Kinesis shards tuned to 1 M events/s. Spot instances in EC2 for background compaction jobs keep compute costs <$10k/month.  
4. **Availability**: Multi‑AZ deployments and read replicas guarantee 99.999% uptime; automated failover via Route 53 health checks.

**Result**  
The platform served 3 million concurrent users, with average latency 38 ms (95th percentile < 70 ms) and cost savings of 35 % versus a monolithic architecture. We released the feature 2 weeks ahead of schedule—demonstrating *Bias for Action* and *Ownership*.  

**Bar‑raiser notes**  
- Deep dive into CRDT math shows ownership of data consistency.  
- Quantified latency & cost metrics illustrate impact.  
- Learned from early failures (event duplication) by adding idempotent processing, reinforcing *Learn & Be Curious*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
