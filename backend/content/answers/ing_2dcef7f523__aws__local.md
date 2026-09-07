---
qid: ing_2dcef7f523__aws__local
question: Isn't pass@ k meaningless since you could eventually guess the right answer
  through randomly sampling k times?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 358
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a fraud‑detection team building an auto‑scoring model for credit cards. The client asked if *pass@k*—the chance the correct label appears in the top‑k predictions—was useful, since “you could just keep guessing.”  

**Action**  
I mapped the business problem to a ranking task: we needed to surface the most risky transactions for manual review with minimal cost. I framed pass@k as a *cost‑sensitive* metric: each false negative costs $5 M in potential loss, while each manual check costs $10. Using this, I derived an optimal k (≈15) that minimized expected loss. I implemented the model on SageMaker Pipelines, used Amazon Athena for feature engineering, and stored predictions in DynamoDB for low‑latency lookup.  

**Result**  
After deploying with pass@k=0.87 at k=15, we reduced manual review volume by 60 % while maintaining a 99.8 % detection rate—saving the bank ~$12 M annually. The metric’s value became clear: it quantifies trade‑offs between recall and operational cost, not mere chance.

**Reflection**  
I learned that *pass@k* is meaningful when tied to business KPIs; otherwise, random guessing can look good statistically but fails in practice. This experience reinforced **Ownership** (owning the metric–business link) and **Dive Deep** (deriving the cost model).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
