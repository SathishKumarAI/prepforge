---
qid: ing_26f3840519__star__local
question: 'Explain: Index lifecycle state machine — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 336
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:26-05:00'
sources: []
---

**Situation:**  
At Uber I was tasked with scaling the real‑time ride‑matching engine to handle an explosion in user data—trip logs, driver telemetry, and dynamic pricing signals. Our existing indexing layer could only manage a few million indexes before memory thrashing and latency spiked.

**Task:**  
Design a system that would let us store and query trillions of index entries while keeping query latency under 50 ms, even during peak hours.

**Action:**  
I introduced an “index lifecycle state machine” in the LedgerStore. Each index entry was tagged with a lifecycle state (Active, Hot‑Archive, Cold‑Archive, Purge). Using Apache Kafka streams we routed new events to a hot Redis cache; once they aged past 24 h we transitioned them to a HDFS‑backed segment via an asynchronous compaction job. We used a Bloom filter per segment for fast existence checks and implemented tiered storage policies with automatic rebalancing across SSDs and HDDs. The state machine was encoded in a lightweight Protobuf schema, so all services could query the current state without pulling entire segments.

**Result:**  
Index throughput increased from 1 M/s to 200 M/s, and read latency dropped from 120 ms to 35 ms during peak traffic. Storage costs fell by 30% because we only kept hot data in SSDs. The experience taught me how state machines can turn a monolithic index into a scalable, self‑organizing system that adapts to workload patterns on the fly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
