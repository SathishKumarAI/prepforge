---
qid: ing_3cadf80ee4__aws__local
question: 'Explain: have is we still have this representation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 491
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:05-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked with migrating a legacy recommendation engine that still stored user‑behavior data in flat CSV files on an on‑premise Hadoop cluster. The business questioned why we kept this brittle representation instead of moving to a more scalable, queryable format.

**Action**  
I first **dive deep** into the data lineage: 1 TB of logs, 2 M users, and 30 GB daily ingestion. I mapped usage patterns—90 % of downstream ML jobs required random access by user ID, yet the CSVs forced full scans.  

I proposed a new pipeline using **Amazon S3** for raw storage, **Glue** to convert the files into **Parquet** (columnar, compressed), and **Athena** for ad‑hoc analytics. For training, I moved data into an **Amazon DynamoDB** table with composite keys (`user_id#timestamp`) to enable fast point lookups, backed by **S3** as cold storage. Finally, I set up a **SageMaker** endpoint that pulls the latest snapshot via **AWS Glue Data Catalog**.

**Result**  
- Query latency dropped from 4 min → 200 ms (95th percentile).  
- Storage cost fell by 35 % thanks to Parquet compression.  
- The ML model training time reduced from 12 hrs to 3 hrs, allowing a weekly retraining cadence instead of quarterly.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered faster insights for the product team.  
- **Ownership & Bias for Action**: Took initiative to redesign the entire data stack and rolled it out in two sprints.  

**Bar‑raiser Takeaway**  
I demonstrated ownership by mapping pain points, diving deep into metrics, proposing a concrete AWS‑native solution, quantifying impact, and learning from the initial failure of the CSV approach—showing that even legacy representations can be modernized for real business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
