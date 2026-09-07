---
qid: ing_17e7ef0b89__aws__local
question: 'Question 2: Does It Need to Survive Beyond a Single Session?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 379
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:19:38-05:00'
sources: []
---

**Question:** *Does an AI system need to survive beyond a single session?*  

**Answer (Amazon style)**  

> **Situation & Task** – I led the redesign of our recommendation engine for a global e‑commerce platform. Clients expected real‑time personalization, but the existing model only persisted state within a browser session, causing 35 % churn during checkout.  
> 
> **Action** – I introduced an *AI Persistence Layer* using Amazon DynamoDB (low‑latency key/value store) and Amazon SageMaker Model Registry for versioning. The model was wrapped in a stateless Lambda function behind API Gateway, ensuring horizontal scalability. A background step retrains every 12 h with fresh clickstream data stored in S3, then pushes the new artifact to SageMaker Endpoint. I added CloudWatch metrics to track prediction latency (target <50 ms) and accuracy (AUC >0.82).  
> 
> **Result** – Post‑deployment, checkout abandonment fell 22 % and revenue per visitor rose by $1.45/month. The persistence layer handled 5 M requests/day with 99.9 % availability while keeping costs under $12k/month— a 30 % savings over the legacy monolith.  
> 
> **Leadership Principles** – *Customer Obsession* (reducing friction), *Ownership* (owning end‑to‑end pipeline), and *Dive Deep* (profiling latency, AUC).  

Bar‑raisers listen for: ownership of the full problem space, deep technical dive into AWS services, quantifiable impact, and lessons learned from earlier failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
