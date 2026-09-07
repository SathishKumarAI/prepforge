---
qid: ing_286eaa239e__aws__local
question: 'Q: What is the "Over-Reliance" risk in HITL, and how do you mitigate it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 521
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:57:05-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team building an AI‑driven triage system for a health‑tech startup. The system promised instant symptom classification but the founders were wary of *over‑reliance*—the risk that clinicians would trust the model too much, leading to missed diagnoses.

**Action**  
1. **Design a robust HITL pipeline** using SageMaker Endpoint + Step Functions to route cases above a confidence threshold (0.85) directly to an ML engineer for review before notifying clinicians.  
2. Implement *confidence‑based gating* in Lambda and store audit logs in DynamoDB, enabling real‑time dashboards in CloudWatch.  
3. Run quarterly “bias audits” with GuardDuty‑style anomaly detection on prediction drift; trigger automatic retraining via SageMaker Pipelines when drift >5%.  
4. Conduct a 3‑month pilot where clinicians reviewed only 30% of predictions (those flagged by the gate).  

**Result**  
- **Reduced false‑positive triage errors from 12 % to 2 %** (a 83 % drop), cutting downstream emergency visits by 15 %.  
- Clinician trust scores rose from 3.1/5 to 4.6/5 on post‑pilot surveys.  
- Cost remained <10 % higher than a pure ML approach due to efficient Lambda invocations and spot instances for retraining.

**Reflection & Learning**  
I owned the risk by turning it into an opportunity: “If we can’t prove safety, we must build in safeguards.” The bar‑raiser will note my *ownership*, *dive deep* analysis of drift, and the data‑driven impact. I also documented lessons from the first audit—false negatives surfaced due to rare symptom combinations—and updated our training set accordingly.

**Leadership Principles Highlighted**  
- **Customer Obsession** – protecting clinicians’ decision quality.  
- **Ownership** – end‑to‑end responsibility for safety and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
