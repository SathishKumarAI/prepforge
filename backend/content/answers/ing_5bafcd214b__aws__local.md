---
qid: ing_5bafcd214b__aws__local
question: 'Explain: Tagging Service — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 611
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:35-05:00'
sources: []
---

**Tagging Service – System Design Interview Cheat Sheet**

> **Leadership Principles:** *Ownership* + *Dive Deep*

---

### Situation  
At my previous role we needed a global, high‑throughput tagging API for 12 M objects per day (images, videos, documents). Existing solutions were either too slow or cost‑prohibitive.

### Task  
Design an end‑to‑end system that:  
1. Accepts up to **10 k TPS** of tag mutations.  
2. Guarantees eventual consistency with a **≤5 sec** read latency.  
3. Supports multi‑region deployment and **zero downtime upgrades**.

### Action – Architecture  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| API Gateway + Lambda (or ALB + ECS Fargate) | **API Gateway / Lambda** | Serverless scaling, pay‑per‑request; auto‑scales to 10 k TPS. |
| Queue & Retry | **Amazon SQS FIFO + DLQ** | Guarantees ordering per object, deduplication, and retry on transient failures. |
| Orchestration | **Step Functions** | Handles multi‑step tag mutation (validation → persistence). |
| Persistence | **DynamoDB Global Tables** | Low‑latency reads (<5 ms), multi‑region replication, built‑in high availability. |
| Search & Analytics | **Amazon OpenSearch Service** | Enables full‑text search on tags and analytics dashboards. |
| Monitoring | **CloudWatch + X-Ray** | Traces latency, error rates; auto‑alerts for SLA breaches. |

**Scalability / Availability** – DynamoDB Global Tables provide 99.999% availability with cross‑region replication; SQS guarantees message durability even during regional outages.  
**Cost** – Pay per request for Lambda and SQS; DynamoDB on-demand pricing scales with load, keeping costs predictable (~$0.25 /10 k TPS).  

### Result  
- Reduced average tag write latency from **2.3 s** to **<200 ms**.  
- Supported **15×** traffic spike during a product launch without any outages.  
- Cut tagging‑related ops cost by **38%** year‑over‑year.

---

> **Bar‑raiser cues:**  
> • Demonstrated *ownership* by choosing serverless components that auto‑scale and reduce operational overhead.  
> • Showed *deep dive* into trade‑offs: FIFO queues vs. standard, DynamoDB Global Tables vs. RDS for write amplification.  
> • Quantified impact with real metrics (latency, cost).  
> • Learned from early failure when a mis‑configured SQS visibility timeout caused duplicate tag writes; fixed by adding idempotent Lambda logic and monitoring alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
