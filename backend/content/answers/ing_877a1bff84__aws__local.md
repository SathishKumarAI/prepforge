---
qid: ing_877a1bff84__aws__local
question: 'Explain: Request Body — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 388
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:31-05:00'
sources: []
---

**Situation & Task**  
I was asked to design the *request‑body* flow for a next‑gen music streaming service (Spotify‑style) in a system‑design interview. The goal: keep latency < 50 ms, support millions of concurrent users, and enable rapid feature rollouts.

**Action**  
1. **API Gateway + Lambda Edge** – route every request to a stateless Lambda that validates the JWT and enriches it with *user profile* (via DynamoDB).  
2. **Event‑driven enrichment** – a Kinesis stream pushes the enriched payload to an SQS queue; workers in ECS Fargate run ML inference (genre, mood) using SageMaker endpoints.  
3. **Cache** – results are stored in ElastiCache Redis with TTL 30 s so repeat requests hit cache.  
4. **Observability** – CloudWatch metrics (`api_latency`, `ml_inference_success`) feed into a Grafana dashboard; alerts trigger auto‑scaling of the Lambda and Fargate clusters.

**Result**  
- Latency dropped from 120 ms to < 45 ms (95th percentile).  
- Throughput scaled to 5 M RPS with 99.9% availability.  
- Cost reduced by 28 % compared to a monolithic approach due to pay‑per‑invoke Lambda and Spot Fargate.

**Reflection**  
I owned the trade‑off between cold starts and caching; later I introduced Lambda provisioned concurrency for peak hours, learning that *small* optimizations yield large ROI. This showcases **Ownership**, **Dive Deep**, and **Deliver Results**—key Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
