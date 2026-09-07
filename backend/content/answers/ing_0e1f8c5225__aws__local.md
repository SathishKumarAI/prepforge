---
qid: ing_0e1f8c5225__aws__local
question: How do you keep an eval set fresh over time, and how do you avoid overfitting
  to it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 458
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:41-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a machine‑learning team that deployed an NLP model for real‑time intent classification in a customer‑support chatbot. The evaluation set kept drifting as new user intents appeared, and the risk of overfitting to the test split grew each iteration.

**Action**  
1. **Dynamic Data Pipeline** – Built an automated pipeline on *AWS Glue* + *S3* that ingests new labeled utterances daily, tags them with a “generation” timestamp, and partitions by intent.  
2. **Rolling Evaluation Window** – Created a *Lambda* function that, every week, selects the last 30 days of data for validation while reserving the most recent 7 days as an unseen hold‑out set. This keeps the eval set fresh yet representative.  
3. **Cross‑Validation & Regularization** – Used *scikit‑learn’s* `StratifiedKFold` on the rolling window and applied L2 regularization tuned via *AWS SageMaker Experiments*, preventing the model from memorizing recent samples.  
4. **Monitor Drift** – Deployed a CloudWatch dashboard that tracks accuracy, precision‑recall per intent, and drift metrics (Population Stability Index). When drift exceeded 0.15, an automated retraining cycle is triggered.

**Result**  
- Maintained test‑set F1 > 0.92 over 12 months while real‑world accuracy only dropped 2%.  
- Reduced overfitting incidents by 80% (from 5 to 1 failure per quarter).  
- Cost of the pipeline stayed under $500/month, a 30% saving vs. ad‑hoc manual labeling.

**Reflection (Bar‑raiser focus)**  
*Ownership*: I championed end‑to‑end automation.  
*Dive Deep*: Quantified drift thresholds and tuned regularization.  
*Learn from Failure*: After an early spike in false positives, we traced it to a mislabeled intent; the pipeline now flags label anomalies automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
