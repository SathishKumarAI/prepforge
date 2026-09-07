---
qid: ing_a4f086e07f__aws__local
question: What is concept drift? — What is concept drift in ML, and how to detect
  and address it
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 496
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:11-05:00'
sources: []
---

**Concept Drift – Quick‑Answer**

Concept drift is when the statistical relationship between input features and target labels changes over time (e.g., a spam filter that learns new patterns). If unaddressed, model accuracy falls.

---

## Situation & Task  
I led an email‑spam product for 8 M users. After deploying a SageMaker pipeline in Q1, we noticed the F1 score drop from **0.92 to 0.78** within two weeks (Customer Obsession).

### Action – Detect  
*Set up continuous monitoring:*  
- **Amazon CloudWatch metrics** on per‑batch precision/recall.  
- **AWS Lambda** that triggers a drift test every hour using *Population Stability Index (PSI)* and *KS statistic* against the baseline distribution.  
- If PSI > 0.2, we log to an SNS topic.

### Action – Address  
1. **Retrain on recent data:**  
   - Use **SageMaker Pipelines** with a new training job that ingests the last 30‑day dataset (10 % of historical).  
2. **Ensemble strategy:**  
   - Deploy the new model behind an **AWS Lambda@Edge** function that weights predictions from old and new models based on drift severity.  
3. **Automated rollback:**  
   - If validation AUC < 0.85, route traffic back to the previous version via **SageMaker Hosting Services**.

### Result  
- Within 48 h post‑deployment, F1 returned to **0.91**, and user complaints dropped by **35%** in a week.  
- The monitoring pipeline costs <$50/month versus manual QA cost of $2k/month.

---

## Leadership Principles Highlighted  
- **Ownership & Bias for Action:** Built an end‑to‑end drift solution.  
- **Dive Deep:** Chose PSI/KS metrics, tuned Lambda triggers, and balanced ensemble weights.  

**Bar‑raiser Note:** Look for ownership (we built the whole system), depth (specific metrics, AWS services), quantified impact (35% complaint drop), and learning from failure (initial drop led to automated retraining).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
