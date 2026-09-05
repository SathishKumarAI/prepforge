---
qid: ing_3fb13eacb8__star__local
question: 'Explain: Apache Kafka — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:31-05:00'
sources: []
---

**Situation** – In my last role at a fintech firm we were migrating our fraud detection pipeline from a nightly batch job to real‑time alerts. The old Spark job ran every 4 hours, pulling 500k transactions per run, and by the time it finished the window was already stale.

**Task** – I had to design a Kafka‑based solution that could ingest the same volume of events but deliver actionable insights within seconds while keeping latency below 200 ms and throughput above 1 M records per minute.

**Action** – I set up a *Kafka Streams* topology for stateful aggregation: each transaction was routed by customer ID to a session window, aggregated with a sliding window of 5 minutes, and sent to an alert topic. For comparison, I also built a small batch job that read from the same Kafka log using Spark Structured Streaming in “trigger once” mode to mimic traditional batch. I benchmarked both against a production workload: the stream consumed at 1.2 M records/min with 180 ms latency; the batch processed the same data in ~4 min, producing results too late for our use case.

**Result** – Switching to streaming cut alert latency from hours to seconds, reduced false positives by 30%, and freed up cluster resources because we no longer needed large Spark executors. I learned that Kafka’s log‑based model shines when you need low‑latency, continuous processing; batch is still useful for heavy analytics or archival where freshness isn’t critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
