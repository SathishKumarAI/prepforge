---
qid: ing_d2f2838a6b__aws__local
question: 'Explain: Core Compliance Obligations for High-Risk AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 418
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:32-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑governance team at a fintech startup, we launched an automated underwriting model that directly affected credit decisions for millions of customers. Regulators flagged it as *high‑risk* because it could perpetuate bias and violate consumer‑data laws.

**Action**  
I instituted a compliance framework built on AWS services:

| Requirement | AWS Service | Design Rationale |
|-------------|-------------|------------------|
| **Data provenance & lineage** | Amazon Macie + Glue Catalog | Automates discovery of PII, tracks transformations. |
| **Bias detection** | SageMaker Ground Truth + ModelExplainability Toolkit | Generates explainable metrics; triggers alerts when disparate impact > 5%. |
| **Audit trail** | AWS CloudTrail + Athena | Immutable logs for every model retraining cycle; queries in minutes. |
| **Model versioning & rollback** | SageMaker Model Registry + ECR | Guarantees rollback within 30 s, minimizing downtime. |
| **Regulatory alignment** | AWS Artifact (SOC, ISO) + KMS | Stores certifications and encrypts all audit data. |

I added *model‑performance monitoring* with Amazon CloudWatch dashboards that surface drift > 2% in real time.

**Result**  
Within three months we achieved:

- 100 % audit compliance for the next regulator review (vs. 0 % previously).  
- Reduced bias‑related churn by **28 %**.  
- Cut model retraining costs by **15 %** through automated versioning.  

**Reflection**  
I learned that *Ownership* means owning the entire lifecycle—from data ingestion to post‑deployment monitoring—while *Dive Deep* demands continuous measurement of impact. The bar‑raiser will note my end‑to‑end ownership, quantitative ROI, and proactive learning loop that turned a compliance risk into a competitive advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
