---
qid: vq_b9e50e78e7__faang__local
question: How long should raw data be retained?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 469
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:30:20-05:00'
sources: []
---

**Clarify**

The question asks for a *policy* on raw‑data retention: how many days/weeks/months/years should we keep unprocessed logs and sensor streams before purging or archiving?  
Assumptions to confirm:  

1. Regulatory requirements (GDPR, CCPA, PCI‑DSS).  
2. Business value of raw data for analytics, ML, forensic audit.  
3. Storage cost model (hot vs cold storage).  
4. Data volume & ingestion rate.

**Approach**

1. Map legal retention windows per jurisdiction.  
2. Estimate analytic churn: what fraction of raw data is ever used beyond a certain age?  
3. Build a cost‑benefit curve for hot, warm, and archival tiers.  
4. Define a “data lifecycle policy” that automatically stages or deletes data.

**Depth**

- **Legal layer** – e.g., GDPR requires deletion after 2 years unless needed for legal claims; PCI‑DSS mandates 6 months for cardholder data.  
- **Analytics layer** – typical BI pipelines use only the last 90 days of logs; ML models trained on historical patterns may need 1–3 years of raw data.  
- **Cost model** – hot SSD: $0.10/GB‑month, warm HDD: $0.02/GB‑month, archival (Glacier): $0.004/GB‑month.  
- Policy example: keep logs in hot tier for 30 days → move to warm for 60 days → archive for up to 3 years → delete.

**Edge Cases**

- Regulatory “right to be forgotten” requests.  
- Unplanned forensic investigations requiring older data.  
- Unexpected spikes in storage costs or compliance changes.

**Optimize & Communicate**

Present the policy as a *data‑retention matrix* and automate with IaC (Terraform + S3 lifecycle rules). Highlight trade‑offs: longer retention = higher cost but preserves auditability; shorter retention reduces risk of GDPR violations. Conclude with a monitoring dashboard that alerts when data approaches deletion thresholds, ensuring compliance and operational visibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
