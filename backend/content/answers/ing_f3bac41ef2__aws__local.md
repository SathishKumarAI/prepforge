---
qid: ing_f3bac41ef2__aws__local
question: 'Explain: Requirements: — Parking Lot System Design | Notion'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 560
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:32-05:00'
sources: []
---

**Situation & Task (S)**  
I was hired by a startup that wanted to build an AI‑driven parking‑lot management platform. The goal: reduce idle space by 30 % and cut the average search time for drivers from 4 min to under 1 min in a city‑wide deployment.

**Approach (A)**  
I scoped three core requirements:  
1️⃣ *Real‑time occupancy detection* – cameras + edge inference.  
2️⃣ *Predictive space allocation* – ML model that forecasts demand by hour, day and weather.  
3️⃣ *Driver routing* – a low‑latency API that returns the nearest free spot.

I proposed an AWS‑centric architecture:  

| Layer | Service | Why |
|-------|---------|-----|
| Ingestion | **Amazon Kinesis Video Streams** + **AWS Greengrass** | Stream video to edge nodes for on‑device inference (YOLOv5). |
| Edge Inference | **AWS IoT Greengrass** with pre‑trained model | Low latency, offline capability. |
| Data Lake | **S3 Glacier Deep Archive** + **S3 Standard-IA** | Cost‑effective storage of raw footage for retraining. |
| Feature Store | **Amazon SageMaker Feature Store** | Centralized, versioned features (spot count, weather, time). |
| Model Training | **SageMaker Pipelines** | CI/CD for ML models; hyperparameter tuning with Spot instances to cut training cost 40 %. |
| Prediction API | **AWS Lambda + Amazon API Gateway** | Serverless, auto‑scales to millions of requests; cold start <100 ms. |
| Real‑time Dashboard | **Amazon QuickSight** | Operational metrics (occupancy %, search time). |

**Result (R)**  
After 6 months:  
- Occupancy increased from 68 % to 91 % (30 % lift).  
- Average driver wait dropped from 4.2 min to 0.8 min (87 % reduction).  
- Cost per parking spot per month fell by 25 % thanks to Spot‑based training and Greengrass edge inference.

**Reflection & Learning**  
I owned the full lifecycle: from data capture to model serving. The biggest failure was an over‑reliance on a single weather API; we switched to a multi‑source fallback, boosting prediction robustness by 15 %. This experience sharpened my *Dive Deep* and *Ownership* mindset—critical for any AWS role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
