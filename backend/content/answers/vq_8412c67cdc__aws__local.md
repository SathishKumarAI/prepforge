---
qid: vq_8412c67cdc__aws__local
question: HOW DOES A CROSS JOIN WORK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 381
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:09-05:00'
sources: []
---

**Answer – “How does a cross join work?”**

> **Situation:** In my last role I was asked to optimize a nightly ETL that generated millions of customer‑segment combinations for a marketing campaign.  
> **Task:** Replace the brute‑force cross join in Spark with an efficient, scalable solution on AWS.  
> **Action:**  
> 1. Clarified requirements: we needed every `customer_id` paired with each `segment_id`, no filtering, 10 M customers × 20 segments ≈ 200 M rows.  
> 2. Designed a *distributed cross join* using Amazon EMR + Spark, leveraging **broadcast joins** for the small segment table to avoid shuffling the large customer table.  
> 3. Deployed the job as an AWS Glue crawler to catalog the result in Athena, enabling cost‑effective ad‑hoc queries.  
> 4. Implemented incremental logic: only new customers are joined with all segments each run, cutting data volume by 70 %.  
> **Result:** Execution time dropped from 1 h 30 min to 12 min (≈ 90 % faster), cost fell from $45 to $6 per run, and downstream marketers received the dataset 3× earlier, improving campaign launch cadence.  

**Leadership Principles:** *Ownership* – I took end‑to‑end responsibility for performance and cost; *Dive Deep* – I analyzed data distribution and Spark internals to choose broadcast vs shuffle strategies.  
**Bar‑raiser cues:** quantified impact (time & cost savings), architectural depth, learning loop (we later added a schema registry to catch drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
