---
qid: ing_5e8297987e__fp__local
question: 'Explain: Consistent hashing — Consistent Hashing Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 430
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:28-05:00'
sources: []
---

**Consistent hashing from first principles**

Suppose we must distribute data items to a set \(S\) of servers so that each item’s server assignment changes only when the topology of \(S\) changes (a node joins or leaves).  
Let \(h(x)\) be any hash function mapping an arbitrary key \(x\) and a node identifier \(n\) into the unit interval \([0,1)\). Think of this interval as a circle: each point on the circle belongs to the *first* server encountered when moving clockwise from that point.  

When a new server \(s_{\text{new}}\) is added, it receives all keys whose hash falls between its predecessor and itself. The expected fraction of keys affected equals \(\frac{1}{|S|+1}\), i.e., only \(O(1/|S|)\) of the data moves. Conversely, when a server leaves, only the keys that previously mapped to it are reassigned—again an \(O(1/|S|)\) fraction.  

This works because:

1. **Uniformity** – The hash spreads keys evenly over the circle.  
2. **Geometric locality** – Assigning keys by clockwise successor preserves continuity; only a contiguous arc moves when topology changes.  
3. **Load balance** – Expected load per server is \(\frac{1}{|S|}\); variance shrinks with virtual nodes.

A subtle insight many miss: the *expected* churn of keys upon any single node change is independent of the total number of keys—only a constant fraction moves. This guarantees that even in massive systems, rebalancing cost stays bounded, making consistent hashing ideal for distributed caching and sharding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
