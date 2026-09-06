---
qid: ing_fc3b72a750__fp__local
question: 'Explain: Consistent Hashing — Consistenthashing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 329
total_tokens: 500
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:55:53-05:00'
sources: []
---

**Consistent hashing: a geometric‑probabilistic solution to load balancing**

Suppose we have *N* servers that must store keys (e.g., cache entries).  
When the set of servers changes—adding or removing one—the naïve rule “hash(key) mod N” forces almost every key to move.  The problem is: *how can we change only a small fraction of keys when the cluster size changes?*  

Think of the hash space as a circle (the unit interval wrapped around).  Each server owns an arc proportional to its capacity.  A key maps to the first server encountered clockwise from its hash value.  When a server leaves, only the keys on its arc move to the next server; when it joins, only the keys that fall into its new arc are reassigned.  This follows directly from the **invariance of order**: a key’s destination depends solely on its position relative to the nearest server clockwise.

The deeper principle is *minimal disturbance* under a *locality‑preserving* mapping—an optimization that keeps most assignments unchanged while respecting capacity constraints.  

**Non‑obvious insight:**  
Consistent hashing does **not** require the hash function to be “perfect.”  The key property is *uniformity of arc lengths*, not perfect randomness.  Thus a simple, cheap hash (e.g., CRC) suffices; the circle construction itself guarantees load balance and minimal redistribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
