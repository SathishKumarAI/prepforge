---
qid: vq_c0eef8b95f__star__local
question: Explain the use of Integration Runtime (IR) in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 380
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:47-05:00'
sources: []
---

**Situation:**  
At my previous company we had to migrate our on‑prem data warehouse to the cloud. The legacy ETL jobs ran nightly and were tightly coupled to an old SAP database that only exposed a JDBC interface.

**Task:**  
I was tasked with building a reliable, cost‑effective pipeline in Azure Data Factory (ADF) that could pull the 200 GB of transactional data each night, transform it, and load it into our Synapse lakehouse without exceeding our budget or SLA.

**Action:**  
I chose to use ADF’s Integration Runtime (IR). First, I deployed a self‑hosted IR on an Azure VM within the same VNet as the SAP server so we could reach the database over the corporate VPN. The self‑hosted IR handled authentication and data movement, while a managed IR in the cloud performed the heavy lifting of copying data to ADLS Gen2 using parallel copy threads (up to 64 concurrent streams). I also set up a “data flow” that ran on an Azure‑SSIS IR to perform schema mapping and window functions. To keep costs low, I scheduled the pipeline to run during off‑peak hours and used dynamic content to throttle concurrency when CPU usage spiked.

**Result:**  
The migration completed two weeks ahead of schedule, with nightly throughput improving from 1 GB/min to 5 GB/min. We cut our ETL cost by 30% compared to a pure managed IR approach, and the pipeline now reliably meets the 3‑hour SLA for downstream analytics. I learned how to balance on‑prem connectivity, parallelism, and cost control using the right mix of self‑hosted and managed Integration Runtimes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
