---
qid: ing_620f44372e__aws__local
question: 'Explain: Now we do tell information to Google — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 861
total_tokens: 1097
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:24-05:00'
sources: []
---

**Scenario – “Tell Information to Google” (Google Maps API)**  
I was asked to design an end‑to‑end pipeline that collects real‑time event data (e.g., traffic incidents, user check‑ins) and pushes it into the Google Maps Platform so that the map surface can display up‑to‑date overlays. The challenge was to do this at scale while keeping latency low for a global audience.

| **Amazon Leadership Principle** | **Why It Matters** |
|---------------------------------|---------------------|
| *Customer Obsession* | Users expect real‑time, accurate map data; we must deliver it reliably. |
| *Ownership* | I took full ownership of the ingestion, transformation, and delivery stack, ensuring SLAs were met without handoffs. |

### **STAR – Result**

**S**: Our client had ~3 M daily active users across 50 countries and needed to ingest ~200 k traffic‑incident events per minute.  
**T**: Build a scalable pipeline that ingests, normalises, enriches, and pushes data to Google Maps via the *Data Layer* API with < 5 s latency.  
**A**:  

1. **Ingestion** – Kinesis Data Streams (shard‑size 2 MB/s) → Lambda for pre‑validation.  
2. **Transformation & Enrichment** – Step Functions orchestrate DynamoDB writes and SageMaker inference to predict incident severity.  
3. **Delivery** – API Gateway throttled at 1k req/s feeds into a *Google Cloud Pub/Sub* topic (via an HTTPS endpoint) that Google Maps consumes.  
4. **Monitoring** – CloudWatch metrics + X-Ray traces; automated rollback if latency > 5 s.

**R**: Achieved < 3 s average end‑to‑end latency, 99.9 % availability, and cut operational cost by 35 % vs the legacy batch system (from $12k to $7.8k/month).  

### **Technical Deep Dive**

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Data Ingestion | Amazon Kinesis Data Streams | Handles high‑throughput, real‑time ingestion with auto‑scaling. |
| Compute | AWS Lambda + Step Functions | Serverless, zero‑ops, cost‑efficient; step functions allow retry logic and stateful orchestration. |
| ML inference | SageMaker Endpoint | Low‑latency prediction for severity scoring; autoscaling based on CloudWatch alarms. |
| Storage | DynamoDB (TTL) | Fast read/write, auto‑scaling, no R/W capacity planning. |
| Delivery to Google | API Gateway → HTTPS -> Pub/Sub | API Gateway gives throttling & auth; Pub/Sub decouples producer/consumer and matches Google’s ingestion model. |

### **Bar‑raiser Checklist**

- **Ownership** – I led cross‑team handoffs, documented SLAs, and owned the rollback plan.  
- **Dive Deep** – I quantified latency budgets per hop and tuned shard count to meet them.  
- **Quantified Impact** – 35 % cost reduction, < 3 s latency, 99.9 % uptime.  
- **Learning from Failure** – After a 2‑day outage caused by an unthrottled Lambda burst, I introduced *Lambda provisioned concurrency* and updated the auto‑scale policy to avoid future spikes.

---

> **Bottom line:** By treating Google Maps as a downstream consumer, we built a fully serverless, ML‑enhanced pipeline that delivers real‑time data with proven reliability and cost savings—exactly what an Amazon engineer would champion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
