---
qid: ing_e3e30ba072__think__local
question: 'Explain: Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 530
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:02:12-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm whether the interviewer wants a *high‑level* architecture or a deep dive into trade‑offs (latency, throughput, consistency).  
   - Assume we’re designing a cloud‑scale Pub/Sub system that supports millions of topics/partitions, durable storage, at‑least‑once delivery, and horizontal scalability.  

**2. Pick a mental model / framework**  
   - Use the *publish–subscribe pattern* as a base: producers → broker(s) → consumers.  
   - Layer this with *system design principles*: partitioning, replication, fault tolerance, load balancing, and monitoring.  

**3. Reason step‑by‑step toward the answer**  
   1. **Define functional requirements** (message size limits, ordering guarantees, retention policy).  
   2. **Sketch a high‑level diagram**: producers → ingestion tier (API gateways), broker cluster (topic partitions), storage layer (SSD/HDD or object store), consumer fetch API.  
   3. **Decide on partitioning strategy** (hash of key, round‑robin) to enable parallelism.  
   4. **Add replication & leader election** (e.g., Raft/Zookeeper) for fault tolerance.  
   5. **Plan for scaling**: horizontal broker addition, sharding topics, load balancer.  
   6. **Address consistency and ordering**: per‑partition FIFO vs global ordering.  
   7. **Outline delivery semantics** (at‑least‑once with deduplication or exactly‑once via idempotent consumers).  
   8. **Add observability**: metrics, logs, tracing.  

**4. Common traps to avoid**  
   - Forgetting *message durability* and crash recovery.  
   - Over‑optimizing for latency at the expense of throughput.  
   - Ignoring consumer backpressure (slow consumers starve the system).  
   - Underestimating network partition scenarios.  

**5. Sanity‑check & communicate**  
   - Verify each requirement is addressed in the diagram.  
   - Explain trade‑offs verbally: “If we want ordering across all topics, we’d need a single broker; that hurts scalability.”  
   - Summarize key decisions (partitioning, replication, delivery semantics) and be ready to dive deeper into any of them on follow‑up questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
