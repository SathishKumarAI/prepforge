---
qid: ing_d7b1ed6453__aws__local
question: 'Explain: it was like one example was just — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 518
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:03-05:00'
sources: []
---

**Scenario (S)**  
At a prior gig I led the redesign of a city‑wide parking‑management platform that was experiencing 35 % downtime during peak hours and user complaints about “no real‑time availability.” The business goal: cut outages to <0.5 % and boost usage by 20 % in six months.

**Task (T)**  
Build an end‑to‑end system that ingests sensor data, predicts occupancy, and serves a low‑latency API for drivers while scaling elastically across regions.

**Action (A)**  

1. **Data ingestion & storage** – Used *Amazon Kinesis Data Streams* to capture 10 k events/second from IoT gateways, buffering into *S3* via *Kinesis Firehose* for durable logs.  
2. **Real‑time processing** – Deployed *AWS Lambda* (Python) triggered by the stream; each function runs a lightweight XGBoost model hosted in *Amazon SageMaker Endpoint*, returning occupancy probabilities within 120 ms.  
3. **API layer** – Exposed predictions through *Amazon API Gateway* + *Lambda@Edge* for sub‑50 ms response, backed by *DynamoDB* (eventual consistency) to cache recent results.  
4. **Observability & scaling** – Instrumented with *CloudWatch Metrics* and *X-Ray*. Auto‑scales Lambda concurrency based on request rate; DynamoDB autoscaling protects against traffic spikes.  

**Result (R)**  
- Uptime rose from 65 % to 99.5 % in three months (≈30× improvement).  
- User sessions grew by 22 %, with average wait time for parking slots dropping from 4 min to <45 s.  
- Cost remained within the original budget, thanks to serverless pay‑as‑you‑go and DynamoDB autoscaling.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a smoother driver experience quantified by reduced wait times.  
- **Ownership & Dive Deep**: Took end‑to‑end ownership, dissecting bottlenecks from sensor latency to API throttling, iterating until the SLA was met.  

Bar‑raisers look for clear ownership, data‑driven impact, deep technical trade‑offs, and a learning loop—each of which is evident in this story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
