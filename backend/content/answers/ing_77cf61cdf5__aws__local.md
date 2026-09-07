---
qid: ing_77cf61cdf5__aws__local
question: 'Explain: Scaling Real-Time Traffic Forecasting with a Graph-Aware Transformer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 429
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:07-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with delivering a real‑time traffic‑forecasting engine for a citywide mobility platform that served ~1 M daily active users. The existing rule‑based model lagged by 30 % during peak hours and could not incorporate dynamic road network changes.  

**Action (Design)**  
I built a *Graph‑Aware Transformer* that treats the road network as a directed graph, embedding each node with traffic features and learning message passing across edges.  
- **Data ingestion:** Kinesis Data Streams streamed sensor packets (speed, volume) to Lambda for enrichment; data landed in DynamoDB for low‑latency lookup.  
- **Model training & inference:** SageMaker Pipelines orchestrated nightly batch jobs on Spot instances (p3.2xlarge) using PyTorch Lightning; the trained model was deployed as a container on Amazon ECS Fargate with autoscaling based on CloudWatch metrics.  
- **Graph storage & traversal:** Neptune stored the road graph, queried via Gremlin to feed neighbor embeddings into the transformer on each request.  
- **Scalability/Availability:** The stateless inference containers scaled to 200 TPS with <120 ms latency; multi‑AZ ECS ensured 99.9 % uptime. Cost was kept under $4k/month by using Spot + reserved instances and pruning low‑impact edges in the graph (sparsity trick).  

**Result**  
Within three months, forecast accuracy improved from 68 % to **82 % MAE reduction**, cutting congestion‑related complaints by 45 %. The system handled a 4× traffic spike during city events without degradation.  

*Leadership Principles:* **Customer Obsession** – delivering higher quality predictions for commuters; **Ownership** – drove end‑to‑end pipeline, from data ingestion to deployment and cost monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
