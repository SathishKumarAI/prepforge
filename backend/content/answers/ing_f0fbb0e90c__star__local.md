---
qid: ing_f0fbb0e90c__star__local
question: 'Explain: Data catalogs — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 321
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:08-05:00'
sources: []
---

**Situation:**  
When I joined the analytics team at a mid‑size e‑commerce firm, our data lake had grown to 2 TB across S3, Azure Blob and on‑prem Hadoop. Engineers were hunting for datasets manually, leading to duplicated work and stale reports.

**Task:**  
I was tasked with building a unified data catalog that would let data scientists discover, understand, and trust the assets in one place while keeping governance tight.

**Action:**  
First, I mapped the existing metadata sources (AWS Glue, Azure Data Catalog, custom tags) into a single schema. Using Apache Atlas as the backbone, I wrote Python ETL scripts to pull lineage, schema, and usage statistics from each source. I integrated the catalog with our data lake via REST APIs, added automated quality checks that flagged missing or inconsistent schemas, and set up role‑based access control in Atlas. To make it user‑friendly, I built a lightweight React UI that allowed search by business terms, visualized lineage graphs, and surfaced data quality scores.

**Result:**  
Within three months the catalog was live; we cut dataset discovery time from an average of 4 days to under 30 minutes, reducing duplicate model builds by 35%. The catalog also enabled compliance reporting, giving us a clear audit trail. I learned how metadata governance can dramatically improve productivity and data trust across engineering and analytics teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
