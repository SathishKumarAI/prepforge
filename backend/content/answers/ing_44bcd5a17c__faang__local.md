---
qid: ing_44bcd5a17c__faang__local
question: 'Explain: Step 1: Outline use cases and constraints'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 439
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:24:12-05:00'
sources: []
---

**Clarify**  
You’re asking for the first step in a ML project—defining *use‑cases* and *constraints*.  
Assumptions:  
1. The problem is business‑driven (e.g., churn prediction, recommendation).  
2. Stakeholders exist (product, ops, legal).  
3. Data is available but not yet cleaned.

**Approach**  
1. **Stakeholder Interviews** – capture objectives, success metrics, and deadlines.  
2. **Domain Mapping** – translate business goals into concrete ML tasks (classification, regression, clustering).  
3. **Data & Resource Audit** – inventory data sources, volume, velocity, quality, and compute budget.  
4. **Regulatory/Privacy Constraints** – GDPR, HIPAA, etc., that shape feature selection and model explainability.  
5. **Risk & Feasibility Analysis** – identify technical risks (class imbalance, missing values) and business risks (model drift).

**Depth**  
- *Use‑cases*: e.g., “Predict 30‑day churn with ≥0.85 F1” or “Generate personalized product bundles.”  
- *Constraints*:  
  - **Latency**: inference <10 ms for real‑time recommendations.  
  - **Throughput**: batch jobs handle >1M rows/day.  
  - **Explainability**: must provide feature attribution per prediction.  
  - **Compliance**: no use of protected attributes; need audit logs.

**Edge Cases**  
- No labeled data → semi‑supervised or rule‑based fallback.  
- Data drift → schedule periodic re‑evaluation.  
- Model size > GPU memory → consider model compression or streaming inference.

**Optimize & Communicate**  
Summarize findings in a *Project Charter* deck: goals, KPIs, constraints, timeline, and success criteria. This gives interviewers confidence you’re framing the problem before diving into algorithms—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
