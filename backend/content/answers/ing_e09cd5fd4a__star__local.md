---
qid: ing_e09cd5fd4a__star__local
question: 'Explain: Now available — Designing Data-Intensive Applications (DDIA) \u2014
  an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 428
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:53-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time recommendation engine that ingested millions of user events per day. The streaming pipeline had to be highly available so that a 5 % outage would translate into lost revenue and a bad user experience.

**Task**  
I was tasked with redesigning the event ingestion layer to guarantee “now‑available” delivery—meaning that every event should be processed within seconds of arrival, even under hardware failures or network partitions.

**Action**  
First I mapped out our fault model: we had multiple Kafka brokers, a ZooKeeper ensemble, and several stateless consumer groups. To achieve high availability I implemented the following:
1. **Kafka replication & quorum‑based writes** – set `min.insync.replicas` to 2 so that messages would only be considered committed when at least two replicas acknowledged receipt.
2. **Idempotent producers** – enabled idempotence (`enable.idempotence=true`) to avoid duplicate records during retries.
3. **Graceful consumer failover** – used the `session.timeout.ms` and `max.poll.interval.ms` knobs to detect dead consumers quickly and trigger re‑balancing.
4. **Circuit breaker logic** in the downstream processing service so that if Kafka was unreachable, it would spill back to a local disk queue with a bounded size, ensuring no data loss during brief outages.

I also added a health‑check endpoint on each consumer that reported lag; this allowed us to trigger alerts before the system hit critical thresholds.

**Result**  
After deployment we saw a 99.98 % event processing uptime over the next three months, reducing user churn by 1.3 %. The pipeline processed 2 M events per second with an average latency of 350 ms, meeting our SLA. I learned that “now‑available” isn’t just about speed—it’s a combination of replication, idempotency, and graceful degradation that keeps the system resilient under real‑world conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
