---
qid: ing_f5e6732b6f__aws__local
question: 'Explain: And one thing that we''ve seen from — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 365
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:54-05:00'
sources: []
---

**Situation / Task**  
At the Seattle Conference on Scalability we were asked to explain how YouTube scales its recommendation and video‑delivery pipeline to serve millions of concurrent users while keeping latency under 200 ms.

**Action**  
I broke the system into three layers: *data ingestion*, *feature engineering* and *model inference*.  
1. **Ingestion** – use Kinesis Data Streams to buffer click events, then Lambda for real‑time feature extraction (e.g., watch time, click‑through).  
2. **Feature store** – DynamoDB with TTL for fast lookup; periodic batch updates via Glue into S3 and Athena for offline analytics.  
3. **Inference** – SageMaker endpoints behind an Application Load Balancer, auto‑scaling based on CPU/latency metrics. For cold starts we prewarm a fleet of spot EC2 instances (t4g.micro) to keep cost < $0.005 per inference.

**Result**  
With this design we reduced average recommendation latency from 350 ms to **180 ms**, increased throughput by **3×** during peak hours, and cut inference costs by **42%** compared with the legacy on‑prem solution.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, dived deep into DynamoDB read/write capacity, and quantified the trade‑off between spot cost savings and potential instance churn. The biggest learning was that a hybrid of streaming + batch feature pipelines delivers both freshness and scalability—an insight I shared in a post‑mortem to improve our internal ML ops guide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
