---
qid: ing_03849aaec2__aws__local
question: 'Explain: Terminology — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 506
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:26-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with redesigning the “like” counter for a global video platform that had to support > 10 M concurrent users and write‑through latency < 20 ms while keeping cost under $0.05 per 1,000 increments.

**Action (Design)**  
I built a *distributed counter* using **Amazon DynamoDB** (partitioned by content ID) for durability and low‑latency reads/writes. To avoid hot partitions I introduced a *sharded write queue* in **Amazon SQS FIFO**, where each message contains the content ID and increment value. A fleet of **AWS Lambda** workers processes the queue, performs an **optimistic concurrency update** (`UpdateItem` with `ConditionalExpression`) and writes back to DynamoDB. For read‑heavy traffic I added a **DynamoDB Accelerator (DAX)** layer so that most reads hit in‑memory cache, keeping read latency < 5 ms.  

To guarantee *exactly‑once* semantics I enabled **Idempotent Lambda** handlers via the `requestId` header and stored processed IDs in a short‑lived **Amazon ElastiCache Redis** set for 24 h. For monitoring I used **CloudWatch Metrics** (write latency, throttles) and **AWS X-Ray** to trace request paths.

**Result**  
After deployment we saw a **30% reduction in write latency** (from 45 ms to 31 ms), **99.999% availability** over 6 months, and a **$1.2M annual cost saving** versus the legacy MySQL‑based system.  

---

### Leadership Principles  
- **Ownership & Deliver Results** – I drove the end‑to‑end solution, from requirement gathering to production rollout.  
- **Dive Deep** – I benchmarked DynamoDB throttling, tuned sharding ratios, and validated idempotency logic through chaos testing.

### What a Bar‑raiser Hears  
- Concrete numbers (latency, cost, uptime).  
- Demonstrated trade‑off analysis (DynamoDB vs RDS, Lambda vs EC2).  
- Evidence of learning from early failures (handled SQS visibility timeouts and retry storms).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
