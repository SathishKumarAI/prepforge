---
qid: ing_b6834bf570__aws__local
question: 'Explain: Fixing the Plumbing: How We Identify and Stop Slow Latency Leaks
  at LinkedIn'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 412
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:31-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn I led a cross‑functional squad that noticed the *Recommendation Engine*’s real‑time inference latency drifting from 120 ms to > 450 ms during peak hours. The leak was hidden in the “plumbing” – stale model artifacts, unsharded feature stores, and mis‑configured inference endpoints.

**Approach & Action (Dive Deep + Bias for Action)**  
1. **Root‑cause audit**: Instrumented every microservice with OpenTelemetry, aggregated traces in AWS X-Ray, and plotted latency histograms in Grafana.  
2. **Model artifact freshness**: Built an automated pipeline on AWS SageMaker Model Registry that tags each deployment with a SHA hash; any drift > 5 % triggers a rollback via Step Functions.  
3. **Feature store sharding**: Migrated to Amazon DynamoDB Global Tables, partitioned by user region, reducing cross‑region read latency from 80 ms → < 10 ms.  
4. **Endpoint scaling**: Deployed SageMaker RealTime endpoints behind an Application Load Balancer with target tracking on CPU utilization; added a “warm‑up” lambda to keep at least 30% of instances primed.

**Result (Deliver Results)**  
- Latency dropped from 450 ms to **115 ms** (≈ 74 % improvement).  
- SLA breaches fell from 12 % to < 0.5 %.  
- Cost saved: $18k/month by eliminating unnecessary over‑provisioned endpoints.

**Takeaway**  
Ownership of the entire ML lifecycle—data ingestion, model serving, and observability—is essential. Continuous monitoring + automated rollback is the only way to catch “slow leaks” before they hit users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
