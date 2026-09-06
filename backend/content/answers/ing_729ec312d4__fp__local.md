---
qid: ing_729ec312d4__fp__local
question: 'Explain: Summary — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 429
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:10-05:00'
sources: []
---

**Why a CDN?**  
At its core, the problem is latency: a user’s request must travel across a global network to reach a single origin server and back. The round‑trip time (RTT) grows with distance, hops, and congestion. A CDN turns this *global* service into many *local* services by replicating content on edge nodes that sit close to users.  

**Fundamental principle – locality of reference in networking.**  
In a network graph, the cost of an edge is roughly proportional to its length plus queuing delay. By placing replicas at strategically chosen vertices (e.g., Tier‑1 ISPs or major transit points), we minimize the maximum path length from any user to some replica. This is essentially solving a **k‑center problem**: choose k nodes to cover all users within minimal radius, subject to capacity constraints.  

**Replication strategy – “store what’s hot.”**  
Popular content follows Zipf’s law; a small fraction of objects accounts for most requests. A CDN therefore caches the *top‑N* items at every edge and uses an eviction policy (LRU, LFU) that approximates optimality under stationary request streams. This reduces the effective load on origin servers by turning a *single point of failure* into many independent caches, thereby improving both **availability** and **throughput**.

**Non‑obvious insight:**  
Many designers focus only on geographic placement, but the *geodesic clustering* of users matters more than raw distance. By grouping users with similar traffic patterns (e.g., a city’s evening peak), a CDN can pre‑warm caches for that cluster, achieving lower latency even when the physical edge is farther away.

**Bottom line:**  
A CDN is a distributed approximation to the optimal *k‑center* with capacity and popularity constraints, turning a long‑haul network into a set of locally‑optimal caches that dramatically cut RTT, reduce origin load, and increase fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
