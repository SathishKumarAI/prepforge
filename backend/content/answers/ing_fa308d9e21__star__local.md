---
qid: ing_fa308d9e21__star__local
question: 'Explain: AWS Kinesis — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 342
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:54-05:00'
sources: []
---

**Situation** – In my last role, our marketing team needed real‑time ad‑click analytics for a major product launch. The dashboard had to update within seconds while also generating monthly reports for compliance.

**Task** – I was tasked with designing a data pipeline that could ingest click events from millions of users, provide instant metrics, and also batch those same events into daily aggregates without duplicating effort or incurring high costs.

**Action** – I leveraged **Kinesis Data Streams** for low‑latency ingestion. Each record (a click event) flowed through the stream to a Lambda consumer that updated an in‑memory cache and pushed a summary to CloudWatch Metrics, giving sub‑second visibility. For batch processing, I set up a separate **Kinesis Data Firehose** delivery stream that pulled the same data from the stream using the “Direct PUT” option but wrote it into S3 in 1‑hour partitions. A Glue ETL job then aggregated those hourly files into daily reports. By decoupling stream and batch workloads, we avoided back‑pressure on the real‑time path while still producing accurate, cost‑efficient nightly batches.

**Result** – Real‑time dashboards updated within 2 seconds, and our compliance team received fully auditable daily CSVs in less than an hour after each day’s end. The architecture cut processing costs by ~30% compared to a single stream approach, and I learned how to balance latency, throughput, and cost with Kinesis’ dual streaming modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
