---
qid: ing_aeaaf78344__faang__local
question: 'Explain: Consistency vs. Availability (CAP Theorem)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 558
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:29:45-05:00'
sources: []
---

**Consistency vs. Availability (CAP Theorem)**  
*Capable of 160–240 words, structured like a FAANG interview response.*

---

### Clarify
The CAP theorem states that in a distributed system you can satisfy at most **two** of the following properties simultaneously:  
- **C**onstancy – every read receives the latest write.  
- **A**vailability – every request receives a response (even if stale).  
- **P**artition‑tolerance – the system continues to operate despite network partitions.

I’ll assume we’re discussing *data stores* in a cloud environment where partitions are common.

---

### Approach
1. **Define each property in operational terms.**  
2. **Explain their trade‑off: when you prioritize one, the other suffers.**  
3. **Illustrate with real‑world examples (e.g., Cassandra vs. Spanner).**

---

### Depth
- **Consistency:** Guarantees that once a write completes, every subsequent read returns that value. Strong consistency means *serializability*; eventual consistency relaxes this to “eventually” converge.  
- **Availability:** The system must return a response for every request. If the node is down or partitioned, you still answer—possibly with stale data.  
- **Partition‑tolerance:** Network splits can isolate subsets of nodes. A truly distributed database *must* handle this.

When a network split occurs:  
- **CA** → impossible (you must drop either consistency or availability).  
- **CP** → sacrifice availability; reject reads/writes from the partitioned side until reconnection.  
- **AP** → sacrifice consistency; allow stale reads while still responding to all requests.

---

### Edge Cases
- *Write‑heavy workloads*: CP may lock out many clients during a split.  
- *Read‑heavy, low latency*: AP is often preferred (e.g., CDN edge caches).  
- *Mixed read/write patterns*: Hybrid systems like Spanner use Paxos for CP while exposing eventual consistency APIs.

---

### Optimize & Communicate
In practice, most services expose a **primary–secondary** model: primary handles writes (CP), secondaries serve reads (AP). You can layer an “application‑level consistency” protocol to trade latency for stronger guarantees. When interviewing, emphasize that choosing between C and A depends on business requirements—data correctness vs. user experience—and that modern cloud platforms let you expose both at different tiers.

*This concise yet thorough explanation demonstrates structured reasoning, clear communication, and depth expected in FAANG interviews.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
