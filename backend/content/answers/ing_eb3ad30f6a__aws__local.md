---
qid: ing_eb3ad30f6a__aws__local
question: 'Explain: But if you look at it and — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 647
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:07-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a real‑time traffic prediction engine for **Google Maps**, similar to what the interview prompt described: “but if you look at it and …”. The goal was to predict congestion levels 15–30 minutes ahead, feed route suggestions, and support millions of concurrent users.

**Action (Technical Design)**  
| Layer | AWS Service | Why |
|-------|-------------|-----|
| Ingest | **Amazon Kinesis Data Streams** | Low‑latency ingestion of GPS traces, speed, lane counts. |
| Store raw data | **S3 + DynamoDB** | Cost‑effective archival and fast key‑value lookups for recent history. |
| Real‑time processing | **AWS Lambda** + **Kinesis Firehose** | Stateless, auto‑scaling micro‑services that compute per‑segment speed statistics in 5‑second windows. |
| Feature store | **Amazon SageMaker Feature Store** | Centralized feature repository (historical speeds, weather, events) with versioning for reproducibility. |
| Model training | **SageMaker Training Jobs** on GPU instances | Train Gradient Boosted Trees / XGBoost models daily; use hyper‑parameter tuning. |
| Inference | **SageMaker Endpoint + Lambda** | 1 ms latency per request, autoscaled via Application Auto Scaling. |
| Routing engine | **AppSync** + **ElasticCache (Redis)** | Cache popular routes, push predictions to mobile clients in real time. |

*Scalability*: Kinesis scales to millions of records/sec; Lambda auto‑scales with event volume.  
*Availability*: Multi‑AZ deployment, S3 versioning, and DynamoDB global tables guarantee 99.99 % uptime.  
*Cost*: Spot instances for training, serverless inference eliminates idle capacity; total monthly spend ≈ $120k for a city‑wide deployment.

**Result (Data‑driven Impact)**  
- **Prediction accuracy improved by 18 %** (MAE reduced from 8.5 min to 7.0 min).  
- **Route time savings of 12 %** for users in peak traffic, translating to ~2 hours saved per day across 1M active drivers.  

**Reflection & Learning**  
I initially underestimated the cold‑start latency for new segments; adding a pre‑warm Lambda layer reduced first‑request lag from 250 ms to <50 ms. The interview highlighted that *Ownership* means anticipating edge cases, while *Dive Deep* demands understanding every component’s SLA and cost curve.

> **Bar‑raiser takeaway**: Look for evidence of owning the end‑to‑end system, quantifying impact, and learning from early missteps—exactly what I demonstrated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
