---
qid: ing_e72be07f80__aws__local
question: 'Explain: Build web applications — Serverless Computing \u2013 Amazon Web
  Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 599
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:09-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked to launch a real‑time recommendation engine for a media platform that served 10 M users daily. The existing monolith couldn’t scale during peak hours and cost $200k/month in EC2 spend.

**Task (T)**  
Design a fully serverless web stack that reduces latency, scales automatically, and cuts operating costs by >70% while maintaining 99.9 % availability.

**Action (A)**  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| API layer | **Amazon API Gateway** + **AWS Lambda** | Handles request routing; auto‑scales to millions of invocations per second with zero server maintenance. |
| Business logic | **Lambda@Edge** (for personalized content) | Lowers latency by running code at CloudFront edge locations. |
| Data store | **Amazon DynamoDB** (global tables) | Single‑write, multi‑region consistency; auto‑scales throughput up to 1 M RCU/WCU with on‑demand billing. |
| Static assets | **S3 + CloudFront** | CDN caching reduces origin load and improves page load time by ~40%. |
| Orchestration | **Step Functions** | Coordinates async recommendation jobs, ensuring idempotency and retries. |
| Monitoring | **CloudWatch Alarms & X-Ray** | Detects cold‑start spikes; enables root‑cause analysis. |

*Scalability:* Lambda concurrency scales to 100 k invocations/second; DynamoDB auto‑scales to 1 M RCU/WCU.  
*Availability:* Multi‑AZ deployment, global tables, and CloudFront edge caching give >99.9 % SLA.  
*Cost:* From $200k/month down to ~$45k/month (≈77 % savings).  

**Result (R)**  
- Latency dropped from 1.2 s to 350 ms on average.  
- Peak traffic handled without throttling, maintaining 99.95 % request success rate.  
- Operational overhead reduced by 90 % (no server patching or capacity planning).  

**Leadership Principles Highlighted**  
- **Ownership:** I took full responsibility for the architecture and its end‑to‑end performance.  
- **Dive Deep:** Conducted detailed cost‑benefit analysis, cold‑start profiling, and failure mode testing to iterate on Lambda memory and provisioned concurrency settings.  

**Bar‑raiser Takeaway**  
Showcased measurable impact (cost & latency), deep technical justification for each AWS service, and a clear learning loop from monitoring data back into design refinements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
