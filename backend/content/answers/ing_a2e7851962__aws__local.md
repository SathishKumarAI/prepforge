---
qid: ing_a2e7851962__aws__local
question: 'Explain: Heuristics — What is concept drift in ML, and how to detect and
  address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 435
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:34-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles: Ownership & Customer Obsession)**  
At my last role I led a fraud‑prediction pipeline that served 200 k active users daily. After 3 months of stable performance, the model’s precision dropped from **92 % to 78 %**, indicating concept drift – the underlying data distribution changed because merchants updated their pricing strategies.

**Action (Dive Deep & Bias for Action)**  
1. **Detection** – I instrumented SageMaker Ground Truth with a *drift‑score* metric, comparing incoming feature distributions against the training set using KS tests (AWS CloudWatch custom metrics).  
2. **Alerting** – A Lambda function triggered when drift > 0.15 sent an SNS notification to our ops channel.  
3. **Remediation** – I automated a retraining pipeline in SageMaker Pipelines: new data stored in S3 → preprocessing via Glue, training on Spot instances (cost ↓ 30 %), and model deployment through SageMaker Endpoint with A/B testing.  
4. **Post‑deployment monitoring** – Continuous evaluation using CloudWatch dashboards; once the new model hit 90 % precision, I archived the old endpoint to keep costs low.

**Result**  
Re‑training within 48 h restored accuracy to **91 %**, preventing a projected $1.2M loss in fraud revenue over the next quarter. The automated drift pipeline reduced manual monitoring time by **70 %** and cut retraining cost from $4k to $2.8k per cycle.

*Bar‑raiser cues:* clear ownership of data quality, deep dive into statistical tests, quantified ROI, and learning loop (automating detection & response).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
