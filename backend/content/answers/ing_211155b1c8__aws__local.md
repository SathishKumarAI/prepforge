---
qid: ing_211155b1c8__aws__local
question: 'Explain: Redundancy — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:01-05:00'
sources: []
---

**Situation & Task**  
While launching a real‑time fraud‑detection pipeline for a payment platform, I noticed that a single‑point failure in the model inference service caused 12 % of transactions to be processed without validation, hurting our *Customer Obsession* and *Ownership* commitments.

**Action**  
I redesigned the architecture using an **Active‑Active redundancy** pattern:

| Layer | Redundancy strategy | AWS services | Key trade‑offs |
|-------|---------------------|--------------|----------------|
| Inference API | Two identical Lambda clusters behind a **Global Accelerator** with health checks | Lambda, Global Accelerator, Route 53 | Slightly higher latency (≈5 ms) vs. cost savings over EC2 |
| Model storage | S3 cross‑region replication + DynamoDB Global Tables for metadata | S3, DynamoDB | 0.1 % extra storage cost; ensures instant failover |
| Orchestration | Step Functions with *Retry* & *Catch* to route to backup cluster | Step Functions | Adds ~50 ms but guarantees 99.999% availability |

I also added a **canary deployment** that toggles traffic between clusters, allowing me to measure inference latency and error rates in real time.

**Result**  
After implementation, the failure‑rate dropped from 12 % to <0.01 %, processing speed increased by 8 % due to parallelism, and operational cost grew only 3 %. The system now meets our *Deliver Results* KPI of 99.999% uptime for fraud checks.

**Learning**  
I discovered that *Dive Deep* into latency logs revealed hidden bottlenecks in the original Lambda configuration—an insight that prevented a costly migration to EC2 later on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
