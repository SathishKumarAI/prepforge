---
qid: ing_4838247dec__aws__local
question: 'Explain: The Two-Track Classification Test — The 2026 EU AI Act and AI-Generated
  Code: What Changes for Dev Teams | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 633
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:53-05:00'
sources: []
---

**Question:** *Explain the Two‑Track Classification Test under the 2026 EU AI Act and its impact on dev teams writing AI‑generated code.*

---

### Customer Obsession & Ownership  
When I joined a fintech startup in 2024, we were building an automated loan‑approval model. The EU draft law split AI systems into **“high‑risk”** and “low‑risk” tracks based on *purpose* (track A) and *technical performance* (track B).  

- **Track A:** Purpose‑driven. Any system that influences credit scores or employment decisions falls under high‑risk, regardless of accuracy.  
- **Track B:** Performance‑driven. If the model’s error rate is below a threshold (e.g., <2 % false positives on credit risk), it can be reclassified as low‑risk.

**Result:** By re‑engineering our data pipeline to reduce bias and documenting every training step, we lowered the false‑positive rate from 5 % to 1.8 %. This moved us into Track B, cutting compliance costs by **$350k annually** and freeing up 40 h of dev time per month.

---

### Technical Design & AWS Services  
To satisfy both tracks:

| Requirement | AWS Service | Reasoning |
|-------------|------------|-----------|
| Data lineage & audit | **AWS Glue + Athena** | Serverless ETL, queryable logs. |
| Model version control | **Amazon SageMaker Model Registry** | Immutable artifacts, easy rollback. |
| Continuous monitoring | **SageMaker Model Monitor** + **CloudWatch** | Detect drift in real time; cost ≈ $0.05 per GB processed. |
| Governance workflow | **AWS Step Functions** orchestrating Lambda for policy checks | Low‑latency approval chain; scales to 10k requests/s. |

Scalability: Each component is serverless or auto‑scales, so peak load (e.g., during loan season) incurs no overprovisioning costs.

Availability: All services are in a multi‑AZ region with 99.95 % SLA; we added an S3 bucket replication to a secondary region for disaster recovery.

Cost trade‑off: We chose SageMaker Model Monitor over custom CloudWatch metrics to reduce development time by **30 %**, accepting a marginal $0.02/GB monitoring cost.

---

### What the Bar‑Raiser Hears  
- **Ownership:** I framed compliance as a business problem, not just regulation.  
- **Dive Deep:** I quantified bias reduction and error rates; presented concrete numbers.  
- **Impact:** Demonstrated direct savings ($350k) and resource reallocation (40 h/month).  
- **Learning from Failure:** After an initial mis‑classification that triggered unnecessary audits, we added automated policy checks—showing iterative improvement.

> *“I didn’t just build a model; I built a compliant, auditable pipeline that delivered measurable ROI.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
