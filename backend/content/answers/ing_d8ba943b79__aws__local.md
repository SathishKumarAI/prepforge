---
qid: ing_d8ba943b79__aws__local
question: 'Explain: Core Process — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 440
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:27-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to design a mobile‑first recommendation engine for a fashion retailer that served 1 M daily active users (DAU). The goal was to reduce load on the backend while keeping latency <200 ms and improving conversion by at least 5 %.  

**Action – Core Process & Design**  
*Customer Obsession + Ownership.* I first mapped user journeys, then defined the ML pipeline:  
1. **Data Ingestion** – *Amazon Kinesis Data Streams* for real‑time click logs, *S3* for batch history.  
2. **Feature Store** – *AWS Glue* crawls & transforms into a *DynamoDB* table; refresh every 30 min (≈10 GB).  
3. **Model Training** – *Amazon SageMaker* notebooks trained a collaborative filtering model nightly, auto‑tuned hyperparameters via *SageMaker Hyperparameter Tuning*.  
4. **Inference Service** – Deployed as *AWS Lambda@Edge* behind *CloudFront*, caching top 10 predictions per user in *Elasticache Redis* (0.5 ms hit time).  

Scalability: Auto‑scaling Lambda concurrency; DynamoDB read/write capacity auto‑adjusted to peak 500k RCU/WCU.  
Availability: Multi‑AZ deployment, 99.95 % SLA via CloudFront edge caching.  
Cost: Reduced backend calls by 70 %, saving $120K/yr versus monolithic approach.  

**Result**  
Within three months, conversion rose from 3.2 % to 4.0 % (25 % lift) while latency stayed <150 ms; cost dropped 30 %.  

**Reflection**  
I learned that iterating on feature freshness vs. caching hit ratio is a trade‑off; future iterations will experiment with *Amazon Personalize* for deeper personalization without retraining from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
