---
qid: ing_d9e5a2326e__aws__local
question: 'Explain: 🛡️ Safety, Security & Responsible AI — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 577
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:20-05:00'
sources: []
---

**Safety, Security & Responsible AI – Cheat Sheet (Amazon‑style)**  

| **Principle** | **What it means for AI** |
|---|---|
| *Customer Obsession* | Treat users as the primary “victims” of bias or error; design safeguards that protect privacy and safety. |
| *Ownership* | Own end‑to‑end pipeline: data, model, deployment, monitoring & remediation. |

---

### 1️⃣ Data & Model Governance  
- **Data Provenance** – Tag every record with a lineage DAG (AWS Glue Catalog).  
- **Bias Audits** – Run automated fairness tests nightly on SageMaker endpoints; flag any disparate impact > 2%.  

### 2️⃣ Runtime Safeguards  
- **Feature‑Level Filters** – Lambda@Edge rewrites request payloads to strip PII before passing to the model.  
- **Output Sanitization** – A custom API Gateway authorizer checks responses against a regex blacklist (e.g., no hate‑speech).  

### 3️⃣ Continuous Monitoring & Incident Response  
| Service | Role |
|---|---|
| CloudWatch + Amazon EventBridge | Detect spikes in error rates or drift; trigger SNS alerts. |
| AWS GuardDuty | Scan for anomalous IAM usage that could hijack model endpoints. |
| SageMaker Model Monitor | Log input‑output pairs; auto‑rollback to previous checkpoint if performance degrades > 5%. |

### 4️⃣ Cost & Scalability Trade‑offs  
- **Cold Start** – Use Lambda with provisioned concurrency (0.1$ per hour) for low‑latency inference; switch to EC2 spot instances for heavy traffic (cost ↓ 50%).  
- **Availability** – Deploy across two AZs, use ALB health checks; enable SageMaker Multi‑Model Endpoint for zero downtime updates.

---

### STAR Example  

**Situation:** Our recommendation engine was flagged for demographic bias.  
**Task:** Reduce disparate impact to < 1% while keeping latency ≤ 200 ms.  
**Action:** Implemented a two‑stage filter: (1) Glue ETL added “protected‑attribute” tags; (2) SageMaker Model Monitor rerouted biased predictions to a fallback rule‑based model.  
**Result:** Bias dropped from 6% to 0.8%; latency remained 180 ms; cost increased by only 3%.  

*Bar‑raiser cues:* ownership of the entire pipeline, deep dive into fairness metrics, quantifiable impact, and learning loop (post‑incident review).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
