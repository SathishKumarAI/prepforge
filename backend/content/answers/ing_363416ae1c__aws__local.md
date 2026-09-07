---
qid: ing_363416ae1c__aws__local
question: 'Explain: Find a Way — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 471
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:14-05:00'
sources: []
---

**Situation / Task**  
I was hired as an ML Engineer at a mid‑size fintech to build a real‑time fraud detection model that could handle 10 M transactions per day and score each in <100 ms. The goal was to reduce false positives by 30% while keeping latency below SLA.

**Action (Dive Deep + Ownership)**  
1. **Data Pipeline** – Built an event stream with **Amazon Kinesis Data Streams** feeding into **AWS Lambda** for feature extraction, then persisted to **Amazon DynamoDB** for low‑latency lookups.  
2. **Model Training** – Used **SageMaker Autopilot** to iterate 12 pipelines; selected XGBoost due to interpretability. Trained on a 5 TB historical set (10 % held out).  
3. **Serving** – Deployed the model as a SageMaker endpoint behind an **Application Load Balancer**, auto‑scaling based on CPU utilization, guaranteeing <100 ms latency.  
4. **Monitoring & Feedback Loop** – Integrated **Amazon CloudWatch Metrics + SageMaker Model Monitor** to flag drift; automated retraining every 48 h.

**Result (Deliver Results)**  
- False positives dropped from 12% to 8.4% (+30%) within 90 days.  
- Latency consistently <95 ms, meeting SLA.  
- Operational cost reduced by 25% vs. on‑prem solution due to serverless scaling and pay‑as‑you‑go.

**Bar‑raiser takeaways**  
- **Ownership**: I drove the end‑to‑end pipeline without hand‑offs.  
- **Dive Deep**: Chose Kinesis + Lambda for cost/latency trade‑off after profiling alternatives.  
- **Quantified Impact**: 30% FP reduction, 25% cost saving.  
- **Learning from Failure**: Early prototype hit >200 ms latency; we switched to DynamoDB caching, learning the importance of read‑throughput vs. write costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
