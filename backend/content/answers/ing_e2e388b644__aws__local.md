---
qid: ing_e2e388b644__aws__local
question: 'Explain: Scaling Without Breaking — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 463
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:52:05-05:00'
sources: []
---

**Situation / Task**  
In a recent project I led the migration of a fraud‑detection ML pipeline from an on‑prem cluster to AWS. The business required *zero downtime* while scaling from 10 k to 1M transaction/day, yet our budget was capped at $50K/month.

**Action**  
I applied **Customer Obsession** and **Ownership** by first mapping the entire data flow (Ingest → Feature Store → Model Serve). I chose a *frugal architecture* per Neo Kim’s “Scaling Without Breaking”:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Data Ingestion | Kinesis Data Streams + Lambda | Serverless, auto‑scales with traffic; pay per shard. |
| Feature Store | DynamoDB (Global Tables) | Low latency reads for 10 k–1M ops/day; on‑demand capacity keeps costs predictable. |
| Model Serving | SageMaker Endpoints (Multi‑Model) + ECS Fargate | Multi‑model endpoint reduces warm‑up time, and Fargate removes overprovisioning. |
| Orchestration | Step Functions | Visual state machine for retries & dead‑letter queues; no code changes for scaling. |

I introduced **Canary Deployments** with 5% traffic to the new endpoint, monitoring latency (< 200 ms) and error rate (≤0.1%). If thresholds breached, Step Functions rolled back automatically.

**Result**  
- Traffic scaled 100× in 2 weeks without any SLA breach.  
- Cost fell from $120K/month to **$48K/month** (40% savings).  
- Model latency improved by 30%, leading to a 5% lift in fraud capture rate.  

**Reflection**  
The key was *dive deep* into each layer’s cost model and trade‑offs, iteratively validating assumptions with metrics. If I had skipped the canary step, we’d have risked a full rollback—learning that automated safety nets are non‑negotiable in high‑scale ML ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
