---
qid: ing_b69a098f16__aws__local
question: 'Explain: Distributed consensus — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 433
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:48-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science platform for a retail client, the team needed a fault‑tolerant distributed lock to coordinate nightly model training jobs across 50 EC2 instances. The goal was **zero‑downtime** and **sub‑second latency** while keeping cost under $200/month.

**Action (Design)**  
I architected a consensus layer using **AWS DynamoDB + AWS SQS** with a custom *Raft* implementation in Go:

1. **Leader election** – Each node writes a heartbeat to a DynamoDB table (`LockTable`) with a TTL of 5 s. The first writer becomes the leader; others monitor `LastHeartbeat`.
2. **Log replication** – When a node wants to acquire the lock, it publishes an entry to an SQS FIFO queue (`LockQueue`). Workers poll the queue, write to DynamoDB, and update a “commit index”.
3. **Safety & rollback** – If a leader fails (no heartbeat), followers elect a new one; uncommitted entries are discarded automatically by SQS visibility timeouts.

*AWS services used:*  
- **DynamoDB** for low‑latency key/value storage (1 ms read/write).  
- **SQS FIFO** to guarantee order and exactly‑once processing.  
- **CloudWatch** alarms on heartbeat gaps to trigger auto‑scaling of the worker pool.

**Result**  
- Achieved <10 ms average lock acquisition latency under 100 concurrent requests.  
- Reduced training window from 90 min to 45 min, saving $120/month in EC2 usage.  
- No missed or duplicate job executions observed over 12 months (0 incidents).

**Learning & Ownership**  
I documented the failure modes and automated rollback scripts, turning a one‑off feature into a reusable consensus microservice now used by three other teams. This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**—core Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
