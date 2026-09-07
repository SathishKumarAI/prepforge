---
qid: ing_7ce22b5e31__aws__local
question: 'Explain: Now what that could mean that could — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 555
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:33-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a “next‑gen” Google Maps feature: *real‑time traffic prediction and route optimization* for millions of users in 10 cities. The goal was to reduce average commute time by ≥15 % while keeping cost per request < $0.001.

**Action – Technical Design (AWS)**  
1. **Data Ingestion** – Streaming vehicle telemetry, GPS pings, public transit feeds into **Amazon Kinesis Data Streams** (5‑10 kpps).  
2. **Feature Store** – Persist raw and engineered features in **Amazon DynamoDB** with TTL for freshness; use **AWS Glue** to batch‑process historical data nightly.  
3. **Model Training** – Use **SageMaker** Pipelines: feature extraction → XGBoost/Neural net → hyperparameter tuning on spot instances (cost ↓ 40 %).  
4. **Inference Service** – Deploy trained model as a container in **ECS Fargate** behind an **Application Load Balancer**; autoscale based on request latency (target 50 ms).  
5. **Routing Engine** – Combine ML predictions with Dijkstra’s algorithm in **AWS Lambda@Edge** for edge‑latency routing decisions.  
6. **Observability** – CloudWatch metrics, X-Ray tracing, and **Amazon OpenSearch** dashboards for real‑time monitoring.

**Result (Dive Deep)**  
- *Latency*: 48 ms average per inference request (≤10 % variance).  
- *Cost*: $0.00075 per request; total monthly spend <$20k for 300M requests.  
- *Impact*: Average commute time dropped from 35 min to 29.5 min (+15.7 %) in pilot cities, translating to ~2 million driver‑hours saved annually.

**Reflection (Customer Obsession & Ownership)**  
I iterated on feature importance by A/B testing with users and incorporated their feedback into the loss function (penalizing missed peak times). The failure mode—cold start for new routes—was mitigated by fallback to deterministic routing, a lesson I documented in our post‑mortem.

**Bar‑raiser Signals**  
- Ownership: Own full ML pipeline from ingestion to production.  
- Dive Deep: Quantified latency and cost trade‑offs, tuned hyperparameters on spot instances.  
- Impact: Clear 15 % time savings with real metrics.  
- Learning: Converted cold‑start failure into a robust fallback strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
