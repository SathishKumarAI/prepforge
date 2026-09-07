---
qid: ing_e536bdf16b__aws__local
question: 'Explain: Pattern Selection Guide — Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 433
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:13-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
I was leading a fintech startup that needed to deploy an AI‑driven fraud detection system within 90 days. The product team had dozens of ML patterns—ensemble, explainable, online learning—but no clear guidance on which to pick for each use case.

**Task**  
Create a *Pattern Selection Guide* that maps business objectives and data constraints to the most appropriate architectural pattern, ensuring rapid delivery while keeping costs < $50k/month.

**Action (Dive Deep & Bias for Action)**  
1. **Requirements matrix:**  
   - Latency (< 200 ms) → online learning or incremental gradient descent.  
   - Explainability (regulatory) → rule‑based + SHAP explanations.  
   - Data drift → concept‑drift detection pattern.  
2. **Design the guide** as a decision tree published in Confluence, with AWS artifacts:  
   - *SageMaker Pipelines* for batch training.  
   - *Kinesis Data Streams* + *Lambda* for real‑time inference (online learning).  
   - *Step Functions* orchestrating drift checks and model rollbacks.  
3. **Pilot** on a 10% fraud subset; measured latency 180 ms, AUC‑ROC 0.92, cost $12k/month.

**Result**  
Within 4 weeks the guide was adopted company‑wide, cutting pattern selection time by 70 %. Production deployments hit SLA targets with 99.9 % uptime and stayed under budget—resulting in a $1.2M YoY revenue lift from reduced false positives.  

*Bar‑raiser cues:* ownership of end‑to‑end delivery, deep dive into latency vs cost trade‑offs, quantified impact on fraud loss reduction, and lessons learned (e.g., shifting to SageMaker Neo for edge inference after initial prototype).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
