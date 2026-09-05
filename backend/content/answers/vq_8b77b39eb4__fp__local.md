---
qid: vq_8b77b39eb4__fp__local
question: Q3). How do you handle the frequency of data in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 403
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:11-05:00'
sources: []
---

**Frequency control in Azure Data Factory (ADF)** is not a single setting but a design principle that balances *timeliness* against *resource cost*.  
1. **Trigger type → problem domain** – ADF offers **schedule**, **event‑based**, and **custom triggers**. For batch pipelines that run nightly, a schedule trigger suffices; for near‑real‑time ingestion from Event Grid or Service Bus, an event trigger ensures no latency beyond the source’s push window.  
2. **Incremental copy → watermarking** – Rather than reprocessing entire tables every time, use a *watermark* (last processed timestamp) in a lookup activity and pass it to the Copy activity. This satisfies the optimization principle: you process only new rows, reducing I/O and cost while guaranteeing freshness.  
3. **Partitioning & window sizing** – When data volumes are large, split the source into time‑based partitions (e.g., per day) and use a *Data Flow* with `partitionBy` to parallelize. This leverages geometric scaling: more partitions → less per‑task load.  
4. **Pipeline dependencies → fault tolerance** – Chain activities so that downstream steps wait for upstream completion, preventing stale data from propagating.

***Non‑obvious insight:***  
ADF’s *Self‑Healing* feature automatically retries failed activities up to a configurable limit. By tuning the retry policy (delay, count) and coupling it with incremental watermarking, you avoid reprocessing entire datasets after transient failures—achieving both reliability and efficiency in one pass.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
