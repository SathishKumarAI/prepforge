---
qid: ing_dc12c46447__faang__local
question: 'Explain: CP (Consistency and Partition Tolerance)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 414
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:07-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *CP* in the context of the CAP theorem – that a distributed system can provide at most two of **Consistency (C)**, **Availability (A)**, and **Partition tolerance (P)**.  I’ll assume the interviewers want an overview of why “CP” matters, what trade‑offs it implies, and typical use cases.

**Approach**  
1. Define each CAP pillar briefly.  
2. Explain that “CP” systems sacrifice availability during network splits to keep all replicas in sync.  
3. Give concrete examples (e.g., relational databases with strong ACID guarantees).  
4. Touch on real‑world trade‑offs and the impact on latency/throughput.

**Depth**  
*Consistency*: every read sees the most recent write.  
*Partition tolerance*: the system continues to operate even when network links fail.  
In a **CP** design, if a partition occurs, the system may block writes or return errors until connectivity is restored, ensuring no divergent state emerges. This guarantees strict serializability (often achieved with two‑phase commit, consensus protocols like Paxos/Raft). The downside is that during partitions the service becomes unavailable to clients, increasing latency and reducing throughput.

**Edge Cases**  
- Small, transient network hiccups cause brief unavailability.  
- Large partitions may lead to significant write backlogs once reconnection occurs.  
- “Eventual consistency” systems (AP) would be a contrasting edge case where writes succeed but diverge temporarily.

**Optimize & Communicate**  
I’d note that many modern cloud services adopt a hybrid strategy: default to CP for critical data, fall back to AP with conflict‑resolution when high availability is required. I’d finish by summarizing that “CP” is chosen when correctness outweighs uptime—typical in finance or banking systems where stale reads are unacceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
