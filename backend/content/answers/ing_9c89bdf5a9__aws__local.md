---
qid: ing_9c89bdf5a9__aws__local
question: 'Explain: I think there''s a pretty good chance — Martin Kleppmann | Kafka
  Summit London 2019 Keynote | Is Kafka a Database?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 525
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:40-05:00'
sources: []
---

**Context & Goal (Situation)**  
While leading the data‑engineering team for our e‑commerce platform, we were debating whether to store real‑time clickstream data in Kafka or shift it to a relational database. I drew on Martin Kleppmann’s “Kafka is not a database” talk to frame the decision.

**Task**  
Prove that Kafka can serve as an event log and buffering layer without becoming a primary data store, ensuring we meet SLAs for 10 M events/s with 99.999% durability.

**Action (Dive Deep & Ownership)**  
1. **Requirements audit** – persisted read‑through latency <5 ms, schema evolution support, and long‑term retention (30 days).  
2. **Design** –  
   * Kafka topics per business domain (clicks, orders) with 24 partitions for parallelism.  
   * Schema Registry + Avro for forward/backward compatibility.  
   * Consumer groups: real‑time analytics (Spark Structured Streaming), audit log (S3 archival via Kafka Connect).  
   * Back‑pressure via `max.poll.records` and per‑partition offsets.  
3. **AWS Services** – MSK for managed Kafka, Lambda for lightweight consumers, S3 & Glacier for cold storage, CloudWatch for metrics.  
4. **Scalability/Availability** – 3 broker AZ spread, replication factor = 3, leader election guarantees 99.999% availability; topic-level compaction for key‑value use cases.  
5. **Cost trade‑offs** – MSK spot instances + autoscaling reduced broker cost by ~25%; S3 lifecycle moves 90% of data to Glacier after 30 days.

**Result (Deliver Results)**  
- Achieved 10 M events/s ingestion with <4 ms write latency, 99.999% durability.  
- Offloaded 70 GB/day from RDS, cutting storage costs by $12k/month.  
- Reduced query latency for real‑time dashboards from 8 s to 200 ms.

**Learning & Bar‑raiser Notes**  
I owned the full stack, deep-dived into Kafka internals (replication, compaction), quantified impact with clear metrics, and iterated on failure modes (e.g., broker churn) by adding monitoring alerts. This approach aligns with *Customer Obsession* (fast, reliable data for users) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
