---
qid: ing_b38933e81a__star__local
question: 'Explain: Governance and metadata — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 305
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:00-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, the data lake was growing into a mess of raw JSON logs, CSV reports, and third‑party API dumps. Our compliance team flagged that we had no clear lineage or audit trail for sensitive user attributes.

**Task:**  
I was tasked with designing a unified data architecture that enforced governance—access controls, versioning, and metadata capture—while still allowing data scientists to iterate quickly on new models.

**Action:**  
I mapped the existing sources into a canonical schema in Delta Lake, added a catalog layer (Apache Hive metastore) for lineage, and implemented fine‑grained access via Apache Ranger. For metadata I used Amundsen to auto‑generate tags and data quality dashboards. Every ingestion job ran through Airflow with built‑in audit logs; model training pipelines were containerized in Kubeflow so that each run logged feature usage and drift metrics back into the catalog.

**Result:**  
Within three months, we reduced data discovery time by 60 % and passed an external GDPR audit without remediation. The ML team’s experiment cycle dropped from two weeks to five days, and I learned how governance can be a catalyst, not a bottleneck, when built as part of the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
