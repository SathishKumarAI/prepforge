---
qid: ing_d643811924__aws__local
question: 'Explain: Capacity Estimation — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 462
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:42-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a capacity‑planning tool for an on‑prem ML platform that would predict GPU hours needed for the next fiscal quarter so we could lock in spot pricing and avoid over‑provisioning.

**Action (Design)**  
1. **Data ingestion** – Ingest historic job logs into *Amazon S3* and stream real‑time metrics to *Kinesis Data Streams*.  
2. **Feature store** – Persist features (job duration, GPU type, input size) in *DynamoDB* for fast lookup.  
3. **Model training** – Use *SageMaker* with a Gradient Boosting model; schedule nightly retraining via *CloudWatch Events*.  
4. **Inference API** – Deploy the model behind an *Application Load Balancer* and *Lambda@Edge*, auto‑scaling on CPU usage.  
5. **Cost & availability** – Run inference in a single AZ, but fallback to a secondary AZ if the primary fails (Health Checks). Spot instances are used for training jobs; we add a 10 % over‑provision buffer.

**Result**  
- Prediction accuracy ↑ 92 % (RMSE < 4 h) vs. prior heuristic (RMSE ≈ 12 h).  
- Monthly GPU cost ↓ 18 % by locking spot bids early.  
- Capacity forecasts now feed into the quarterly budget, eliminating last‑minute over‑allocations.

**Leadership Principles**  
*Customer Obsession*: Delivered a tool that directly reduces user‑visible latency and cost.  
*Ownership & Dive Deep*: Built end‑to‑end data pipeline, tuned hyperparameters, and monitored drift.  

**Bar‑raiser takeaways**  
- Quantified impact with real numbers (cost savings, accuracy).  
- Showed depth by detailing each AWS component and trade‑offs.  
- Learned from early false starts: initial model overfit; switched to regularization after analyzing feature importance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
