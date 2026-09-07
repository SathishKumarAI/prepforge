---
qid: ing_34e9e78fc5__aws__local
question: 'Explain: Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 648
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:29-05:00'
sources: []
---

**Situation (S)**  
In a previous role I was tasked with designing a real‑time recommendation engine for an e‑commerce platform that needed to serve millions of users daily while keeping latency under 200 ms.

**Task (T)**  
I had to build a **client–server architecture** that could ingest user interactions, run inference, and return personalized suggestions on the fly, all while staying cost‑effective on AWS.

**Action (A)**  

| Layer | Design & Services | Rationale |
|-------|-------------------|-----------|
| **Client** | Mobile/Web SDKs + Amazon CloudFront CDN | Low‑latency content delivery; edge caching reduces origin load. |
| **API Gateway / Lambda** | API Gateway → AWS Lambda (Python) | Serverless, auto‑scales to spikes; pay only for compute. |
| **Feature Store** | DynamoDB + Amazon Kinesis Data Streams | Real‑time ingestion of click events; DynamoDB gives sub‑ms reads. |
| **Model Inference** | SageMaker Endpoint in an Auto Scaling group (ml.m5.large) + Elastic Load Balancer | Handles 10k requests/sec, scales by CPU/Memory metrics; keeps inference latency <100 ms. |
| **Result Cache** | Amazon ElastiCache Redis | Stores top‑10 recommendations per user for 24 h, cutting down on repeated inferences. |
| **Monitoring & Logging** | CloudWatch + X-Ray | End‑to‑end tracing to detect bottlenecks; metrics drive auto‑scaling thresholds. |

*Scalability*: Auto Scaling groups and Lambda concurrency limits handle traffic surges.  
*Availability*: Multi‑AZ deployment for all services, with Route 53 health checks.  
*Cost*: Leveraging serverless (Lambda) and spot instances for SageMaker reduces spend by ~35 % vs on‑demand.

**Result (R)**  
After launch, latency dropped from 350 ms to **180 ms**, and recommendation click‑through rate increased by **12 %**. Monthly cost was cut by **$27k** compared to the legacy monolith.

---

### Leadership Principles

- **Ownership** – I took end‑to‑end responsibility for the architecture, from data ingestion to user experience.
- **Dive Deep** – Conducted detailed latency profiling (X‑Ray traces) and iteratively tuned DynamoDB indexes and Redis eviction policies.
- **Deliver Results** – Achieved measurable performance gains and cost savings while meeting SLAs.

---

### What a Bar‑Raiser Looks For

1. **Quantified Impact**: Clear metrics (latency, CTR, cost).
2. **Depth of Design**: Justification for each AWS service choice and trade‑offs.
3. **Learning from Failure**: Initial prototype hit 300 ms latency; after profiling we identified DynamoDB read contention and resolved it with a secondary GSI—demonstrates iterative improvement.

This demonstrates how to architect a robust, scalable client–server ML system on AWS while aligning with Amazon’s leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
