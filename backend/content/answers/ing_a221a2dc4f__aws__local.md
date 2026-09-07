---
qid: ing_a221a2dc4f__aws__local
question: 'Explain: The Interview Question — Multi Tenant Saas'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 476
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:39-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a multi‑tenant SaaS platform that delivers real‑time predictive insights for retail chains (≈ 5 k stores). The goal: keep latency < 200 ms, scale to 10⁶ concurrent users, and reduce cost by 30 % over the legacy monolith.

**Action**  
I split the architecture into *tenant isolation*, *AI inference* and *data ingestion* layers.  

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Tenant isolation | **Amazon Cognito + API Gateway with custom authorizer** | Fine‑grained IAM per tenant; auto‑scales with request volume. |
| Data ingestion | **Kinesis Data Streams → Lambda → DynamoDB (global secondary index)** | Real‑time capture, serverless compute, pay‑per‑use. |
| AI inference | **Amazon SageMaker endpoints (multi‑model) + Elastic Inference** | One endpoint per model version; cost‑effective GPU usage. |
| Storage & analytics | **S3 + Athena** for raw logs; **Redshift Spectrum** for reporting. |

I introduced *feature flags* in DynamoDB to enable A/B testing of new models without downtime, and used **AWS CloudWatch dashboards** to monitor per‑tenant latency. The design guarantees 99.9 % availability via multi‑AZ deployments.

**Result**  
After rollout:  
- Latency dropped from 350 ms to 180 ms (30 % improvement).  
- Operational cost fell by 32 % due to serverless Lambda and Elastic Inference.  
- Tenants reported a 25 % increase in sales conversion attributed to the AI recommendations.

**Learning & Bar‑raiser cues**  
I owned the end‑to‑end pipeline, dove deep into latency bottlenecks (identified Kinesis shard limits), and iterated quickly—showing bias for action. I quantified impact with clear metrics and documented failures (shard over‑provisioning) to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
