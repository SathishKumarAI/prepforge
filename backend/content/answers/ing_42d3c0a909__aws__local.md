---
qid: ing_42d3c0a909__aws__local
question: Explain the bias-variance tradeoff. How do you tell which one is hurting
  your model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 361
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:05-05:00'
sources: []
---

**Bias‑Variance Trade‑off (Amazon Lens)**  
*Leadership Principles: Customer Obsession & Dive Deep.*

**Situation:** While building a fraud‑detection model for the payments team, I noticed predictions were either too conservative (missing many frauds) or too aggressive (flagging legitimate transactions).  

**Task:** Identify whether high bias or high variance was hurting accuracy and adjust the pipeline.  

**Action:**  
1. **Collect diagnostics** – ran cross‑validation on a 5‑fold split, plotted training vs validation error curves.  
2. **Quantify bias/variance** – calculated *bias* as the squared difference between mean predictions and true labels; *variance* as the variance of predictions across folds.  
3. **AWS tooling:** used SageMaker Experiments to log metrics per training job, and Athena to aggregate errors by feature group.  
4. **Adjust model complexity** – when bias dominated (high error on both train & test), I increased tree depth in XGBoost; when variance dominated (train low, test high), I added L2 regularization and reduced depth.  

**Result:** After tuning, validation F1‑score rose from 0.72 to **0.86**, reducing false positives by 40 % and saving the company ~$3M annually in unnecessary chargebacks.  

*Bar‑raiser note:* Demonstrated ownership (direct impact on revenue), deep dive into metrics, and clear learning loop—each iteration informed the next model tweak.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
