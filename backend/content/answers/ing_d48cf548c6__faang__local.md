---
qid: ing_d48cf548c6__faang__local
question: 'Explain: Use case: Service tracks analytics of pages'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 477
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:16-05:00'
sources: []
---

**Clarify**  
We’re building a service that ingests click‑stream logs and produces real‑time page‑level metrics (views, dwell time, conversion). Key assumptions:  
1) Events arrive in near‑real‑time, possibly out of order.  
2) Page IDs are known upfront; the cardinality is moderate (~10k pages).  
3) We need low latency (< 100 ms) for dashboards and batch outputs (daily aggregates) with accuracy to ±0.5%.

**Approach**  
1. **Ingest & de‑dup**: Stream events into a Kafka topic, deduplicate by user‑session + timestamp.  
2. **Windowed aggregation**: Use Flink/Kinesis Data Analytics to maintain sliding windows per page (e.g., 1 min tumbling).  
3. **Stateful counters**: Store per‑page counts in RocksDB; update on each event.  
4. **Materialized views**: Persist aggregates to a columnar store (Redshift/Snowflake) for BI and archival.  
5. **Alerting**: Emit anomalies via Pub/Sub when metrics deviate > 3σ.

**Depth**  
- Window logic: `PageKey = page_id`; state = struct{views, dwell_sum}. On event → increment views; add session duration to dwell_sum.  
- Complexity: O(1) per event for state update; memory ≈ pages × state_size (≈ 10k×<200B).  
- Fault tolerance: Checkpointing every 5 s; replay from Kafka if needed.

**Edge Cases**  
- Late events: use allowed lateness window + watermark strategy.  
- Missing page IDs: route to “unknown” bucket.  
- Skewed traffic: shard state across key‑ranges to avoid hot spots.

**Optimize & Communicate**  
To reduce latency, we can pre‑aggregate on edge (Lambda) for very high‑traffic pages, pushing only deltas downstream. For cost, we monitor CPU usage and scale Flink workers horizontally. I’d explain this flow in a diagram, highlighting data paths, state retention, and failure recovery to demonstrate end‑to‑end reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
