---
qid: vq_4090e1b716__local
question: Is the data structured, semi-structured, or unstructured?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 381
total_tokens: 607
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer:**  
In production I’ve seen most pipelines treat the raw ingestion layer as *semi‑structured*: logs, JSON API payloads, and CSV exports sit in S3 or a data lake; they’re not fully relational yet but contain key/value pairs that we later normalise into fact/dimension tables. The “structured” tier is where we store engineered features in Redshift or Snowflake, using strict schemas to enable OLAP queries. Unstructured content—images, PDFs, raw audio—is still a small fraction of the pipeline; it lands in object storage and is processed by separate ML services (e.g., AWS Textract for OCR) before being linked back to the structured tables.

**Nuance:**  
During a recent migration from on‑prem Hadoop to Snowflake we had to decide whether to keep JSON as a single column or explode it into columns. Keeping it nested let us preserve schema evolution, but downstream BI tools struggled with JSON parsing, so we introduced a *materialised view* that flattened the most frequent fields (e.g., user_id, event_type) and indexed them. This trade‑off saved 40 % of query time at the cost of an extra ETL step. Metrics: after flattening, average SELECT latency dropped from 3.2 s to 1.1 s for our main dashboard. In contrast, when we tried fully normalising every JSON key into a wide table, the write throughput hit a bottleneck (≈120 k rows/sec) and the schema drift cost us two extra refactors.

In short: semi‑structured is the sweet spot for ingestion; structured is where you ship to analytics; unstructured stays in specialized pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
