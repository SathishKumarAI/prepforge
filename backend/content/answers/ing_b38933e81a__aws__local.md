---
qid: ing_b38933e81a__aws__local
question: 'Explain: Governance and metadata — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 503
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:49-05:00'
sources: []
---

**Answer (Amazon Way)**  

**Situation / Task**  
At my previous role I led the migration of a 3‑year legacy data lake into an AWS‑native architecture to support ML workloads for customer churn prediction. The legacy system had ad‑hoc ingestion pipelines, no metadata catalog, and no governance – every data scientist pulled raw S3 files and risked inconsistent schemas. Our goal was to create a *data architecture* that enforced **governance** and rich **metadata**, enabling reproducible ML experiments while keeping costs under $200k/yr.

**Action**  
1. **Ownership & Dive Deep** – I mapped every data source, quantified lineage (≈ 50 TB/day), and identified 12 pain points: duplicate schemas, missing lineage, no access control.  
2. **Design** – Built a lake using *Amazon S3* for immutable storage, *AWS Glue Data Catalog* + *Lake Formation* for metadata & fine‑grained IAM policies, and *Glue ETL jobs* to enforce schema evolution with *AWS Schema Registry*.  
3. Added *AWS Lake Formation tags* to track business owners; implemented *Data Quality Rules* in Glue to flag anomalies before they hit ML pipelines.  
4. Integrated *Amazon SageMaker* notebooks that automatically pull metadata from the catalog, ensuring every experiment references a single source of truth.  

**Result**  
- Reduced data‑discovery time by **70%** (from 3 days to 18 hrs).  
- Cut storage costs by **25%** through deduplication and lifecycle policies.  
- Achieved **99.99% availability** for the data lake; all governance rules enforced automatically, eliminating manual compliance checks.  

**Bar‑raiser cues**  
* Ownership: I led cross‑functional squads and owned the end‑to‑end architecture.  
* Dive Deep: Detailed lineage mapping and rule engineering show depth.  
* Quantified Impact: Concrete metrics on time, cost, availability.  
* Learning from Failure: Early pilot exposed schema drift; we iterated by adding automated validation in Glue before full rollout.  

**Leadership Principles Highlighted** – *Ownership*, *Dive Deep*, *Customer Obsession* (data scientists), *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
