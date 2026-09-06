---
qid: ing_8b47591b55__think__local
question: 'Explain: sequel to save the database after 2014 — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 601
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:15:54-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify the core theme: *designing a system that persists data after 2014* (likely “after 2014” is a hint toward a specific Uber‑style architecture).  
- Assume the interview wants you to discuss a distributed, fault‑tolerant database layer (e.g., Uber’s use of MyRocks/Redis/PostgreSQL + Kafka).  
- Note that “OLA” and “Amazon interview question” suggest comparing two big‑data pipelines or service architectures.

**2️⃣ Choose a mental model / framework**  
Use the **CAP/TCO‑centric design pattern**:  
1. *Consistency* vs. *Availability* (CAP theorem)  
2. *Throughput* & *Latency* constraints  
3. *Data partitioning* (sharding, geo‑replication)  
4. *Durability* mechanisms (write‑ahead logs, replication factors).  

Also layer the solution: **Service Layer → Transaction/Batch Layer → Storage Layer**.

**3️⃣ Step‑by‑step reasoning**  
- Start with user requirements: high write volume (trip bookings), low read latency for current state, eventual consistency acceptable.  
- Pick a *write‑optimized* engine (e.g., MyRocks) to handle the heavy inserts.  
- Use a *message queue* (Kafka/NSQ) as a durable log; each booking event goes into Kafka first.  
- Consume events via micro‑services that update an in‑memory cache (Redis) for instant reads and also persist to a relational DB for audit.  
- For analytics, stream data from Kafka to a columnar store (Druid/Redshift).  
- Discuss replication: 3‑node quorum for writes; cross‑region replication for disaster recovery.  
- Finally, tie back to “after 2014” by noting Uber’s shift to using MyRocks and a more granular partitioning strategy post‑2014.

**4️⃣ Common traps to avoid**  
- Mixing up *write* vs. *read* models: don’t force strong consistency everywhere.  
- Forgetting about **backpressure** on Kafka producers when the downstream service is slow.  
- Over‑engineering with too many layers; keep the core pipeline simple.  
- Ignoring data retention policies—old trip logs still need to be archived.

**5️⃣ Sanity‑check & communicate**  
- Verify that each layer satisfies the required latency and durability guarantees.  
- Walk through a single booking event: from API → Kafka → cache update → DB write → analytics stream.  
- Summarize trade‑offs (e.g., eventual consistency vs. higher throughput).  
- End with how this architecture scales horizontally, handles failures, and aligns with Uber’s real‑world evolution after 2014.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
