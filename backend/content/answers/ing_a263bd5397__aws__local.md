---
qid: ing_a263bd5397__aws__local
question: 'Explain: Logical data models — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 447
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:32:11-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation & Task**  
In my last role I led the redesign of an enterprise data lake that fed our recommendation engine. Stakeholders complained that “logical models” were vague and new hires spent weeks reconciling schema definitions. My goal was to **clarify what a Data Architecture is, align everyone on a single source of truth, and reduce time‑to‑insight from days to hours**.

**Action**  
1. *Dive Deep* – I mapped the end‑to‑end flow: ingest (Kafka → Glue), transformation (Spark jobs in EMR), cataloging (Glue Data Catalog), storage (S3 partitioned by business unit and timestamp), and consumption (Redshift Spectrum for analysts, SageMaker for ML).  
2. *Ownership* – I authored a **Logical Data Model (LDM)** diagram that defined entities, attributes, cardinalities, and derived metrics. The LDM was stored in Confluence and referenced by the Glue Catalog’s schema registry, ensuring consistency across teams.  
3. *AWS Services* – S3 for immutable raw data, Glue for ETL & metadata, Lake Formation for fine‑grained access control, Redshift Spectrum for low‑cost analytics, and SageMaker Pipelines for reproducible training.  
4. *Bias for Action* – I implemented an automated validation job that ran nightly to flag schema drift; it reduced “data mismatch” incidents by **87 %** in the first quarter.

**Result**  
The new architecture cut data prep time from 3 days to 6 hours, enabling the recommendation model to train twice as often. The Glue Catalog’s single source of truth eliminated duplicate definitions, saving an estimated **$120k annually** in engineering hours. This project earned a “Customer Obsession” kudos and reinforced my ownership mindset.

> *Bar‑raiser cues:* deep technical understanding (AWS services), clear data‑driven impact, ownership of end‑to‑end flow, learning from prior failures (schema drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
