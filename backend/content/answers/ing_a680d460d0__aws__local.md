---
qid: ing_a680d460d0__aws__local
question: 'Explain: Frontier AI Safety Policies — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 382
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:24-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a cross‑functional ML team at my previous company, we had to build an internal “Frontier AI Safety” policy engine—called **METR** (Model Evaluation and Trustworthiness Registry)—to audit every new model before deployment. The goal was to reduce post‑production incidents by 90% while keeping iteration speed under two weeks.

**Action (A)**  
I took full ownership, mapped the workflow to a serverless pipeline:  
* **AWS SageMaker** for automated bias & drift tests,  
* **Amazon EventBridge** to trigger audits on model push,  
* **Step Functions** orchestrating data prep → test → score → approval.  
Metrics were stored in **DynamoDB**, visualized with **QuickSight** for real‑time dashboards. I instituted a “policy as code” repo (GitHub Actions + AWS CodePipeline) so every change ran unit tests and a sandbox inference before merging.

**Result (R)**  
After three months, the policy engine cut model‑related incidents from 12/month to 1/month—a **92% reduction**—and lowered mean time to resolution by 3.5×. Cost stayed below \$2k/month due to serverless scaling, and we achieved 99.9 % availability.

**Learning & Bar‑raiser cues**  
I dove deep into the failure mode of drift detection (over‑fitting vs. under‑fit) and adjusted thresholds after a false‑negative spike. The bar‑raiser highlighted my ownership of metrics, depth in selecting AWS services for elasticity, and learning loop that turned an initial 15% false‑positive rate to <2%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
