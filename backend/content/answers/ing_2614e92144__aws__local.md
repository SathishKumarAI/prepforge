---
qid: ing_2614e92144__aws__local
question: 'Explain: We don''t really care what are... what — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 457
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:24-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build an on‑device recommendation engine for the next generation of Amazon Go stores—predicting which items a shopper is likely to pick up next, based solely on their current trajectory and past purchases. The goal was to improve basket size by 8 % while keeping latency < 50 ms and cost per transaction below $0.01.

**Action**  
1. **Data Pipeline** – Collected click‑stream + RFID data in Kinesis Data Streams, persisted to DynamoDB (hot keys) for low‑latency lookups, and archived to S3 for batch training.  
2. **Model Training** – Used SageMaker Pipelines with XGBoost on 1 M samples; feature engineering included temporal proximity, aisle adjacency, and cross‑product co‑occurrence.  
3. **Inference** – Deployed the model as a Lambda@Edge function triggered by API Gateway at the edge, caching top‑5 predictions in CloudFront Edge Cache to keep latency < 30 ms.  
4. **Feedback Loop** – Logged prediction accuracy back to Kinesis for nightly retraining; achieved 0.62 AUC, improving basket size from $45 to $48.60 (8.7 % lift).

**Result**  
- **Customer Obsession:** Higher basket value → more satisfied shoppers.  
- **Ownership & Dive Deep:** Hand‑tuned feature set, monitored drift, and iterated until cost/latency targets met.  
- **Quantified Impact:** 8.7 % revenue lift; $0.005 per transaction inference cost.  

**Learning from Failure** – Initial model overfitted to aisle patterns, causing cold‑start issues. Introduced regularization and added a “random walk” baseline, which stabilized early predictions and reduced variance by 15 %. This iteration exemplifies the Amazon bar‑raiser’s focus on ownership, deep technical rigor, measurable impact, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
