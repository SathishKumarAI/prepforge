---
qid: ing_0957122f62__faang__local
question: 'Explain: You run 40 replicas of the same model behind a load balancer,
  and round-robin gives you a terrible prefix cache hit rate. Design the routing layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 460
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:06:13-05:00'
sources: []
---

**Clarify**

You have 40 identical inference nodes behind a LB.  
The request payload (e.g., user query) determines which *prefix* of the model’s cache should be used.  
Round‑robin distributes traffic uniformly, so many requests hit cold prefixes → low hit rate.  
Goal: keep each node warm on the most popular prefixes while still balancing load.

**Approach**

1. **Collect prefix popularity statistics** (e.g., via a lightweight counter per request).  
2. **Cluster nodes by prefix buckets** – map the top‑k prefixes to dedicated “hot” nodes, remaining prefixes to “warm” pool.  
3. **Hash‑based routing** for hot prefixes; fall back to round‑robin among warm nodes otherwise.  
4. **Dynamic rebalancing**: every N minutes recompute bucket assignments as popularity shifts.

**Depth**

- Use a consistent hash (e.g., Murmur32) on the prefix to map to a *bucket* ID.  
- Maintain two routing tables: `hotTable[prefix] → nodeID` and `warmList`.  
- When a request arrives, lookup `hotTable`; if miss, route to `warmList` via round‑robin.  
- Complexity: O(1) per lookup; rebalancing is O(P + N) where P = #prefixes, N = nodes.  
- Cache warm‑up can be triggered by a background prefetch job.

**Edge Cases**

- New unseen prefixes → fall back to warm pool until enough traffic builds statistics.  
- Sudden spike in a previously cold prefix → may still hit warm node until rebalancing occurs.  
- Node failure: hot mapping must redirect affected prefixes to another node; use health‑checks.

**Optimize & Communicate**

Explain that this hybrid routing keeps the most frequently used prefixes always cached (high hit rate) while preserving load balance for the rest. Mention potential improvements: adaptive thresholds, multi‑stage hashing, or using a distributed key‑value store for routing state to avoid single point of failure. Highlight trade‑offs: added complexity vs. significant cache hit improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
