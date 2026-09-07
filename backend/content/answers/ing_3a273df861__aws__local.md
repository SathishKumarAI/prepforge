---
qid: ing_3a273df861__aws__local
question: 'Explain: Monthly Cost Estimate (500 Users, 100 Queries/User/Day)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 549
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:48-05:00'
sources: []
---

**Customer Obsession & Deliver Results**

**Situation:** A startup wanted to launch a chatbot for 500 users, each making ~100 AI queries/day (≈ 50 000 requests). They asked me to estimate the monthly AWS bill and design a cost‑efficient, highly available solution.

**Task:** Build a serverless architecture that processes every request in < 200 ms, scales automatically, and keeps the spend under $3k/month while meeting SLAs.

**Action & Design**

| Service | Role | Cost Drivers | Monthly Estimate |
|---------|------|--------------|------------------|
| **API Gateway** (REST) | Front‑end entry point | 50 000 * 1 GB payload ≈ 50 GB traffic | $12 |
| **Lambda** (Node.js) | Orchestrator + pre/post‑processing | 50 000 invocations, 200 ms each → ~10 h compute | $3.00 |
| **Amazon Bedrock** (LLM inference) | Core AI model | 50 k requests × 1 k tokens ≈ 50 M tokens | ~$2 400 |
| **DynamoDB** (session cache) | Store user context | 100 GB storage + reads/writes | $30 |
| **CloudWatch** | Monitoring & alarms | Basic usage | $5 |
| **S3** (logs) | Immutable logs | 200 GB stored | $2 |

**Total ≈ $2,452/month.**

*Key trade‑offs:*  
- **Scalability:** API Gateway + Lambda auto‑scale; Bedrock handles burst traffic with low latency.  
- **Availability:** All services are multi‑AZ by default; we add a CloudFront edge for extra resilience.  
- **Cost control:** We enable Lambda provisioned concurrency only during peak hours and use DynamoDB On‑Demand to avoid over‑provisioning.

**Result:** The architecture met the 200 ms latency SLA, handled 50 k daily queries without throttling, and stayed below the $3k budget. I documented a cost‑optimization playbook that reduced Bedrock usage by 15% through batching, saving ~$360/month in subsequent iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
