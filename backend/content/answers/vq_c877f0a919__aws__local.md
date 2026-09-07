---
qid: vq_c877f0a919__aws__local
question: How do you know the Machine Learning Algorithm you should use?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 417
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:02-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech startup, we had to predict loan defaults from 3 M rows of customer data. The business asked for a model that delivered <5 % false‑positive rate while scaling to millions of predictions per day.

**Action – Dive Deep + Ownership**  
1. **Requirement Clarification** – I mapped the decision logic to a binary classification problem, defined precision/recall thresholds from risk‑management, and set up a data‑quality dashboard in AWS Glue & Athena.  
2. **Algorithm Exploration** – Built a reproducible pipeline on SageMaker:  
   * Baseline Logistic Regression (fast, interpretable).  
   * Gradient‑Boosted Trees (XGBoost) for higher non‑linearity.  
   * LightGBM with custom feature engineering to reduce training time.  
3. **Evaluation & Selection** – Ran cross‑validation on an EMR cluster; XGBoost achieved 0.94 AUC and 4.2 % false positives, beating the target while keeping inference latency <10 ms on SageMaker Endpoints.  
4. **Cost & Scalability** – Deployed with Auto Scaling endpoints (1–8 instances) and spot‑instance optimization, cutting inference cost by 35 %.  

**Result**  
The chosen model reduced default risk exposure by 12 % YoY and lowered operating costs by $250K annually. I documented the trade‑offs in a post‑mortem, highlighting that early feature‑engineering saved 2 h of training time per iteration—an insight later used to improve our data‑science onboarding process.

**Leadership Principles Reflected**  
- **Customer Obsession** – Meeting risk‑management’s precision needs.  
- **Dive Deep & Ownership** – End‑to‑end pipeline, cost optimization, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
