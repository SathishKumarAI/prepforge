---
qid: ing_c835ec3a0b__aws__local
question: 'Explain: What that means is we''ll probably have — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 494
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:51-05:00'
sources: []
---

**Situation & Task**  
In a recent role I was asked to design the next‑generation navigation platform for our delivery fleet—essentially a *Google Maps* clone that could handle 1 M concurrent users in real time while keeping latency under 150 ms and cost below $0.05 per request.

**Action (Design & AWS Stack)**  
- **Data ingestion:** I built an **Amazon Kinesis Data Streams** pipeline to ingest vehicle telemetry at >10k records/second, feeding into **AWS Glue** for ETL and storing the cleaned data in **Amazon S3** (partitioned by region).  
- **Routing engine:** Leveraged **Amazon SageMaker** to train a graph‑based shortest‑path model that incorporates live traffic. The model was served via **Amazon API Gateway + Lambda@Edge** so each lookup is cached at edge locations, reducing round‑trip time.  
- **Map tiles & geospatial queries:** Used **Amazon DynamoDB Global Tables** for tile metadata (lat/long → tile ID) and **Amazon Aurora Serverless v2** for complex spatial joins; read replicas in three AZs ensured 99.999% availability.  
- **Real‑time updates:** Implemented a **WebSocket API** on API Gateway to push traffic alerts, backed by **Amazon SNS** topics that trigger Lambda functions updating the SageMaker model weights on the fly.

**Result**  
After deployment:  
- Latency dropped from 300 ms → **120 ms average** (30% improvement).  
- Cost per request fell from $0.12 → **$0.04** (a 66% reduction).  
- User churn decreased by 15% due to smoother routing experience.

**Reflection & Ownership**  
I owned the entire end‑to‑end pipeline, iterating on model accuracy and scaling strategies after a first launch that saw traffic spikes of 40 k/second. By diving deep into DynamoDB throttling logs I identified key hot keys and introduced sharding, preventing future outages—an example of **Ownership** and **Dive Deep**.  

This experience showcases my ability to combine customer obsession (faster routes), ownership (full stack responsibility), and a bias for action (rapid iteration) while delivering measurable business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
