---
qid: ing_f9a5f3589c__aws__local
question: 'Explain: LEFT JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 520
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:48-05:00'
sources: []
---

**Situation (S)**  
I was leading a data‑science sprint at a fintech startup that needed to merge customer transaction logs with credit‑score tables to train a churn‑prediction model. The raw tables were in S3, queried through Athena, and the final feature set had to be shipped nightly to an Amazon SageMaker endpoint.

**Task (T)**  
Design a robust, cost‑effective pipeline that correctly joins millions of rows, preserves all transaction records, and runs within our $0.02/GB‑query budget while keeping latency under 30 s for the nightly job.

**Action (A)**  
I chose a **LEFT JOIN** because we wanted every transaction (`transactions`) even if no credit record existed. The SQL looked like:

```sql
SELECT t.*,
       c.credit_score,
       c.last_update
FROM   transactions AS t
LEFT  JOIN credit_scores AS c
ON     t.customer_id = c.customer_id;
```

* **Requirements** – All transactions must survive the join; duplicates in `credit_scores` are eliminated by a prior aggregation (`MAX(last_update)` per customer).  
* **Design** – Partition both tables on `customer_id`, store them as columnar Parquet via Glue ETL, and run the Athena query through a CTAS into a Redshift staging table.  
* **AWS services** – Glue (ETL & catalog), Athena (serverless SQL), Redshift Spectrum (scalable joins), SageMaker (model training).  
* **Scalability/Availability** – Partitioning keeps each query to ~200 GB, hitting the 1‑TB limit of a single Athena query. Redshift’s concurrency scaling handles spikes.  
* **Cost & Trade‑offs** – The CTAS step costs ~$0.001 per GB; with 500 GB data it totals $0.50/night, well under budget. Skipping the aggregation would double cost and risk inaccurate scores.

**Result (R)**  
The pipeline delivered a 98 % accurate churn model in <30 s nightly, reduced query spend from $4 to $0.50 per run, and cut data‑engineering hours by 70%. The success reinforced my ownership of end‑to‑end ML workflows and deepened my understanding of serverless analytics trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
