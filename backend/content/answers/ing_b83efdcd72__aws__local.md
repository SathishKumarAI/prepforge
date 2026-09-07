---
qid: ing_b83efdcd72__aws__local
question: 'Explain: So all we''ll say is traffic, weather — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 380
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:46-05:00'
sources: []
---

**Situation / Task**  
When I joined the Maps team at Amazon, we were asked to build a real‑time traffic & weather prediction engine that could surface up‑to‑minute ETA estimates for millions of users worldwide. The goal was **“Customer Obsession” + “Deliver Results.”**

**Action**  
I scoped the data pipeline: ingest GPS traces (Kafka → Kinesis Data Streams), public METAR/NOAA feeds, and third‑party traffic APIs. For modeling I chose an online gradient‑boosted tree (XGBoost) trained nightly on a 10 TB feature store (S3 + Athena). The inference service ran on **AWS Lambda** behind an Application Load Balancer with auto‑scaling based on request latency.  
To guarantee availability we replicated the model across three AZs and used **Amazon SageMaker Endpoint** for batch predictions during off‑peak hours. Cost was kept low by leveraging spot instances for training and using **Lambda’s pay‑per‑execution** pricing.

**Result**  
Within 4 months, ETA accuracy improved from 12 % to 3 % error (mean absolute percentage error). Monthly active users grew 27 %, and we reduced server costs by 18 % compared with the legacy system.  

**Reflection**  
I practiced “Dive Deep” by building a lightweight telemetry dashboard in CloudWatch that surfaced model drift; when weather patterns changed, we retrained automatically, preventing a potential 5 % accuracy drop. This experience reinforced that true ownership means iterating on both code and data pipelines until the customer feels the service is flawless.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
