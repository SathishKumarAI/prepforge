---
qid: ing_14c05ac9ea__aws__local
question: 'Explain: How this data would help us we''ll — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 404
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:58-05:00'
sources: []
---

**Situation & Task**  
When I joined a start‑up building a “traffic‑aware routing” feature, we had raw GPS traces from 3 M daily users but no model to predict congestion in real time. The leadership goal was to cut average delivery time by 15 % for logistics partners.

**Action – Design & AWS Stack**  
1. **Data Ingestion** – *Kinesis Data Streams* → *Glue* for schema‑agnostic ETL, storing raw logs in *S3* (object lifecycle to Glacier).  
2. **Feature Store** – *Amazon SageMaker Feature Store* holds per‑segment speed, density, and weather features; updated every 5 min via Glue jobs.  
3. **Model Training** – *SageMaker Training* on a 24‑hour window of historical data, using XGBoost for fast inference (latency <10 ms). We employed *Hyperparameter Tuning* with Bayesian optimization to reduce MAE from 12 km/h to 4 km/h.  
4. **Serving** – *SageMaker Endpoint* behind an Application Load Balancer; autoscaling on CPU utilization.  
5. **Monitoring** – *CloudWatch Metrics & SageMaker Model Monitor* track drift (speed vs. predicted) and trigger retraining every 12 h.

**Result**  
Within three months, the new routing algorithm cut average delivery time by **17 %**, exceeding the target. Cost per inference dropped to <$0.0001 with 99.9 % availability.  

**Reflection & Ownership**  
I dove deep into data quality (root‑cause analysis of outliers), iterated on feature engineering, and championed cross‑team adoption—demonstrating *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
