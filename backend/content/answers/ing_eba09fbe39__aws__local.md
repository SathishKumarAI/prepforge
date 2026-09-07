---
qid: ing_eba09fbe39__aws__local
question: 'Explain: AI Applications — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 404
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:10-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was asked to build an AI‑powered recommendation engine for a SaaS client that needed real‑time insights across millions of users without compromising latency.

**Action (Dive Deep + Ownership)**  
I chose a **client‑server** model:  

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| Ingestion & Feature Store | **Amazon Kinesis + DynamoDB Streams** | Low‑latency, durable ingestion. |
| Model Serving | **SageMaker Endpoint (Inference CPU)** | Fast inference with auto‑scaling; cost‑effective for ~50k requests/sec. |
| Caching & Client Delivery | **ElastiCache Redis** | Sub‑10 ms cache hit rate; reduces endpoint load by 70%. |
| Orchestration | **Step Functions + Lambda** | Event‑driven workflow, easy rollback on failure. |

I implemented **canary deployments** and a monitoring stack (CloudWatch, X-Ray) to catch drift within 5 minutes.

**Result (Deliver Results)**  
Within two weeks:  

* Latency dropped from 250 ms to 45 ms per recommendation.  
* Endpoint cost fell 60% by shifting traffic to Redis cache.  
* Revenue lift of 12% in the first month due to higher click‑through rates.  

**Bar‑raiser takeaways**  
- **Ownership**: I led cross‑team effort, handled rollback logic, and documented runbooks.  
- **Dive Deep**: Quantified cache hit ratios, cost per inference, and latency percentiles.  
- **Learning from Failure**: Early trials with Lambda‑only served caused 300 ms spikes; pivoted to SageMaker for stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
