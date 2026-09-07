---
qid: ing_f0dbbc8fd9__aws__local
question: 'Explain: Correctness properties — Understanding Consensus and Paxos in
  Distributed Systems \u2013 Chord Simple'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 414
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:39-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of our recommendation engine to a fault‑tolerant microservice on AWS. The team needed a distributed lock so that only one instance could trigger heavy batch training at any time. I chose Paxos‑style consensus over a simple leader election (Chord) because we had to guarantee *correctness* even with multiple node failures.

**Action**  
I mapped the problem to **AWS DynamoDB Streams + SQS FIFO queues** as the log of proposals and decided on **Amazon MSK (Kafka)** for the durable, ordered message stream.  
1. Each instance sends a “prepare” record; MSK guarantees at‑least‑once delivery.  
2. A leader is elected by the first consumer to receive a majority quorum of *yes* responses (≥ ⌊n/2⌋+1).  
3. Once committed, all nodes persist the decision in DynamoDB and publish an “accept” event.  

I modeled the quorum size as `ceil(N/2)+1` to satisfy **Paxos** safety while keeping latency low (single‑region MSK cluster → < 50 ms round‑trip). I also added a fallback *Chord* style heartbeat to quickly recover from leader failure, reducing downtime from 15 min to under 30 s.

**Result**  
The new lock reduced concurrent training jobs by **97%**, cutting GPU cost from $2.3k/month to $0.4k/month. System availability rose from 99.5% to >99.9%, meeting the SLA for our ML pipeline.  

**Reflection**  
I learned that *correctness* in distributed systems is not just about algorithmic guarantees but also about choosing services that expose those guarantees with minimal operational overhead. This aligns with **Customer Obsession** (reducing cost and downtime) and **Ownership** (designing a robust, end‑to‑end solution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
