---
qid: ing_1ffe0724c8__aws__local
question: 'Explain: Data flow at serving time — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 462
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:39:31-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: Our client, a SaaS platform with > 10 k tenants, needed on‑demand fine‑tuned LLMs without exposing proprietary data or compromising latency.  
*Task*: Design the serving pipeline that streams tenant data to a shared inference cluster while keeping isolation and sub‑200 ms response times.

**Action**

1. **Tenant Isolation Layer** – A lightweight *tenant‑token* (JWT) is attached to each request; an API Gateway authorizer validates it against DynamoDB, retrieving tenant config (model ID, quota).  
2. **Feature Store & Prompt Builder** – Tenant data is cached in ElastiCache Redis (partitioned by tenant key). A Lambda function pulls the latest fine‑tuned weights from S3 and constructs the prompt on‑the‑fly.  
3. **Inference Service** – Multi‑model SageMaker endpoint hosts all fine‑tuned models; the Lambda shards requests by model ID, ensuring no cross‑tenant leakage.  
4. **Observability & Scaling** – CloudWatch metrics (latency, error rate) trigger an AutoScaling policy that scales the endpoint’s `maxConcurrency` based on tenant traffic.

*Result*:  
- Latency dropped from 600 ms to **<180 ms** for 95th percentile requests.  
- Cost per inference reduced by **30 %** through shared endpoint usage.  
- Zero data‑leak incidents in a year of production, earning the team a “Customer Obsession” bonus.

**Dive Deep & Bar‑Raiser Notes**

Bar‑raisers probe:  
- *Did you truly own the end‑to‑end flow?* (Yes – from auth to cache to inference).  
- *Can you quantify impact?* (Latency, cost, SLA metrics).  
- *What failure modes were considered?* (Cache miss → fallback to S3; model drift monitoring).  

The solution balances scalability (SageMaker multi‑model), availability (Redis cluster with MultiAZ), and cost (shared endpoint + spot instances).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
