---
qid: ing_8c638b3b29__faang__local
question: 'Explain: RR (Random Replacement) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 664
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:48-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise description of the **Random Replacement (RR)** cache‑eviction policy and an overview of the eight most common eviction algorithms used in practice. I’ll assume we’re talking about *write‑back* caches with a fixed size, LRU‑like policies, and that “top 8” refers to the classic set.

**Approach**  
1. Define RR and its basic operation.  
2. List the eight strategies: LRU, MRU, LFU, Random (RR), Clock, ARC, TinyLFU, and NUR.  
3. For each give a one‑sentence description, typical use case, and complexity.

**Depth**

| Strategy | Core Idea | Typical Use | Complexity |
|----------|-----------|-------------|------------|
| **LRU** | Evict least recently used block. | General purpose. | O(1) with doubly linked list + hash. |
| **MRU** | Evict most recently used block (opposite of LRU). | Write‑back caches where recent writes are unlikely to be reused. | Same as LRU. |
| **LFU** | Evict least frequently used block. | Workloads with strong temporal locality. | O(log N) or amortized O(1) with counters. |
| **Random (RR)** | Pick a victim uniformly at random. | Low‑overhead, no metadata; good when hit patterns are unpredictable. | O(1). |
| **Clock** | Approximate LRU using reference bits in a circular buffer. | Hardware caches; reduces pointer chasing. | O(1) amortized. |
| **ARC** (Adaptive Replacement Cache) | Maintains two LRU lists (recent & frequency) and adapts to workload. | Web servers, OS page tables. | O(1). |
| **TinyLFU** | Uses a Bloom filter + frequency counter; combines LFU with a recent list. | Memory‑constrained systems. | O(1). |
| **NUR** (Not-Used Recently) | Evicts blocks that have neither been used nor referenced recently; a hybrid of LRU and MRU. | Systems with mixed access patterns. | O(1). |

**Edge Cases**  
*RR* can lead to “stale” data staying in cache if the random draw repeatedly hits non‑hot entries. In highly skewed workloads, RR’s performance degrades compared to LFU/LRU. Testing should include synthetic workloads (uniform vs Zipfian) and real traces.

**Optimize & Communicate**  
Explain that *Random Replacement* is often chosen when metadata overhead must be minimal or when the cache size is tiny; its simplicity allows for fast hardware implementation. Contrast it with LRU’s higher hit rates but O(1) pointer updates, and LFU’s better accuracy at the cost of counter maintenance. Conclude by highlighting that in modern systems, hybrid schemes like ARC or TinyLFU often outperform pure RR while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
