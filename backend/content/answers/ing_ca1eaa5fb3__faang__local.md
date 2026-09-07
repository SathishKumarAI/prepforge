---
qid: ing_ca1eaa5fb3__faang__local
question: 'Explain: The 80/20 Rule — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 434
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:29:45-05:00'
sources: []
---

**Clarify**  
You’re asking how the “80/20 rule” (Pareto principle) justifies caching in a system‑design context: *most requests hit a small set of data*. Confirm that we’re talking about read‑heavy workloads, latency sensitivity, and cost‑efficiency.

**Approach**  
1. **Profile traffic** → identify hot keys / frequent queries.  
2. **Choose cache tier** (in‑memory vs distributed).  
3. **Define invalidation strategy** (write‑through, write‑around, TTL).  
4. **Measure hit ratio & latency** to prove 80/20.

**Depth**  
- *Cache as a read‑path accelerator*: If 80 % of reads touch 20 % of the data, keeping that slice in RAM cuts latency from ~200 ms to <5 ms and frees DB resources.  
- *Implementation*: Use Redis or Memcached; key = query hash + params.  
- *Consistency*: Write‑through ensures updates propagate immediately; write‑around can batch writes but risks stale reads until TTL expires.  
- *Complexity*: O(1) average lookup; memory cost proportional to hot slice size; eviction via LRU/LFU.

**Edge Cases**  
- Cold start: first 20 % of requests miss → fallback to DB.  
- Skewed data (e.g., a single “hot” key) can saturate cache.  
- Cache stampede: guard with locking or request collapsing.

**Optimize & Communicate**  
Start with a small, monitored pilot; iterate TTLs and eviction policies based on observed hit ratios. Explain to interviewers that caching turns an I/O‑bound bottleneck into a CPU‑bound one, aligning with the 80/20 rule to deliver scale at lower cost. This structured reasoning shows clear problem framing, practical design steps, technical depth, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
