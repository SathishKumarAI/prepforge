---
qid: ing_590f3e1919__think__local
question: 'Explain: Redundancy & Replication — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 485
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:53:23-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - Identify what “Redundancy & Replication” means in a social‑media context (data availability, fault tolerance).  
   - Assume we’re designing Instagram’s photo storage layer, not the entire app.  
   - Decide on key constraints: read/write throughput, latency targets, cost limits, and geographic distribution.

**2️⃣ Adopt a layered design framework**  
   - **Data tier** → object store (S3‑like) + CDN.  
   - **Replication strategy** → synchronous vs asynchronous, primary‑secondary, or multi‑region quorum.  
   - **Consistency model** → eventual consistency for reads, strong consistency on writes to prevent stale thumbnails.

**3️⃣ Step‑by‑step reasoning**  
   1. *Write path*: client uploads image → edge CDN forwards to primary region.  
   2. *Store* in object store; generate a unique ID.  
   3. *Trigger replication jobs* to other regions (async).  
   4. *Update metadata* in a distributed key‑value store with a write‑once policy.  
   5. *Read path*: serve from nearest CDN cache; fall back to primary if missing.  
   6. *Failover*: if a region goes down, traffic is rerouted via DNS or global load balancer.

**4️⃣ Common traps to avoid**  
   - Assuming synchronous replication everywhere (increases latency).  
   - Ignoring the cost of multi‑region writes; use event sourcing for cheaper ops.  
   - Over‑engineering consistency—balance with user experience.  
   - Forgetting cache invalidation when metadata changes.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that read latency meets 100 ms target even during a regional outage.  
   - Confirm that write throughput (e.g., 10k uploads/s) can be handled by the replication pipeline.  
   - Walk through failure scenarios: primary region loss, CDN cache miss, network partition.  
   - Explain how each component contributes to redundancy (multiple copies) and replication (data propagation), tying back to Instagram’s requirement for high availability and low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
