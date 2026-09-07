---
qid: ing_6a1013f65a__aws__local
question: 'Explain: Availability — Serverless Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 571
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:25-05:00'
sources: []
---

**Situation (S)** – In my last role I was asked to launch a real‑time recommendation engine for an e‑commerce site that had 15 M monthly users and required 99.999% uptime during holiday spikes.

**Task (T)** – Build a serverless ML inference pipeline that scales automatically, keeps latency <100 ms, and costs <$5k/month.

**Action (A)** –  
1. **Ingest & Pre‑process**: Kinesis Data Streams → Lambda → S3 for raw artifacts.  
2. **Model Serving**: SageMaker Endpoint with *Multi‑Model* containers; deployed behind an Application Load Balancer (ALB) with *Lambda@Edge* for request routing.  
3. **Cache**: ElastiCache‑Redis to store top‑10 predictions per user, TTL 5 min.  
4. **Observability**: CloudWatch metrics + X-Ray tracing; set up alarms on 500‑error rates.  

I used *AWS Step Functions* for orchestration and *DynamoDB Global Tables* to keep session state globally. The design leverages **Availability** (ALB + Lambda@Edge + Multi‑AZ endpoints) and **Cost Optimization** (pay‑as‑you‑go, auto‑scaling).  

**Result (R)** – During the Black Friday sale we handled 1.2 M concurrent requests with <0.9 ms average latency, achieving a 99.999% SLA while cutting inference costs by 35 % compared to our prior EC2‑based approach.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered sub‑100 ms predictions for every shopper.  
- **Ownership & Dive Deep** – I drove the entire serverless stack, debugged latency spikes via X‑Ray traces, and iterated on cache TTLs to balance freshness vs cost.

---

### What a Bar‑Raiser Looks For
- **Quantified Impact**: 35 % cost savings, 99.999% uptime.  
- **Depth & Trade‑offs**: Chose SageMaker Multi‑Model over EC2 for rapid scaling; accepted higher cold‑start latency mitigated by caching.  
- **Learning from Failure**: Early trials with single ALB failed to meet SLA during traffic bursts; migrated to multi‑AZ endpoints and re‑architected the cache strategy.

This showcases how a serverless architecture can deliver both high availability and cost efficiency for ML workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
