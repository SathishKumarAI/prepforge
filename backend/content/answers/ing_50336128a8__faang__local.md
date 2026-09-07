---
qid: ing_50336128a8__faang__local
question: 'Explain: Fan-out-on-write (Push Model) for Normal Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 545
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:05-05:00'
sources: []
---

**Clarify**

The question asks how a *fan‑out‑on‑write* (push) strategy works when sending updates to “normal” (non‑admin, regular) users in a machine‑learning‑enabled social platform.  
Assumptions:  
1. Each user can have thousands of followers.  
2. The system must deliver real‑time notifications or feed items.  
3. Latency is critical; write throughput is high.

**Approach**

1. When an event (e.g., a post) occurs, the service immediately pushes that item to every follower’s inbox.  
2. Use *write‑side* replication: the writer writes once, and the system fans out the record into many read replicas (or message queues).  
3. Store pre‑computed feed entries so reads are instant.

**Depth**

- **Write path:**  
  - User writes a post → event is persisted in a write‑optimized store.  
  - A fan‑out job (e.g., Kafka consumer) reads the event and inserts it into each follower’s *feed* table or pushes to a per‑user queue.  
  - Complexity: O(1) for write + O(F) fan‑out where F is follower count.  
- **Read path:**  
  - Users read from their local feed; O(log F) if indexed, otherwise O(1).  
- **Trade‑offs:**  
  - High write latency for users with many followers (write amplification).  
  - Storage cost: duplicate posts per follower.

**Edge Cases**

- New followers after the event: they miss the post unless a catch‑up mechanism runs.  
- Extremely high F (e.g., celebrity accounts) can overload downstream queues.  
- Failure in fan‑out must be idempotent to avoid duplicates.

**Optimize & Communicate**

- **Batching** fan‑outs for users with many followers reduces per‑event overhead.  
- Use *pull‑based* hybrid for very high F: write the event once, then let heavy followers pull later (push‑pull hybrid).  
- Explain that the trade‑off is between real‑time delivery (preferred for normal users) and write scalability; we mitigate by batching and using efficient queues.  

This structured plan demonstrates clear problem restatement, a concrete solution path, technical depth with complexity analysis, edge‑case awareness, and optimization reasoning—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
