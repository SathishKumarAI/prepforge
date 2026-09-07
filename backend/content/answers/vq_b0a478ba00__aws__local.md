---
qid: vq_b0a478ba00__aws__local
question: How does one loop through tables in PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 452
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:09:31-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech client on the “Real‑Time Credit Scoring” project, their legacy PL/SQL batch processed millions of rows per day but hit a bottleneck: a nested `FOR` loop over two large tables (`CUSTOMER_DIM`, `TRANSACTION_FACT`) caused 45 % CPU spikes and nightly job failures. I was tasked to redesign the data‑access pattern so the ETL could finish in under 4 hrs without breaking downstream analytics.

**Approach & Design**  
1. **Batching + Bulk Operations** – Instead of looping row‑by‑row, I used `FORALL` with collection variables and fetched rows in chunks of 10k using a cursor with `LIMIT`.  
2. **Parallel Execution** – Leveraged Oracle’s `DBMS_PARALLEL_EXECUTE` to split the workload across 8 parallel workers, each handling a distinct customer segment (`cust_id % 8`).  
3. **Service‑Level Integration** – Exported results to an S3 bucket via `UTL_FILE` and `AWS SDK for Java`, then triggered an AWS Lambda that ingests data into Amazon Redshift.  

**Result**  
- Job runtime dropped from **10 hrs → 2 hrs** (8× faster).  
- CPU utilization fell by **55 %**, freeing capacity for other analytics jobs.  
- Data freshness improved: daily score updates now arrive within 90 minutes, boosting user satisfaction scores by **12 pts** on NPS.

**Leadership Principles Reflected**  
- *Customer Obsession*: Faster, more reliable scoring directly improved customer experience.  
- *Ownership & Dive Deep*: I identified the root cause (inefficient loops), engineered a scalable solution, and validated performance gains through rigorous testing.  

**Bar‑raiser Takeaway** – Show ownership by taking end‑to‑end responsibility, dive deep into technical details to uncover bottlenecks, quantify impact with clear metrics, and iterate quickly after learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
