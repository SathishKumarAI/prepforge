---
qid: ing_b50b9a92cd__aws__local
question: 'Explain: Clarifying questions & assumptions — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 562
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:44-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a “LLM Gateway & Serving Platform” that would expose multiple large‑language‑model (LLM) endpoints to internal teams while keeping latency < 200 ms, cost <$0.02 per inference, and supporting 10k concurrent requests.  

**Clarifying questions & assumptions**  
- *What is the expected daily volume?* → I assumed 1 million inferences/day.  
- *Do we need versioning or rollback of models?* → Yes, so a blue‑green deployment strategy is required.  
- *How do we handle sensitive data?* → All payloads must be encrypted at rest and transit; compliance with HIPAA is mandatory.  
- *What SLAs are acceptable for different user groups?* → 99.9 % availability for “core” users, 95 % for “experimental”.  

**Approach (Design)**  
| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| API surface | Amazon API Gateway + Lambda@Edge | Edge caching reduces latency; throttling protects backend. |
| Inference engine | SageMaker Runtime Endpoint (managed by ECS Fargate) with spot GPU instances | Auto‑scaling on CPU usage, cost‑efficient for bursty traffic. |
| Model registry & versioning | Amazon S3 + DynamoDB | Immutable storage, metadata lookup, blue‑green deploy via CloudFormation. |
| Monitoring & observability | CloudWatch Logs + X-Ray | 1 ms latency traces, automated alarms when > 2 % error rate. |

**Result (Quantified Impact)**  
- Achieved **< 180 ms average latency** and **99.95 % availability** in a production pilot with 500k daily requests.  
- Reduced inference cost to **$0.015 per call**, a **30 % savings** versus the previous on‑prem GPU cluster.  
- Enabled zero‑downtime model rollouts, cutting release cycle time from 3 days to **2 hours**.

**Reflection & Learning**  
I initially underestimated the need for data encryption at rest, which caused a compliance gap during audit. After adding SSE‑S3 and KMS keys, we passed HIPAA review in one sprint. This taught me to surface assumptions early and iterate quickly—an embodiment of *Customer Obsession* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
