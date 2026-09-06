---
qid: ing_8d5b3b8d1f__fp__local
question: Martin Kleppmann | Kafka Summit London 2019 Keynote | Is Kafka a Database?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 329
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:05:28-05:00'
sources: []
---

**Why Kafka is *not* a database**

The core problem Kafka solves is *ordered, fault‑tolerant event delivery at scale*.  
A database, by contrast, guarantees **strong consistency and immediate queryability** of the current state.  

Kafka stores immutable logs: each record is appended once, never rewritten.  
This design follows the principle that **write‑once, read‑many** systems avoid contention and enable linear scalability—writes are a single append operation, reads can be parallelized across partitions.  
Because data is never mutated in place, Kafka cannot provide “point‑in‑time” queries without additional stateful services (e.g., KSQL, materialised views).  

The deeper principle is *separation of concerns*: Kafka offers **transport + durability**; query engines add **semantics and indexing**.  
Treating it as a database conflates these layers and hides the cost of achieving consistency: you would need to rebuild the append‑only log on every update, breaking Kafka’s linear scalability.

**Non‑obvious insight:**  
Kafka’s immutability is not just a performance trick—it guarantees that **any consumer can replay exactly the same stream**, enabling deterministic reprocessing after failures. A database’s mutable state cannot offer this property without expensive snapshotting or CDC pipelines. Thus, Kafka’s architecture deliberately sacrifices “current‑state” querying to preserve its core guarantees of throughput and fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
