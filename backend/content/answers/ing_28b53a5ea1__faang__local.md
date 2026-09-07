---
qid: ing_28b53a5ea1__faang__local
question: 'Explain: Step 1: Outline use cases and constraints'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 367
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:18:09-05:00'
sources: []
---

**Clarify**  
You’re asked to *outline* the first step in building an ML solution: defining use‑cases and constraints.  
Assumptions I’d confirm:  
1. What business objective (e.g., revenue lift, cost savings)?  
2. Who are the stakeholders (product, ops, legal)?  
3. Is it a research prototype or production system?  

**Approach**  
1. Gather stakeholder interviews → capture high‑level problems and success metrics.  
2. Map current data pipelines & infrastructure → note availability, latency, privacy rules.  
3. Prioritize use‑cases by ROI, feasibility, and alignment with strategy.  

**Depth**  
- **Use‑case taxonomy:** prediction (sales, churn), classification (fraud, sentiment), recommendation, anomaly detection, etc.  
- **Constraints checklist:**  
  - *Data*: volume, velocity, quality, labeling costs, regulatory compliance (GDPR, HIPAA).  
  - *Model*: latency budget, explainability, fairness requirements.  
  - *Ops*: compute budget, deployment cadence, monitoring maturity.  
  - *Business*: budget, timeline, governance approvals.  

**Edge Cases**  
- Data sparsity or drift → need fallback rules.  
- Privacy constraints preventing raw data usage → consider synthetic or federated solutions.  
- Tight latency vs. complex models → might require model distillation.  

**Optimize & Communicate**  
Summarize in a concise matrix (use‑case × constraint) and share with stakeholders to validate priorities.  
Iterate: refine assumptions, adjust constraints, and lock down the “starter kit” for the ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
