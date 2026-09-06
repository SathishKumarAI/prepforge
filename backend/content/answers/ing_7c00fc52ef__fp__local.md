---
qid: ing_7c00fc52ef__fp__local
question: 'Explain: Compare Cache — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 518
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:13-05:00'
sources: []
---

**Why the “Integrated Cache” is essential**

The core problem is *latency* versus *consistency*: a single‑origin database cannot satisfy 40 M RPS without exceeding the round‑trip time of an HTTP request.  
Uber solves this by **decoupling read traffic from write traffic**: writes go to an online store (e.g., Cassandra), while reads hit a distributed cache that mirrors the most recent state.

---

### 1. *Cache as a Probabilistic Optimizer*

A cache is not a copy of the database; it stores only what will be requested next.  
Using **probability theory**, the cache keeps items with the highest *access probability* (often via LFU or LRU), so the expected read latency \(E[L]\) drops from

\[
E[L] = p_{\text{cache}} \cdot t_{\text{cache}} + (1-p_{\text{cache}})\cdot t_{\text{db}}
\]

to a value close to \(t_{\text{cache}}\).  
Because \(p_{\text{cache}}\) is tuned per key, the system *optimizes* bandwidth and CPU usage.

---

### 2. *Consistency via Eventual Propagation*

Rather than lock‑step replication (which would serialize reads), Uber adopts **asynchronous invalidation**: each write pushes an event to a message bus that updates cache nodes in parallel.  
This is essentially a *stochastic gradient descent* on the state space: each node independently converges toward the same distribution of data, guaranteeing eventual consistency while allowing high concurrency.

---

### 3. *Non‑obvious Insight*

Most people think “cache → latency” only. The real trick is that **the cache itself becomes part of the storage hierarchy**. By treating the cache as a *distributed key‑value store* with its own replication and sharding logic, Uber can scale reads linearly while keeping the write path simple.  
In effect, the cache is a *mini‑database* that knows how to be consistent with the master without being a bottleneck.

---

**Result:** 40 M RPS is achieved because every read bypasses slow disk I/O; only the rare miss forces a database hit, and even those hits are served from a highly parallel, fault‑tolerant cache layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
