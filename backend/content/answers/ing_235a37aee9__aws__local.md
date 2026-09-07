---
qid: ing_235a37aee9__aws__local
question: 'Explain: Tips for Example Selection — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:26-05:00'
sources: []
---

**Situation / Task**  
When I joined a data‑science team at an e‑commerce start‑up, we had to build a recommendation engine that ran in real time on our micro‑service architecture. The model required “prompt engineering” – selecting the right examples (user–item pairs) for training so that the system would understand context and avoid bias.

**Action**  
1. **Ownership & Dive Deep** – I mapped the entire data pipeline: ingestion → feature store → model training on SageMaker → inference via Lambda behind API Gateway.  
2. **Customer Obsession** – I ran a *data‑quality audit*: 12 M user interactions, 0.8 % of which were “cold starts.” I built an automated sampling script that:
   - Prioritised edge cases (rare categories, new users) using stratified bootstrapping.  
   - Normalised feature distributions with AWS Glue jobs and stored them in Athena for fast ad‑hoc queries.  
3. **Bias for Action** – Implemented a feedback loop: after each training cycle, the model’s predictions were logged to Kinesis Data Firehose → S3 → Redshift; I used Redshift Spectrum to compute per‑segment precision@k.  
4. **Invent & Simplify** – Replaced manual CSV uploads with an EventBridge rule that triggered a Lambda function to pull new logs from CloudWatch, ensuring zero‑latency updates.

**Result**  
- Reduced cold‑start prediction error by **38 %** (from 0.65 to 0.41).  
- Increased click‑through rate on recommended items by **12 %**, translating to an additional $1.2M in monthly revenue.  
- Cut training data size by **45 %** while maintaining performance, saving ~$3k/month in SageMaker compute.

**Bar‑raiser takeaways**  
- Demonstrated *ownership* of the end‑to‑end ML workflow.  
- Showed *deep technical dive* into sampling strategy and data‑quality metrics.  
- Quantified impact on key business KPIs.  
- Learned from an initial failure (over‑sampling popular items) by iteratively refining the stratification logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
