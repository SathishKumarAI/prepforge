---
qid: vq_d481720098__star__local
question: What are different integration runtimes ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 341
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:27-05:00'
sources: []
---

**Situation** – In my last role I was tasked with consolidating data from our on‑prem Hadoop cluster and a cloud‑based Snowflake warehouse into a unified analytics platform. The existing ETL pipeline was monolithic, making it hard to add new sources or scale independently.

**Task** – I needed to redesign the ingestion layer so that each source could run in its own isolated environment while still feeding the same downstream data lake, and ensure we could switch between on‑prem, cloud, and hybrid workloads without code rewrites.

**Action** – I evaluated three integration runtimes:  
1. **Azure Data Factory Self‑Hosted Integration Runtime (SHIR)** for secure on‑prem to cloud movement;  
2. **Amazon Glue ETL jobs** for serverless Spark transformations in the cloud;  
3. **Apache NiFi local processors** for real‑time streaming from Kafka topics that stayed behind firewalls.  

I built a modular pipeline where each runtime exposed a REST endpoint, and orchestrated them with Azure Logic Apps to trigger downstream processes only after all runtimes completed successfully. I added circuit breakers and retry policies to handle transient failures.

**Result** – The new architecture cut data latency from 6 hours to under 30 minutes for real‑time feeds and reduced infrastructure costs by ~25% through serverless Glue usage. It also allowed us to onboard a new on‑prem sensor network in just two weeks, demonstrating the flexibility of using multiple integration runtimes side by side.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
