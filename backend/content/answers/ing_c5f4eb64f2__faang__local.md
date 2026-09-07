---
qid: ing_c5f4eb64f2__faang__local
question: 'Explain: Stage 3: Add Caching (100K-500K users) — Scalability | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 444
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:21:21-05:00'
sources: []
---

**Clarify**  
You’re asked how to scale a machine‑learning inference service for 100 k–500 k concurrent users, focusing on caching. I’ll assume: *stateless prediction API*, *latency <50 ms*, *model size ~200 MB*, *updates every few days*.  

**Approach**  
1. Identify hot predictions (user‑specific or global).  
2. Cache the **input→output** mapping rather than raw model weights.  
3. Use a multi‑tier cache: in‑memory LRU for most frequent items, distributed Redis/MemoryCache for larger set.  
4. Invalidate on model update or TTL.  

**Depth**  
- Compute per‑request hash of feature vector → key.  
- If hit, return cached output; else run inference, store result.  
- Cache size: 10 k entries * 1 KB ≈ 10 MB per node.  
- With 4 nodes, 40 MB fits in RAM.  
- Use consistent hashing to spread keys across nodes; keep replication factor 2 for fault tolerance.  
- Complexity: O(1) cache lookup + O(model‑time) on miss.  
- Trade‑off: higher memory → lower latency; more nodes → higher cost but linear scaling.

**Edge Cases**  
- Cold start: first request per user triggers miss.  
- Feature drift: hash collisions if features change format.  
- Cache stampede: many misses for same key—use “singleflight” or lock.  
- Model updates: purge relevant keys to avoid stale predictions.

**Optimize & Communicate**  
Explain that caching reduces inference load by >90 % for hot data, keeps per‑node latency <30 ms, and scales linearly as we add cache nodes. Highlight monitoring (hit rate, eviction count) and automated scaling triggers based on hit ratio thresholds. This shows clear trade‑offs, complexity analysis, and a production‑ready plan—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
