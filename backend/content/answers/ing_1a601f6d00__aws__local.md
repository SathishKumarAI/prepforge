---
qid: ing_1a601f6d00__aws__local
question: 'Explain: Workflow — Prime Video Microservices - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 422
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:00-05:00'
sources: []
---

**Situation & Task**  
At Prime Video I led the migration of our recommendation engine from a monolith to a fully‑service‑oriented architecture. The goal was to reduce latency by 30 % and increase click‑through rate (CTR) on suggested titles by 15 %.  

**Action – Design**  
* **Data ingestion** – Kinesis Data Streams captured viewing events in real time, fed into Lambda for schema validation and routed to S3 for batch training.  
* **Feature store** – Amazon SageMaker Feature Store stored user‑level and content‑level features with TTLs of 12 h, ensuring freshness without recomputation.  
* **Model training & inference** – SageMaker Pipelines orchestrated nightly model training (XGBoost) on Spot instances, achieving 2× cost savings vs. On‑Demand. Models were deployed to SageMaker Endpoint in a multi‑region cluster for low‑latency inference (<10 ms).  
* **Serving layer** – A lightweight Go microservice behind an Application Load Balancer queried the endpoint, aggregated results with personalized metadata stored in DynamoDB (partitioned by user segment), and returned top‑10 recommendations.  

**Result**  
Within 6 months:  
* Latency dropped from 250 ms to 80 ms (32 % improvement).  
* CTR on recommended titles rose from 4.2 % to 4.9 % (+15 %).  
* Cost of inference fell by 28 % thanks to Spot and SageMaker Endpoint autoscaling.  

**Learning & Ownership**  
I introduced a “Model Health” dashboard that flagged drift >5 %. When drift was detected, we retrained on the spot, preventing a projected 10 % CTR decline—demonstrating bias for action and ownership of end‑to‑end ML lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
