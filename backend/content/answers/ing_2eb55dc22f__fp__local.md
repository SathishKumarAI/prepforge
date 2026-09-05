---
qid: ing_2eb55dc22f__fp__local
question: 'Explain: Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 388
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:44:05-05:00'
sources: []
---

**Eviction in Guava’s `Cache` – from first principles**

At its core a cache answers *“how many values can I keep while still being useful?”*  
The fundamental trade‑off is **space vs latency**: more items reduce miss rate but consume memory; fewer items save RAM but may thrash.  

Guava models this trade‑off with two orthogonal policies:

1. **Maximum weight (size)** – a *budget* that the cache cannot exceed.  
2. **Expiry rules** – time‑based removal of stale entries.

When an insertion would violate the budget, Guava must decide which existing entry to evict. The choice is governed by a *least‑recently‑used* (LRU) heuristic, but LRU is not a magic number; it is derived from **online paging theory**: the optimal offline algorithm (MIN) cannot be implemented without future knowledge, so we approximate with an online strategy that guarantees good worst‑case performance.  

The eviction algorithm runs in *O(1)* amortised time by maintaining a doubly linked list of entries ordered by last access. When the budget is exceeded, the tail entry (least recently used) is removed until the weight constraint holds again.

**Non‑obvious insight:**  
Eviction is not purely about recency; it also respects *weight*. If an entry’s weight is huge, it can displace many smaller entries in a single eviction step. This “size‑aware LRU” ensures that the cache remains within budget even when individual items vary wildly in size—a nuance often overlooked when people assume uniform weights.

In short, Guava’s eviction is a lightweight, online approximation of the optimal paging problem, tuned to real‑world memory constraints and variable entry sizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
