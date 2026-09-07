---
qid: ing_2749eefefc__aws__local
question: 'Explain: Step 3: Analyze Each Option — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 538
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:38-05:00'
sources: []
---

**Step 3 – Analyze Each Option (Answer Frameworks)**  

> *Leadership Principles:* **Customer Obsession**, **Dive Deep**

---

### Situation  
In a recent data‑science sprint I was tasked with choosing the best model for predicting churn in our subscription service (≈ 1.2 M active users). Multiple algorithms were proposed: Logistic Regression, XGBoost, and a shallow neural net.

### Task  
I needed to evaluate each option on *performance*, *interpretability*, and *operational cost* so that we could ship a reliable predictor within two weeks while keeping infra spend < $5k/month.

### Action  
1. **Define Success Metrics** – Accuracy ≥ 0.85, F1 ≥ 0.80, inference latency ≤ 10 ms, and explainability score (SHAP) ≥ 0.7.  
2. **Create a Decision Matrix** – Weight metrics by business impact: 40% accuracy, 20% latency, 15% cost, 25% interpretability.  
3. **Run Controlled Experiments** – Use AWS SageMaker Pipelines to train each model on the same 70/30 split, capture metrics in CloudWatch, and store results in a DynamoDB table for audit.  
4. **Cost‑Benefit Analysis** – Estimate per‑inference cost (SageMaker Real-Time endpoint vs. Lambda + S3 batch).  
5. **Risk & Mitigation** – Identify model drift risk; plan for monthly re‑training with automated retraining jobs in Step Functions.

### Result  
The matrix yielded a **score of 8.7/10 for XGBoost**, outperforming others by 2% in accuracy while staying within latency limits. Deployment cost was $3,200/month, below target. Post‑launch monitoring showed churn reduction of **4.5 %** over three months (≈ 54,000 fewer cancellations), translating to ~$1.8M annual revenue lift.

---

**Bar‑raiser notes:**  
- *Ownership:* I set clear metrics and automated the evaluation pipeline.  
- *Dive Deep:* Used quantitative scoring and cost modeling.  
- *Quantified Impact:* 4.5 % churn reduction, $1.8M upside.  
- *Learning from Failure:* Earlier iterations over‑fitted; I introduced cross‑validation to avoid it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
