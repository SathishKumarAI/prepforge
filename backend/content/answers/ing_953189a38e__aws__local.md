---
qid: ing_953189a38e__aws__local
question: 'Explain: illegal with those fixed it''s now passing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 428
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:21-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A client’s fraud‑detection ML pipeline was flagged as “illegal” by the compliance team because it used a hard‑coded list of banned transaction patterns that had been updated after model training. The pipeline stopped serving new predictions, hurting revenue.

*Task:* Quickly make the model compliant while preserving accuracy and scaling to 10M requests/day.

*Action:*  
1. **Dive Deep** – Re‑examined the data flow: raw logs → feature extractor → inference → alert. Identified that the “illegal” flag was hard‑coded in the Lambda post‑processing step, not part of the model’s logic.  
2. **Design Change** – Moved the rule set to a DynamoDB table (hot‑reloading) and replaced the Lambda with an AWS Step Function that fetches the latest rules at runtime.  
3. **AWS Services** – SageMaker Endpoint for inference; Step Functions orchestrate rule lookup; CloudWatch Alarms trigger on rule changes.  
4. **Scalability & Cost** – The Step Function adds <2 ms latency and is serverless, keeping cost <$0.02 per 1K requests versus the previous Lambda’s $0.05.  
5. **Bias for Action** – Deployed in a blue/green fashion; ran A/B test with 20% traffic to validate no drop in precision (kept 97.4 % TP vs 98.1 % baseline).  

*Result:* Compliance was restored within 3 hours, revenue impact reduced from $120K loss per day to < $5K, and the system now auto‑updates rules without redeploying code. Learned that separating business logic (rules) from ML inference is critical for regulatory agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
