---
qid: ing_b9c42e6ba1__aws__local
question: 'An enterprise customer says: "We want AI to automate our claims processing."
  You''re the engineer in the room. What do the first two weeks look like?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 626
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:57-05:00'
sources: []
---

**Situation & Goal (S)**  
We got an enterprise insurer asking us to “automate claims processing” using AI. The business objective was a **30 % reduction in manual ticket handling** and a **10‑day turnaround for complex claims** within 90 days.

**Task (T)**  
In the first two weeks I had to:  
1. Validate scope & constraints.  
2. Design an end‑to‑end proof‑of‑concept (PoC) that could be scaled.  
3. Build a metric dashboard to track progress against the 30 % reduction target.

**Action (A)**  

| Step | Technical actions | AWS services | Rationale |
|------|-------------------|--------------|-----------|
| **Week 1 – Discovery** | • Interview 5 claim handlers & 2 data owners.<br>• Map the current workflow, data sources, and SLA KPIs. | *AWS Glue* (data catalog), *Amazon QuickSight* (dashboards) | Provides a single source of truth for training data and live metrics. |
| **Week 1 – Design** | • Define an NLP pipeline: OCR → entity extraction → intent classification.<br>• Prototype with Amazon Textract + Comprehend Custom Entities. | *Textract*, *Comprehend*, *SageMaker* (model training), *Lambda* (serverless orchestration). | Low‑latency, pay‑as‑you‑go; scales automatically for peak claim volumes. |
| **Week 2 – PoC** | • Build a SageMaker notebook to train a classification model on 10k past claims.<br>• Deploy via SageMaker Endpoint; wrap in API Gateway + Lambda for front‑end integration. | *SageMaker*, *API Gateway*, *Lambda* | Fast iteration, easy rollback. |
| **Week 2 – Metrics** | • Create CloudWatch metrics: claim resolution time, model confidence, manual override rate.<br>• Set alarms to trigger if >5% of claims need human review. | *CloudWatch*, *SNS* | Enables bias‑for‑action and continuous monitoring. |

**Result (R)**  
By week 2 the PoC processed 1,200 claims in under 3 minutes each, with a **92 % confidence rate** and an **initial 18 % reduction** in manual handling—already beating the 30 % target on a smaller sample.

---

### Leadership Principles Highlighted
- **Customer Obsession** – early stakeholder interviews to capture real pain points.  
- **Ownership & Dive Deep** – building end‑to‑end metrics and iterating on model accuracy.  

Bar‑raisers listen for quantified impact (18 % reduction), depth of technical design, and a clear learning loop from PoC failures (e.g., adjusting entity extraction thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
