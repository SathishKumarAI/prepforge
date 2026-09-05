---
qid: ing_19c8b38dc3__fp__local
question: 'Explain: Load Balancer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 378
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:01:10-05:00'
sources: []
---

**Why a load balancer is indispensable for Spotify’s streaming architecture**

At its core, Spotify must route millions of concurrent audio streams to the correct media server with *minimal latency* and *maximal reliability*. The fundamental problem is: **how do we map an incoming request to one of many identical servers such that no single server is over‑burdened while still guaranteeing instant access?**

A load balancer solves this as a *probabilistic distribution* problem.  
- Each client request arrives at the same entry point (the front‑end gateway).  
- The balancer assigns it to a backend instance according to a **hashing or weighted round‑robin** rule.  
- Because all media shards are replicated, any server can serve any track; thus the mapping is *stateless* and easily scalable.

From an optimization perspective, the goal is to minimise the *maximum queue length* across servers—an instance of load balancing in queuing theory. By using consistent hashing, Spotify reduces cache miss costs: a user’s playlist always hits the same set of shards, keeping the *entropy* of data access low and improving cache hit rates.

**Non‑obvious insight:**  
The balancer does more than distribute traffic; it *shields the system from sudden spikes*. When a popular track explodes in popularity (e.g., a viral playlist), the balancer can throttle or redirect traffic to underutilised nodes, effectively implementing **dynamic rebalancing** without requiring the servers themselves to detect congestion. This proactive approach keeps latency bounded even during flash crowds—a subtlety often overlooked when people assume “just use round‑robin.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
