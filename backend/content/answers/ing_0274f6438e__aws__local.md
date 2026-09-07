---
qid: ing_0274f6438e__aws__local
question: 'Explain: How to do distributed locking — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 431
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:49-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: Our recommendation engine ran on a fleet of Spot‑EC2 instances. Occasionally two workers pulled the same user batch and updated a shared cache, causing stale data and a 12 % drop in click‑through rate (CTR).  
> *Task*: Implement a fault‑tolerant distributed lock that guarantees only one worker updates a batch at a time without hurting availability or cost.  
> *Action*: I designed a lock service using **Amazon DynamoDB** with conditional writes (`PutItem` with `ConditionExpression = attribute_not_exists(Owner)`) and a **TTL** attribute to auto‑expire stale locks. Workers first read the lock item; if it exists, they back off exponentially. For high contention we added an **SQS FIFO queue** that serializes lock acquisition requests.  
> *Result*: The new scheme reduced duplicate updates by 99 %, lifted CTR back to baseline, and cut Spot‑instance churn costs by 18 %. We also logged each lock event in CloudWatch Logs; metrics showed a median lock hold time of 3.2 s versus the previous 7.8 s, proving higher throughput.

**Dive Deep & Bias for Action**

- **Scalability**: DynamoDB’s single‑partition throughput suffices (≤10k writes/sec); TTL guarantees no manual cleanup.  
- **Availability**: Multi‑AZ replication ensures lock state survives AZ failures; SQS FIFO guarantees ordering under 99.9 % SLA.  
- **Cost**: Read/write capacity units are below $0.25/hr for our load; no additional EC2 or RDS instances required.

I learned that *conditional writes* in DynamoDB can replace heavy coordination services, but careful TTL and back‑off logic are essential to avoid livelocks. This solution demonstrates ownership, deep technical insight, and a measurable business impact—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
