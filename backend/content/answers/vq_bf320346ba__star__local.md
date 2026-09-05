---
qid: vq_bf320346ba__star__local
question: Describe the process of data ingestion in Azure Synapse ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 390
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:17-05:00'
sources: []
---

**Situation** – In my last role I was responsible for migrating the company’s legacy log streams into a unified analytics platform on Azure Synapse. The existing logs were generated at 2 GB per day, streamed in JSON via Event Hubs and had to be available for near‑real‑time reporting within 30 minutes.

**Task** – Build an ingestion pipeline that could reliably pull the Event Hub stream, transform it into a columnar format, store it in ADLS Gen2, and load it into Synapse’s dedicated SQL pool with minimal latency while preserving schema evolution.

**Action** – I started by configuring Azure Data Factory (ADF) pipelines to trigger on new Event Hub messages. Inside each pipeline I used the “Event Hubs” source connector, then a mapping data flow that applied JSON parsing, field normalization, and added partition keys based on ingestion time. The transformed dataset was written to ADLS Gen2 using the “Sink” component with Delta Lake support so we could version files. Next, I set up Synapse Spark notebooks to read the Delta tables, perform a schema‑drift check, and write results into the dedicated SQL pool via PolyBase, leveraging auto‑tuning for columnstore indexes. Finally, I added monitoring through Azure Monitor alerts on pipeline failures and lag metrics.

**Result** – The new ingestion flow cut data latency from 3 hours to under 20 minutes, increased throughput by 4×, and reduced storage costs by 30% thanks to Delta Lake compression. I learned how tightly coupling ADF, ADLS Gen2, Spark, and Synapse SQL pool can deliver a robust, scalable ingestion layer for real‑time analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
