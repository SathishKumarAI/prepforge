---
qid: ing_b991a296cf__think__local
question: 'Explain: When Not to Shard — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 462
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:11:58-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- *What is “sharding” in this context?* (horizontal partitioning of data across machines)  
- *Which ML scenario are we addressing?* (training vs inference, data‑centric vs model‑centric)  
- *Assume a typical distributed system with multiple nodes and a shared datastore.*

**2. Adopt a mental framework**  
Use the “trade‑off triangle” (Latency ↔ Consistency ↔ Partition tolerance) and overlay it with *ML‑specific* concerns: data volume, feature sparsity, model size, inference latency, and update frequency.

**3. Step‑by‑step reasoning**  
1. Identify the **bottleneck**: Is it data read/write speed, memory pressure, or CPU/GPU load?  
2. Map that bottleneck to sharding’s strengths/weaknesses (e.g., sharding reduces per‑node I/O but adds coordination overhead).  
3. Consider *data locality*: do models need features from many shards? If yes, sharding hurts inference latency.  
4. Evaluate *update patterns*: frequent writes favor sharding; batch‑only training may not.  
5. Check consistency needs: real‑time predictions often tolerate eventual consistency, whereas training requires strict ordering.

**4. Common traps to avoid**  
- Assuming “more shards = better” without accounting for cross‑shard joins.  
- Ignoring the cost of sharding keys that change over time (e.g., user IDs).  
- Overlooking that sharding may not help when a single node already meets throughput.

**5. Sanity‑check & verbalize**  
- Re‑state the problem in plain language: “We’ll shard only if the data volume or write load exceeds what one machine can handle, and we can tolerate some added latency for cross‑shard lookups.”  
- Verify against edge cases (e.g., tiny models on a single node) to ensure the conclusion holds.  

Use this process whenever you’re deciding whether sharding is appropriate in an ML system design interview or real‑world architecture review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
