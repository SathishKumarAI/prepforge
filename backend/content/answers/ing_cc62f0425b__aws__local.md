---
qid: ing_cc62f0425b__aws__local
question: How do you detect overfitting and underfitting in practice, and what do
  you do about each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 486
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:57-05:00'
sources: []
---

**Situation & Task**  
While building a fraud‑detection model for an e‑commerce platform (≈ 2 M customers/month), my team noticed the training accuracy hit 99% while live precision lagged at 70%. I needed to confirm over/under‑fitting and devise corrective actions.

**Action**  
1. **Diagnose** – split data into train, validation, test; plotted learning curves (sklearn).  
   *Over‑fit*: training loss ≈ 0.01 vs validation loss ≈ 0.15.  
   *Under‑fit*: if validation accuracy stayed below 80% while training was only 85%.  
2. **Remedy** –  
   *Over‑fitting*: added L2 regularization, dropped irrelevant features, and increased dropout (0.3). Trained on SageMaker with a `ml.m5.xlarge` instance; cost $0.25/h → total $45 for 30 h. Validation accuracy improved to **92%**.  
   *Under‑fitting*: added polynomial interaction terms and switched to XGBoost (`xgboost-scan`) on an `ml.c4.2xlarge`; training time 20 min, cost $0.10/h → total $12. Accuracy rose from 78% to **86%**.
3. **Validate & Deploy** – used SageMaker Model Monitor and CloudWatch metrics; set alarms if drift >5%. Deployed via SageMaker Endpoints with auto‑scaling (minimum 2, max 6).

**Result**  
Post‑deployment precision increased from 70% to **83%**, reducing false positives by 30 % and saving $1.2 M annually in fraud losses.

**Leadership Principles**  
- **Customer Obsession**: focused on user impact of model errors.  
- **Ownership & Dive Deep**: took full responsibility, dug into metrics, iterated quickly.  

**Bar‑raiser cues** – I quantified impact (precision %, cost), demonstrated deep technical understanding (learning curves, regularization), and learned from failure by automating drift detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
