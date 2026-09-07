---
qid: ing_23b6f4a34c__aws__local
question: How would it work? — Ratelimiterapi
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 448
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:13-05:00'
sources: []
---

**Situation / Task**  
I led a small team tasked with building an AI‑driven rate‑limiter for our public REST gateway that could adapt in real time to traffic spikes and malicious patterns while keeping latency under 20 ms.  

**Action**  
*Design* – I chose a microservice architecture on **Amazon ECS Fargate** (stateless containers) with **AWS Lambda** for bursty edge logic.  
*ML Pipeline* – Training data was streamed from CloudWatch Logs to **S3**, processed in **AWS Glue**, and fed into **Amazon SageMaker** for an online learning model (gradient‑boosted trees). The model predicts a safe quota per client ID.  
*Serving* – The trained model is deployed as a **SageMaker Endpoint** behind an **Application Load Balancer**; the Lambda function queries it once per request, caches results in **Amazon ElastiCache Redis** for 1 s to avoid round‑trips.  
*Monitoring* – We used **CloudWatch Alarms** on request latency and error rate, auto‑scaling ECS tasks by 50% when the model confidence drops below 0.7.  

**Result**  
Within three months we reduced API error rates from 3.2 % to 0.4 %, cut average latency by 15 ms (from 35 ms), and saved ~30 % on compute spend compared with a static token‑bucket approach.

**Leadership Principles**  
- **Customer Obsession**: Delivered a smoother developer experience for our partners.  
- **Ownership & Dive Deep**: Took full responsibility from data ingestion to model inference, iterating on feature importance after each deployment.  

**Bar‑raiser cues** – I highlighted the cost‑benefit trade‑off of real‑time inference vs caching, quantified latency improvements, and documented lessons learned when a spike in bot traffic initially caused false positives—prompting an extra feature for anomaly detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
