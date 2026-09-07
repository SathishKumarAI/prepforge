---
qid: ing_72955afb65__faang__local
question: 'Explain: Most Recently Used (MRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 472
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:10:12-05:00'
sources: []
---

**Clarify**

> *What is MRU and why would a cache use it?*  
Assume we’re talking about an in‑memory key/value store that must evict entries when the size limit is reached. We want to understand how “Most Recently Used” differs from more common policies (LRU, FIFO) and its practical trade‑offs.

**Approach**

1. Review what MRU means: keep the *least* recently accessed items for eviction.  
2. Compare it with LRU/FIFO on hit/miss patterns.  
3. Discuss scenarios where MRU is beneficial (e.g., write‑heavy workloads, temporal locality of writes).  
4. Outline implementation details and complexity.

**Depth**

MRU evicts the entry that was accessed most recently—exact opposite of LRU. In a linked‑list or hash‑map+double‑linked list structure, the “head” holds the MRU item; on eviction we drop it instead of the tail (LRU).  
*Complexity*: O(1) for get/put and O(1) eviction if we maintain pointers to both ends.  
*Behavior*: Good when recent accesses are *unlikely* to be reused soon, such as streaming data or write‑only logs where each new item is “hot” but will not be read again. LRU excels when recent items have high reuse probability.

**Edge Cases**

- **Write‑heavy burst**: MRU keeps the newest writes in cache, preventing thrashing if they’re never read.  
- **Read‑heavy workload**: MRU performs poorly—recent reads keep getting evicted.  
- **Uniform access pattern**: Both LRU and MRU degrade to FIFO.

**Optimize & Communicate**

Explain that selecting MRU is a design choice tied to workload characteristics; profiling is essential. In practice, many systems expose the policy as a tunable parameter. I’d present empirical results (hit‑rate curves) and recommend starting with LRU, switching to MRU only when read/write imbalance justifies it. This shows clear reasoning, trade‑offs, and actionable guidance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
