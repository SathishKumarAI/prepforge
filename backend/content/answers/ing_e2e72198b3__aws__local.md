---
qid: ing_e2e72198b3__aws__local
question: 'Explain: Judge Calibration — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 487
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:52:14-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

**Situation**  
At my previous role we launched a conversational‑AI platform that needed to rank candidate LLMs for downstream products (chatbots, recommendation engines). The quality metric was *judge calibration* – how well human judges’ scores correlated with each model’s performance on unseen user queries.

**Task**  
Design an automated evaluation pipeline that measures judge calibration, identifies outliers, and feeds back into the training loop without manual intervention.

**Action**  
1. **Requirements & Design**  
   - Collect 50k real‑world query–response pairs per model.  
   - Store them in **Amazon S3** (raw data) + **Amazon DynamoDB** (metadata).  
   - Run a distributed scoring job on **AWS Batch** with spot instances, invoking the LLM via **Amazon Bedrock** or **SageMaker Endpoint**.  
   - Compute human‑judge scores through an internal web UI integrated with **AppSync** for real‑time submission.  

2. **Calibration Metric**  
   - Use *Spearman rank correlation* between judge scores and model confidence (logits).  
   - Implement a Bayesian calibration curve in **AWS Lambda** that aggregates results per model weekly.

3. **Scalability & Cost**  
   - Spot instances reduce compute cost by ~70%.  
   - Serverless components (Lambda, AppSync) auto‑scale to peak judge traffic (~10k concurrent users).  
   - Store only aggregated statistics in DynamoDB; raw logs rotated out after 30 days.

4. **Trade‑offs**  
   - Accuracy vs latency: we batch scoring to amortize Bedrock calls.  
   - Privacy: data anonymized before storage, encryption at rest (KMS).

5. **Result**  
   - Calibration improved from 0.62 to 0.78 Spearman over three iterations—reducing downstream errors by 15% and cutting manual review time by 40%.  

**Bar‑raiser notes**  
- Demonstrated *ownership* of the end‑to‑end pipeline.  
- Deep dive into metrics, trade‑offs, and AWS services.  
- Quantified impact with real numbers.  
- Learned from early failures (over‑provisioning compute) to optimize cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
