---
qid: ing_a82557e20f__faang__local
question: 'Explain: Lambda Architecture — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 482
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:42-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Distributed Counter* (e.g., page views) using the **Lambda Architecture**: batch, speed, and serving layers. I’ll assume:  
• High write throughput (≈10k ops/s).  
• Reads need low latency (< 50 ms).  
• Counters are eventually consistent; exact counts are acceptable after a short lag.

**Approach**  
1. **Batch Layer** – ingest raw events into a distributed log (Kafka), replay with Spark/Beam to build *materialized views* per key, persist to HDFS/Parquet.  
2. **Speed Layer** – consume same Kafka stream with Flink/FastAPI; update an in‑memory cache (Redis) and append to a write‑optimized store (Cassandra).  
3. **Serving Layer** – expose REST/GraphQL that first queries Redis for the latest delta, then falls back to Cassandra/HBase for historical data.

**Depth**  
*Batch*: `Spark Structured Streaming` → `Delta Lake` ensures ACID; schedule nightly jobs to merge incremental updates into a clean table.  
*Speed*: `Flink CEP` emits per‑event increments; `Redis Streams` hold hot counters, auto‑evicting after 24 h.  
*Serving*: Use `gRPC` for sub‑10 ms latency; implement cache‑stale fallback logic to keep consistency within a few seconds.

**Edge Cases**  
• **Event duplication** – deduplicate using idempotent keys in Kafka.  
• **Out‑of‑order arrivals** – batch layer handles late data; speed layer uses event timestamps.  
• **Cache miss** – return Cassandra value + estimate from batch layer.  

**Optimize & Communicate**  
- Add a *compaction* job to prune old partitions, reducing query cost.  
- Implement health checks and automated scaling for Redis shards based on hot‑key metrics.  
- Explain trade‑offs: speed layer gives sub‑ms reads but eventual consistency; batch guarantees correctness after lag.  

This design satisfies Lambda’s core principle—combine fast incremental updates with reliable batch recomputation—to deliver a scalable distributed counter system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
