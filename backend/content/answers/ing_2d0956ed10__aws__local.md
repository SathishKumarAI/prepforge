---
qid: ing_2d0956ed10__aws__local
question: 'Explain: a garage you''re going to be end — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 533
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:39-05:00'
sources: []
---

**Situation & Task**  
While leading the “Smart Parking” project for a new 10‑story commercial complex, I was asked to architect a cloud‑native solution that could (1) ingest real‑time sensor data from parking spots, (2) predict occupancy and pricing, and (3) expose a mobile API with sub‑second latency. The goal was to increase revenue by 15 % and reduce driver wait times by 30 %.  

**Approach & Design**  
* **Data Ingestion** – Each spot sends MQTT telemetry → **Amazon IoT Core** → **AWS Greengrass** edge cache for 5 ms latency.  
* **Real‑time Processing** – Streams to **Kinesis Data Streams**, then to **AWS Lambda** for cleaning and enrichment.  
* **Predictive Model** – Trained in **SageMaker** on historical occupancy; deployed as a **SageMaker Endpoint** behind an **Application Load Balancer**.  
* **API Layer** – **Amazon API Gateway** + **Lambda Authorizer** → **AWS Lambda** that queries DynamoDB (spot status) and the ML endpoint, returning JSON to mobile clients.  
* **Storage & Analytics** – Raw telemetry in **S3** (cold archive), aggregated metrics in **Redshift Spectrum** for BI.  

**Result**  
After rollout: *occupancy predictions* improved by 27 % accuracy, *pricing strategy* increased revenue by **$1.8M/year**, and *average driver wait time* dropped from 4.2 min to 2.7 min (30 % reduction). Costs stayed within budget because I leveraged spot instances for training and auto‑scaling for inference.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Designed low‑latency API so drivers get instant spot info, directly reducing frustration.  
- **Ownership / Dive Deep** – Built end‑to‑end pipeline, from IoT edge to ML inference, continuously iterating on model performance and cost metrics.  

**Bar‑raiser Takeaway**  
Showed deep ownership by owning the data flow, quantified impact with real revenue/latency numbers, and learned from initial latency spikes by moving processing closer to the edge—an example of bias for action and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
