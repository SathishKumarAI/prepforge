---
qid: ing_22a0d7db06__aws__local
question: 'Explain: In-Progress Jobs — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 686
total_tokens: 922
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:56-05:00'
sources: []
---

**Situation (S)**  
In my last role at a fintech startup we needed a *real‑time* credit‑risk scoring engine that processed millions of transactions per day. The existing batch scheduler was 30 % slower than SLA and crashed under spikes, so I owned the redesign of an **in‑progress job scheduler**.

**Task (T)**  
Build a distributed scheduler that guarantees:

- *High availability* (no single point of failure)  
- *Linear scalability* up to 10× load  
- *Fault tolerance* – jobs never lost if a node dies  
- *Cost efficiency* – pay‑as‑you‑go

**Action (A)**  

| Design Decision | AWS Service(s) | Why |
|-----------------|---------------|-----|
| **Job queue & state store** | Amazon SQS + DynamoDB (partition key = job_id, sort key = timestamp) | SQS decouples producers/consumers; DynamoDB gives ACID guarantees for job metadata. |
| **Worker fleet** | EC2 Auto Scaling Groups + Spot Instances + Lambda for short jobs | Autoscaling reacts to queue depth; spot instances keep costs low. |
| **Coordination & locking** | DynamoDB conditional writes (optimistic lock) + SQS visibility timeout | Prevents double‑processing while keeping latency minimal. |
| **Monitoring & Alerting** | CloudWatch metrics, Alarms, X-Ray traces | Enables rapid troubleshooting and root‑cause analysis. |
| **Deployment & CI/CD** | CodePipeline + CDK | Rapid iteration without downtime. |

- **Scalability:** Each SQS queue can handle ~300k messages/second; DynamoDB scales horizontally with provisioned throughput or on-demand mode.  
- **Availability:** No single point of failure—SQS and DynamoDB are multi‑AZ. Auto Scaling keeps at least 3 workers per AZ.  
- **Cost trade‑off:** Spot instances reduce compute cost by ~70 %, while SQS/DynamoDB pricing is pay‑per‑request.

**Result (R)**  

| Metric | Before | After |
|--------|--------|-------|
| Avg job latency | 12 s | 4.5 s (63 % reduction) |
| SLA compliance | 78 % | 99.9 % |
| Cost per million jobs | $18 | $8 (56 % savings) |

**Learning & Ownership**  
I conducted post‑mortems after each failure: the first outage was due to a race condition in job locking; we fixed it by adding a `version` attribute and retry logic. The system now self‑heals—if a worker dies, its jobs automatically reappear in SQS after visibility timeout.

> **Leadership Principles**  
> *Ownership* – I drove the end‑to‑end redesign, from requirements to production rollout.  
> *Dive Deep* – I profiled latency bottlenecks and tuned DynamoDB indexes for sub‑millisecond reads.  
> *Bias for Action* – Deployed a prototype in one week; iterated quickly based on real metrics.

This architecture is modular enough that we can swap SQS for Kafka or add step functions for multi‑stage jobs without rewriting the core logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
