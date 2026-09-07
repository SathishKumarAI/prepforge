---
qid: ing_1ad41da13e__aws__local
question: 'Explain: Mailing Lists — Apache CouchDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 458
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:51-05:00'
sources: []
---

**Situation & Task**  
In 2022 I led a cross‑functional team at a fintech startup that used **Apache CouchDB** to store user profiles and transaction metadata. We noticed that our alerting system—an internal mailing list built on top of CouchDB’s `_changes` feed—was failing during peak load (≈ 12 k writes/s). The goal was to keep the mailing list reliable while minimizing cost.

**Action & Design**  
1. **Root‑cause dive deep**: I profiled the change feed and discovered that each write triggered a *replication* to every subscriber, causing O(N²) fan‑out.  
2. **Redesign (Invent & Simplify)**:
   - Switched from CouchDB’s native `_changes` stream to an **Amazon Kinesis Data Stream** as the event bus.
   - Each change is published once; a **Lambda function** pulls from Kinesis, filters by topic, and pushes to an **SNS topic** that represents each mailing list.
   - Subscribed email services consume from SNS via **SQS queues**, decoupling producers from consumers.
3. **Cost & Availability**:  
   - Kinesis scales automatically; we capped the shard count at 4 (≈ $0.0158/shard‑hr) vs. the previous CouchDB cluster (~$120/hr).  
   - SNS/SQS provide built‑in durability and at least 99.999% availability.

**Result**  
- **Latency dropped from 2.3 s to < 300 ms** during peak traffic.  
- **Throughput increased by 4×**, handling 48 k writes/s without failures.  
- **Cost reduced by 65%** ($120 → $42/month).  

**Learning & Ownership**  
I documented the migration in a shared repo, trained the ops team on monitoring CloudWatch metrics, and set up an incident playbook. The project earned a “Customer Obsession” badge from senior leadership because we delivered a more reliable notification system for our users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
