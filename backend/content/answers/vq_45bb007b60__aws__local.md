---
qid: vq_45bb007b60__aws__local
question: What is locking ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 424
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:58-05:00'
sources: []
---

**Situation & Task**  
During a redesign of our e‑commerce order service I was asked to explain “locking” and how we’d avoid contention while keeping data consistent.

**Action (Technical)**  
I described *optimistic* vs *pessimistic* locking, highlighting:

| Locking Type | When to use | AWS services |
|--------------|-------------|--------------|
| **Optimistic** | Low conflict rates; read‑heavy workloads | DynamoDB with conditional writes (`ConditionExpression`) or RDS with `SELECT … FOR UPDATE` on MySQL |
| **Pessimistic** | High contention (e.g., seat reservation) | Amazon Aurora’s row‑level locks, Redis `SETNX` for distributed lock |

I proposed a hybrid design:  
1. Use DynamoDB for order metadata (eventual consistency).  
2. For inventory updates, employ DynamoDB *conditional writes* to prevent overselling; fallback to SQS FIFO and Lambda replay if conflicts exceed 3 attempts.  
3. Cache the stock count in ElastiCache Redis with a short TTL, refreshing only on write.

**Result (Data‑driven)**  
After deployment:  
- **Order latency dropped 35 %** (from 120 ms to 78 ms).  
- **Inventory over‑sell incidents fell from 12 per week to 0.**  
- **Cost stayed within budget** because DynamoDB’s on‑demand capacity handled peak spikes without overprovisioning.

**Reflection (Amazon Leadership)**  
*Ownership*: I took full responsibility for the end‑to‑end consistency model and monitored post‑launch metrics.  
*Dive Deep*: I traced a 15 % latency spike to stale cache reads, adding a TTL refresh policy that eliminated it.  

**Bar‑raiser signals** – The interviewer looked for: clear distinction between locking strategies, concrete AWS services, scalability trade‑offs, measurable impact, and evidence of learning from a past failure (the cache issue).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
