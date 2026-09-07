---
qid: ing_3245e0ec3b__aws__local
question: 'Explain: But while the user is in transit — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 484
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:55-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** A pilot city requested a real‑time “smart‑transit” feature: while a user was on a bus or train, the app should predict arrival times and recommend optimal transfers.  
> **Task:** Build an ML‑backed pipeline that ingests live vehicle telemetry, learns route patterns, and serves predictions with < 200 ms latency to 5 M concurrent users.  
> **Action:**  
> *Data layer:* Ingest GPS & sensor streams into **Amazon Kinesis Data Streams**, buffer in **DynamoDB** for “hot” state (vehicle ID → current position).  
> *Feature extraction:* Run a nightly batch job on **AWS Glue** to compute historical travel times, delays, and weather correlations. Store engineered features in **S3** as Parquet.  
> *Model training:* Use **Amazon SageMaker** with an XGBoost estimator (≈ 30 GB training data) to learn per‑route arrival curves; deploy the model as a **SageMaker Endpoint** behind an **Application Load Balancer** for low‑latency inference.  
> *Real‑time inference:* A Lambda function triggered by Kinesis events pulls the latest vehicle state, queries the SageMaker endpoint, and writes predictions to **Amazon API Gateway** → mobile client.  
> *Scalability & cost:* Auto‑scaling endpoints keep CPU under 70 % while handling 10⁶ requests/second; spot instances reduce training costs by ~60 %. Availability is 99.9 % via multi‑AZ SageMaker hosting and CloudFront caching of static assets.  

**Result:** Within three months, the pilot saw a **12 % reduction in user wait times** (measured against baseline logs) and a **15 % increase in route transfer usage**, translating to $1.2M incremental revenue for the city partnership.  

**Bar‑raiser takeaways:** I owned the end‑to‑end stack, dived deep into feature engineering trade‑offs, quantified impact with real metrics, and iterated after an initial latency spike by switching from Lambda to ECS Fargate for inference buffering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
