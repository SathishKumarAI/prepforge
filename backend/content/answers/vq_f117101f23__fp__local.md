---
qid: vq_f117101f23__fp__local
question: What are the four types of SP?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 781
total_tokens: 949
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:03:16-05:00'
sources: []
---

### The four canonical *stream‑processing* paradigms  

When a system must turn an unbounded input stream into useful outputs, the fundamental trade‑offs are **latency vs. throughput** and **statefulness vs. statelessness**.  
From these two axes we derive exactly four operating modes:

| Mode | Core idea | Typical use‑case | Why it works |
|------|-----------|------------------|--------------|
| **Batch (offline)** | Process a finite window of data after it has fully arrived. | Big‑data analytics, nightly ETL jobs. | Maximal parallelism; latency is irrelevant, so we can aggregate across the whole set for optimal accuracy. |
| **Micro‑batch** | Discretize the stream into small time slices (e.g., 200 ms) and run a batch job on each slice. | Spark Structured Streaming, Flink’s DataStream API with windowing. | Balances latency and throughput; state can be checkpointed cheaply between micro‑batches. |
| **Continuous (event‑driven)** | React to every record as it arrives, updating state in real time. | Real‑time fraud detection, live dashboards. | Lowest possible latency; requires careful consistency guarantees but maximizes responsiveness. |
| **Hybrid / incremental** | Combine batch‑like materialization with continuous updates—e.g., a periodically refreshed “snapshot” that is incrementally patched by streaming events. | Materialized views in ClickHouse, Snowflake’s micro‑batch + real‑time ingestion. | Gives near‑real‑time freshness while still benefiting from the efficiency of bulk processing for large state changes. |

**Non‑obvious insight:**  
All four modes are *points on a continuum* that can be shifted by adjusting **window size**, **checkpoint granularity**, and **state compaction strategy**. A system that naïvely chooses one mode without considering its workload’s *entropy* (i.e., how rapidly the underlying data distribution changes) will either waste compute (batch for a highly volatile stream) or incur unnecessary consistency overhead (continuous for a largely static dataset). Thus, the “four types” are not discrete technologies but *operational regimes* that arise from optimizing the same two dimensions of latency and statefulness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
