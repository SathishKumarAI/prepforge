---
qid: ing_bba2a6d0fe__think__local
question: 'Explain: Google System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 484
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:21:18-05:00'
sources: []
---

**1️⃣ Clarify & Set Assumptions**  
- Identify the *core problem*: designing a distributed search engine at Google scale (e.g., indexing, query routing).  
- Assume typical FAANG constraints: massive data volume, low latency, high availability, and multi‑region deployment.  

**2️⃣ Adopt a Design Framework**  
- Use the classic **“System Design” stack**:  
  1. *Requirements* → functional vs. non‑functional (throughput, consistency).  
  2. *High‑level architecture*: crawler → indexer → storage → query service.  
  3. *Data flow & key components*: sharding, replication, caching, load balancing.  
  4. *Fault tolerance & scaling strategies*.  

**3️⃣ Step‑by‑Step Reasoning**  
- Start with the **crawler**: breadth‑first vs depth‑first, politeness policies.  
- Move to **indexer**: tokenization, inverted index, compression, shard placement.  
- Design **storage layer**: use a distributed log (e.g., Bigtable) + secondary indexes.  
- Build the **query service**: request routing via consistent hashing, query rewriting, ranking algorithms.  
- Add **caching layers** (Memcached/Redis), CDN for static content.  
- Address *consistency* with eventual consistency for index updates; use Paxos/Raft for critical config changes.  

**4️⃣ Avoid Common Pitfalls**  
- Don’t ignore *latency budgets*: keep the critical path as short as possible.  
- Beware of “single‑point‑of‑failure” in load balancers or master nodes.  
- Skip over data skew: ensure even shard distribution and hot‑spot mitigation.  

**5️⃣ Sanity‑Check & Communicate**  
- Verify *throughput*: estimate requests per second, size of index shards, replication factor.  
- Test edge cases: sudden traffic spikes, node failures, data corruption.  
- Explain trade‑offs clearly: e.g., higher replication → better availability but more storage cost.  

Repeat this loop until the design satisfies all constraints and can scale to billions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
