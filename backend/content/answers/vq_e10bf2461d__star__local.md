---
qid: vq_e10bf2461d__star__local
question: What is a heap (table on a heap)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 357
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:05-05:00'
sources: []
---

**Situation**  
At my previous role, the analytics team was pulling quarterly sales reports from a Snowflake warehouse that had grown to over 12 TB. The ETL jobs were timing out during the nightly load because each query had to scan large tables stored on the default heap.

**Task**  
I needed to redesign the data model so that the nightly transformations ran under the 30‑minute SLA while keeping costs low and maintaining ad‑hoc query performance for business users.

**Action**  
I evaluated whether the affected tables were truly unstructured or if they could benefit from clustering. For the sales fact table, I created a **clustered heap** (a heap that is explicitly clustered on the most frequent join key). This involved adding a `CLUSTER BY` clause and re‑ingesting the data in bulk. For dimension tables that are read‑only and rarely queried, I left them as simple heaps to avoid unnecessary clustering overhead. I also added automatic clustering on the fact table to keep it efficient as new partitions arrived.

**Result**  
The nightly ETL completed 45 % faster (from 1:12 hrs to 0:35 hrs), and query latency for ad‑hoc sales reports dropped from an average of 15 s to under 3 s. The cost impact was negligible because the clustered heap uses only a small amount of storage compared to a full materialized view. I learned that heaps are ideal for large, write‑heavy tables when you can selectively cluster by key to balance performance and storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
