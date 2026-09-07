---
qid: vq_4072a021d5__aws__local
question: How can we join two bigger tables in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 411
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:09-05:00'
sources: []
---

**Situation / Task**  
I was tasked with joining two 30‑TB fact tables (sales and inventory) in an on‑prem Spark cluster that served daily BI reports for a retail chain. The naive `join()` blew memory, causing OOMs and 24 h runtimes—unacceptable for our *daily* reporting cadence.

**Action**  
1. **Ownership & Dive Deep** – I profiled the data: sales had a skewed `product_id` (top 5% caused >70% of rows).  
2. I switched to a **broadcast join** for the smaller dimension (inventory) and used **salting** on the large table to mitigate shuffle skew.  
3. Leveraged **Amazon EMR with Spark‑SQL** and enabled **Adaptive Query Execution (AQE)**, which automatically re‑optimizes joins at runtime.  
4. Implemented a **partitioned Delta Lake** layout on S3 (`s3://company-data/sales/`), storing each month as its own partition; this reduced shuffle to ~5 TB.  
5. Added a **metrics dashboard** (CloudWatch + QuickSight) to monitor join latency and GC churn.

**Result**  
- Runtime dropped from 24 h → **4 h** per job.  
- Cost savings: $1,200/month by reducing EMR instance hours.  
- SLA achieved: 95% of reports delivered within the 6‑hour window instead of 12.  

**Learning** – Always profile cardinality before a join; use broadcast + salting and AQE to avoid skew. This approach scales to >100 TB with minimal cost increases, aligning with Amazon’s *Customer Obsession* (faster insights) and *Ownership* (end‑to‑end performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
