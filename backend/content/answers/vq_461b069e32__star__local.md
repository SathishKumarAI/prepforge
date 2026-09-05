---
qid: vq_461b069e32__star__local
question: How to implement incremental load in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 314
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:56-05:00'
sources: []
---

**Situation:**  
In a recent project for a retail client, we had to refresh their sales data lake daily from an on‑prem SQL Server. The full load took over two hours and caused downstream analytics to lag behind real‑time dashboards.

**Task:**  
I was tasked with designing an incremental load pipeline in Azure Data Factory that would pull only new or updated rows each day while keeping the overall latency under 30 minutes.

**Action:**  
I added a “LastModified” timestamp column to the source table and created a parameterized copy activity. The pipeline first queried the maximum `LastModified` value stored in an Azure Table as a watermark. Then, using that watermark as a filter (`WHERE LastModified > @Watermark`), I copied only changed rows into a staging container. After deduplication with a Data Flow that performed a merge on the primary key, I appended the new data to the target Delta Lake table and updated the watermark. I also scheduled the pipeline via a tumbling window trigger to run every 12 hours.

**Result:**  
The incremental load cut processing time from two hours to just 15 minutes, reducing cost by ~60% on ADF compute usage. The dashboards reflected near real‑time data, improving decision‑making speed for the client’s sales team. I learned how critical a well‑chosen watermark strategy is and gained deeper experience with Delta Lake merge operations in ADF.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
