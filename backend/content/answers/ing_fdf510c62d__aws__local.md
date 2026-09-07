---
qid: ing_fdf510c62d__aws__local
question: 'Explain: Functional Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 441
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:19-05:00'
sources: []
---

**Situation / Task**  
At a fast‑growing fintech startup we needed an internal “ChatGPT” service for customer support and compliance questions. The requirement: 10k concurrent users, < 200 ms latency, GDPR‑compliant data handling, and zero single points of failure.

**Action**  
1. **Architecture** – Event‑driven microservices on **Amazon ECS (Fargate)** with a **Service Mesh (AWS AppMesh)** for observability.  
2. **Model serving** – Hosted the fine‑tuned GPT‑4 model in an **SageMaker Endpoint** behind a **Lambda@Edge** cache to reduce API calls and cost.  
3. **Data flow** – Input → **Kinesis Data Streams** → **Step Functions** for validation, tokenization, and routing; output stored in **DynamoDB (partitioned by user)** for audit.  
4. **Security** – Encryption at rest with **AWS KMS**, IAM roles scoped to least privilege, and compliance checks via **AWS Config**.  
5. **Scaling** – Auto‑scaling on CPU/Memory metrics; burst capacity via **ECS Spot Instances** (30 % cost savings).  

**Result**  
- Latency dropped from 650 ms to **180 ms** (90 % improvement).  
- 99.95 % uptime over 6 months, no outage.  
- Cost per query reduced by **$0.12**, saving ~$35k annually.  

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into throughput bottlenecks and iterating on caching strategy—an example of *Ownership* and *Dive Deep*. The quantitative lift (latency & cost) demonstrates impact, while the zero‑outage record shows resilience. Future iterations will integrate **Amazon Bedrock** for cheaper model hosting, learning from the trade‑off between performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
