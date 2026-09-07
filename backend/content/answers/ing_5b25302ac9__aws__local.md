---
qid: ing_5b25302ac9__aws__local
question: 'Explain: What is data leakage? Give me three subtle examples you''ve seen
  or could imagine, and how you''d detect them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 382
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:32-05:00'
sources: []
---

**Leadership Principles:** *Ownership*, *Dive Deep*  
**Situation (S)** – While building a churn‑prediction model for our subscription service, I noticed the model was scoring 92 % accuracy on the test set—much higher than the ~70 % we saw in production.  

**Task (T)** – Investigate why the model performed so well and ensure it generalises to unseen customers.  

**Action (A)** –  
1. **Feature‑time leakage:** I discovered a “last‑payment‑date” column that was derived after the churn event. Removing this feature dropped accuracy to 73 %.  
2. **Target leakage via external data:** A “marketing‑campaign‑status” flag, populated only for customers who were later contacted, inadvertently told the model about future churn. Filtering out this flag reduced performance to 71 %.  
3. **Data‑split leakage across users:** In our pipeline we accidentally merged user IDs from the same household into both training and validation sets. I re‑shuffled by household ID, which lowered accuracy to 69 %—the true signal.  

**Result (R)** – The corrected model achieved a stable 68 % AUC in production, improving churn retention by **12 % YoY** over the previous baseline. I documented these leakage patterns in our ML Ops playbook and added automated checks in SageMaker Pipelines to flag such columns before training.  

**Bar‑raiser takeaway:** Show ownership of data integrity, dive deep into feature engineering, quantify impact on business metrics, and turn a failure (over‑optimistic accuracy) into a learning loop that hardens the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
