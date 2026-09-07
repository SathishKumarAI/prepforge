---
qid: ing_eecac1cf3b__aws__local
question: 'Explain: Here''s an example. Let''s call the abs — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 424
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:39-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a proof‑of‑concept to build an automated *Python Full Course* recommendation engine for a MOOC platform. The goal was to increase course enrollment by 15 % within three months.

**Action (Technical)**  
1. **Requirements & Design** – We needed real‑time recommendations based on user skill level, past completions and content popularity.  
2. **Architecture** –  
   * **Data ingestion**: Kinesis Data Streams to capture click events; Lambda transforms into JSON → S3 landing zone.  
   * **Feature store**: DynamoDB for fast per‑user state + SageMaker Feature Store for model inputs.  
   * **Model training**: SageMaker Pipelines with an XGBoost estimator (≈ 5 GB dataset, 10 min train).  
   * **Serving**: SageMaker Endpoint behind API Gateway; autoscaling based on CPU usage.  
3. **Scalability & Cost** – Spot instances for training reduced cost by 40 %. Endpoints in a single AZ with cross‑region read replicas (DynamoDB Global Tables) ensured < 200 ms latency.  
4. **Monitoring** – CloudWatch metrics + SageMaker Model Monitor flagged drift; automated retraining triggered weekly.

**Result**  
Within two months, enrollment for the recommended courses rose 18 %, surpassing the target. The end‑to‑end pipeline processed ~1M events/day with < $500/month in AWS spend— a 35 % cost saving over our legacy solution.

**Reflection (Bar‑raiser focus)**  
I owned the project from concept to production, diving deep into latency and cost trade‑offs. After an initial spike in cold‑start times, I learned to adjust instance types and tweak warm‑up logic, illustrating continuous learning and bias for action— core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
