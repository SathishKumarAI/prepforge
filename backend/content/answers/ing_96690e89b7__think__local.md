---
qid: ing_96690e89b7__think__local
question: 'Explain: Stage 5: Read Replicas (2M-10M users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 612
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:03:58-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- Identify what “Stage 5: Read Replicas” means in a typical ML‑infrastructure context (e.g., serving predictions).  
- Assume a web‑scale system with 2–10 M concurrent users, read‑heavy traffic, and a need for low latency.  
- Note that the question is about *scalability* – so focus on capacity planning, consistency trade‑offs, and operational concerns.

**2️⃣ Mental model / framework**

1. **Read/Write separation**: Writes go to a primary; reads are served from replicas.  
2. **Replication topology**: Master–slave, multi‑master, or quorum‑based (e.g., Raft).  
3. **Load balancing & sharding**: Distribute queries across replica clusters.  
4. **Consistency vs. latency**: Choose between eventual and strong consistency.  
5. **Failure handling & failover**: Automatic promotion, health checks, and monitoring.

Use the *CAP theorem* as a lens for deciding consistency levels; also apply *horizontal scaling* principles (scale‑out replicas) versus *vertical scaling* (larger machines).

**3️⃣ Step‑by‑step reasoning**

1. **Determine read/write ratio** – if reads dominate (common in ML inference), prioritize read replica capacity.  
2. **Choose replication protocol** – e.g., asynchronous replication for high throughput, synchronous only where correctness matters.  
3. **Calculate replica count** – start with 3–5 replicas to absorb traffic spikes and provide redundancy.  
4. **Plan sharding** – split data by key (e.g., user ID hash) so each replica handles a subset, reducing contention.  
5. **Implement load balancer** – round‑robin or consistent hashing across replicas; include health checks.  
6. **Monitor metrics** – latency, replication lag, CPU/memory usage; set alerts for threshold breaches.  
7. **Failover strategy** – automatic failover to a healthy replica if the primary goes down; ensure read consistency is acceptable.

**4️⃣ Common traps & wrong turns**

- Assuming replicas are “free” – they consume resources and can become bottlenecks.  
- Ignoring replication lag leading to stale reads that break ML model correctness.  
- Over‑sharding causing underutilized nodes and increased management overhead.  
- Neglecting cost of cross‑region replication when latency requirements differ.

**5️⃣ Sanity‑check & verbalize**

- Run through a *what‑if* scenario: “If traffic doubles overnight, will the current replica count keep latency < 200 ms?”  
- Verify that consistency choices align with business rules (e.g., user profile updates must be seen immediately).  
- Summarize the design in one paragraph to ensure clarity before diving into code or diagrams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
