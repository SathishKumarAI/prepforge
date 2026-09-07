---
qid: vq_392c7df416__aws__local
question: what is difference between DAG & Lineage?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 464
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:07-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation / Task** – In my last role I led a data‑pipeline revamp for the sales analytics platform. The team needed to distinguish *DAG* from *lineage* to meet SLAs and audit requirements.  
> 
> **Action** – I first clarified that a **Directed Acyclic Graph (DAG)** is an *execution plan*: nodes are tasks (e.g., extract, transform, load), edges are dependencies. It drives scheduling in Airflow or AWS Step Functions. In contrast, **data lineage** captures the *provenance* of each data element: where it originated, which transformations altered it, and where it ends up. I designed a hybrid solution:  
> 
> 1. Use **AWS Glue ETL jobs** orchestrated by **Amazon Managed Workflows for Apache Airflow (MWAA)** to build the DAGs.  
> 2. Persist lineage metadata in **Amazon DynamoDB** keyed by data‑set hash, enriched with AWS Glue Catalog tags.  
> 3. Expose lineage via a lightweight **API Gateway + Lambda** layer that queries DynamoDB and returns JSON for BI tools.  
> 
> **Result** – The new pipeline cut processing time from 12 h to 4 h (‑66%) and reduced data‑quality incidents by 80%. Auditors could trace any metric back to its source in under 2 s, meeting regulatory compliance.  
> 
> **Leadership Principles Highlighted**  
> *Ownership* – I took full responsibility for the end‑to‑end solution, not just the ETL code.  
> *Dive Deep* – By modeling both DAG and lineage separately, I uncovered hidden dependencies that caused data drift.  
> *Bias for Action* – Implemented the DynamoDB schema before the first production run to avoid costly redesigns later.  

**What a bar‑raiser hears** – clear ownership, deep technical understanding of workflow vs provenance, measurable impact, and proactive learning from early failures (e.g., initial attempt to store lineage in S3 led to latency issues).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
