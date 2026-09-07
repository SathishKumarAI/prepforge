---
qid: ing_0fd00d3651__faang__local
question: 'Explain: Only 2 (of 3 CAP properties) possible at the same time'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 506
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:14-05:00'
sources: []
---

**Clarify**  
The question asks why a distributed system can satisfy **only two of the CAP theorem’s three guarantees (Consistency, Availability, Partition‑tolerance) simultaneously**. I’ll assume we’re discussing an *asynchronous* network that may experience partitions and we’re evaluating data‑storage services.

**Approach**  
1. Restate CAP:  
   - **C** – every read receives the most recent write.  
   - **A** – each request receives a response (no timeout).  
   - **P** – system keeps operating despite network splits.  
2. Map each pair of guarantees to real‑world behaviours.  
3. Explain why adding all three leads to contradictions under partition.

**Depth**  
- *CA* (Consistency + Availability): If we ignore partitions, a single node can serve up‑to‑date reads and never fail. A classic example is a tightly coupled relational DB on one machine.  
- *CP* (Consistency + Partition‑tolerance): When a split occurs, the system refuses to answer until it can reconcile data—think of a distributed file system that locks during a network failure.  
- *AP* (Availability + Partition‑tolerance): The system continues to respond by serving possibly stale replicas; e.g., eventually consistent key‑value stores like Dynamo or Cassandra.  

Under a **partition**, the two non‑trivial guarantees clash:  
- To stay **consistent**, the system must halt operations until the partition heals, violating **availability**.  
- To remain **available**, it must serve data locally, risking **inconsistency**. Thus, only two can coexist.

**Edge Cases**  
- *Partial partitions*: Some nodes may still communicate; systems use quorum reads/writes to trade off consistency vs availability dynamically.  
- *Strongly consistent replicas* with synchronous replication: they sacrifice availability during network delays.  

**Optimize & Communicate**  
In practice, most large services choose **AP** for high throughput and then apply application‑level reconciliation (e.g., conflict resolution, version vectors) to mitigate inconsistencies. If strict correctness is required (banking), a **CP** design with synchronous replication and transaction logs is preferred. Communicating this trade‑off early in the interview demonstrates understanding of CAP’s practical implications and the decision‑making process behind system architecture choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
