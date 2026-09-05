---
qid: ing_aa7f0c6bd8__star__local
question: 'Explain: A Spark job that joins a 2 TB fact table to a 50 GB dimension
  table has one straggler task running 100× longer than the rest. Diagnose and fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 368
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:32-05:00'
sources: []
---

**Situation:**  
I was optimizing a nightly ETL Spark job that joined a 2 TB fact table (sales) with a 50 GB dimension table (products). The job ran for 3 hours, but one task kept lagging and pushed the total runtime to 5 hours.  

**Task:**  
Identify why that single task was 100× slower than the others and reduce its execution time so the job would finish within our SLA of 2 hours.  

**Action:**  
1. **Profiler & Metrics** – I ran `spark.ui` and found the straggler had a skewed partition: it processed ~30 % of the fact rows for a single product category that was highly frequent.  
2. **Broadcast vs Shuffle** – The dimension table was not broadcast; Spark performed a full shuffle join, duplicating data across workers. I added `broadcast(products)` to avoid shuffling and reduce memory pressure.  
3. **Salting & Repartitioning** – To fix the skew, I salted the fact table key with a hash prefix before the join and then repartitioned by that composite key, effectively spreading the heavy category across multiple tasks.  
4. **Cluster Tuning** – Increased executor memory from 8 GB to 16 GB and added one more executor for the job, ensuring each task had enough RAM to avoid spilling.  

**Result:**  
The straggler’s runtime dropped from 2 hours to under 5 minutes, bringing the total job time down to 1 hour 45 minutes—well within SLA. I also documented the salting pattern so future jobs with skewed keys can be pre‑emptively handled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
