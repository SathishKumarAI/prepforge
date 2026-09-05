---
qid: ing_5e8297987e__star__local
question: 'Explain: Consistent hashing — Consistent Hashing Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 353
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:04-05:00'
sources: []
---

**Situation:**  
At my last company we were building a distributed cache for user session data. Our load balancer kept sending traffic to a set of cache nodes, but when we added or removed a node the entire key space had to be rehashed—every client lost its cached sessions and experienced 5‑second latency spikes.

**Task:**  
I needed to redesign the sharding scheme so that adding or removing a node would affect only a small fraction of keys, keeping cache warm and reducing churn while still balancing load evenly across nodes.

**Action:**  
I implemented consistent hashing. I mapped each cache node onto multiple points (virtual replicas) on a 32‑bit hash ring using SHA‑256. Each session key was hashed to the same ring; it then followed clockwise to the first node encountered. When we spun up a new server, I added its virtual replicas to the ring and only reallocated keys that fell between the new point and the next existing node—roughly 1/number_of_nodes of the data. For decommissioning, I removed the node’s replicas and redistributed its keys similarly. I also used a small in‑memory table to cache the nearest node for each key, cutting lookup time to microseconds.

**Result:**  
After deployment, node churn affected only ~3 % of active sessions on average, reducing cache miss rates from 12 % to 2 %. Latency during scaling events dropped from 5 s spikes to under 200 ms. I learned that careful placement of virtual replicas and a lightweight lookup cache can make consistent hashing production‑ready without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
