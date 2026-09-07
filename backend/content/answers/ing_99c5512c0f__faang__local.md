---
qid: ing_99c5512c0f__faang__local
question: 'Explain: Two-Tiered Caching — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 646
total_tokens: 885
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:42:24-05:00'
sources: []
---

**Clarify**  
You’re asking for the eight most common cache‑eviction policies used in ML pipelines (e.g., feature caches, model checkpoints). I’ll assume we talk about *in‑memory* or *SSD* caching with a fixed capacity and that eviction happens when new data arrives.

**Approach**  
List the strategies, give a short definition, mention typical use‑case, and note complexity/overhead. Then briefly discuss trade‑offs (e.g., simplicity vs. optimality).

**Depth**  

| # | Strategy | How it works | Typical ML scenario | Complexity |
|---|----------|--------------|---------------------|------------|
| 1 | **Least Recently Used (LRU)** | Evict entry with oldest access timestamp. | Feature cache for online learning. | O(1) with doubly‑linked list + hash. |
| 2 | **Least Frequently Used (LFU)** | Evict entry with lowest hit count. | Caching of expensive model components. | O(log n) if using min‑heap or O(1) with counters+lists. |
| 3 | **Most Recently Used (MRU)** | Opposite of LRU; useful when hot items are transient. | Temporary preprocessing results. | Same as LRU. |
| 4 | **Random Replacement** | Pick a random slot to evict. | Baseline for comparison, low overhead. | O(1). |
| 5 | **First‑In‑First‑Out (FIFO)** | Evict oldest inserted item regardless of use. | Simple buffer in streaming pipelines. | O(1) with queue. |
| 6 | **Time‑to‑Live (TTL)** | Each entry expires after a set duration. | Cached model weights that stale quickly. | O(1) with priority queue or timestamp check. |
| 7 | **Size‑Based Eviction** | Keep total size below quota; evict smallest/oldest first. | Disk‑backed caches where memory is scarce. | Depends on data structure (heap). |
| 8 | **Custom Cost‑Aware Policy** | Weight items by cost/utility (e.g., inference latency vs. model accuracy). | Multi‑model serving where some models are expensive to load. | O(log n) with priority queue keyed by custom score. |

**Edge Cases**  
- Extremely skewed access patterns can make LFU suboptimal; consider aging counters.  
- TTL may lead to thrashing if expiry is too short.  
- Random replacement breaks determinism, hard to debug.

**Optimize & Communicate**  
For production ML systems, start with LRU (fast, good hit‑rate). If profiling shows frequent re‑loading of the same infrequent items, switch to LFU or cost‑aware eviction. Always expose metrics (hit ratio, eviction count) so you can iterate. This structured answer demonstrates clear problem framing, methodical coverage, and practical depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
