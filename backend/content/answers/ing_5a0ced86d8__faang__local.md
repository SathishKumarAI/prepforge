---
qid: ing_5a0ced86d8__faang__local
question: 'Explain: Transport and routing — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 492
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:13:01-05:00'
sources: []
---

**Transport & Routing – Asynchronous Computing at Meta**  
*FAANG‑style interview response (≈200 words)*  

---

### **Clarify**  
Meta’s “transport and routing” layer is the backbone that moves data between micro‑services, edge nodes, and user devices. It must be *asynchronous* to decouple producers from consumers, tolerate failures, and scale globally. I’ll assume we’re focusing on the high‑throughput, low‑latency use case (e.g., video streaming or real‑time messaging) where latency budgets are < 50 ms.

### **Approach**  
1. **Message broker + sharding** – Use a partitioned queue (Kafka‑like) per region to balance load.  
2. **Back‑pressure & flow control** – Implement windowing and adaptive throttling so hot partitions don’t starve others.  
3. **Routing logic** – Hash‑based deterministic routing plus failover via consistent hashing.  
4. **Resilience** – Idempotent producers, replay queues, and dead‑letter handling.  
5. **Observability** – Metrics per partition (latency, drop rate) + distributed tracing.

### **Depth**  
- *Complexity*: O(log N) for routing (consistent hashing), O(1) enqueue/dequeue.  
- *Trade‑offs*: Sharding reduces contention but increases cross‑region hops; we mitigate with region‑aware placement.  
- *Consistency*: We choose “at least once” delivery to preserve user experience, compensating with idempotent ops.

### **Edge Cases**  
- Sudden traffic spikes → back‑pressure triggers; test burst tolerance (10× baseline).  
- Partition failure → automatic reassignment; verify minimal service disruption.  
- Network partitions → ensure eventual consistency and avoid split‑brain by using quorum reads/writes.

### **Optimize & Communicate**  
Future improvements: introduce adaptive compression per payload size, use edge caching for hot data, and experiment with vector‑based routing to reduce hop count. I’d narrate this as “We’re building a highly available, low‑latency transport layer that gracefully handles scale and failure by combining sharded queues, deterministic routing, and robust observability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
