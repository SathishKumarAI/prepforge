---
qid: ing_a1118bbf50__fp__local
question: 'Explain: Pros : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 561
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:48:12-05:00'
sources: []
---

**Cache‑eviction in machine learning systems**  
When a model trains on billions of examples, data must be fetched from slower storage into RAM or GPU memory. The *cache* is the fast buffer; when it fills, we must decide which items to discard so that future accesses hit as often as possible. This is an online optimization problem: minimize miss‑rate under capacity constraints.

| Strategy | Core idea | Why it tends to work |
|----------|-----------|----------------------|
| **LRU (Least Recently Used)** | Evict the item whose last access was farthest in the past. | Recent data are likely to be reused soon; a simple stack property guarantees optimality for *stack‑based* policies. |
| **LFU (Least Frequently Used)** | Remove the item with the lowest hit count. | Captures long‑term popularity, useful when access patterns have heavy tails. |
| **FIFO (First In First Out)** | Drop the oldest inserted entry. | Works well when data streams are uniform and new items are as likely to be reused as old ones. |
| **Random** | Pick a random victim. | Provides a low‑overhead baseline; surprisingly effective when workload is highly unpredictable. |
| **ARC (Adaptive Replacement Cache)** | Maintains two LRU lists—one for recent, one for frequent hits—and adapts their sizes on the fly. | Marries locality of reference with frequency without manual tuning. |
| **Belady’s MIN** | Evict the item that will be accessed farthest in the future (offline optimum). | Gives theoretical upper bound; useful as a benchmark or for predictive caching. |
| **Clock (Second‑Chance)** | Circular list, give each entry a “second chance” bit before eviction. | Near‑LRU with lower bookkeeping cost, good for hardware constraints. |

**Deep insight:**  
All these policies are *greedy* approximations to the same underlying optimization: minimize expected future misses given a stochastic request sequence. The key is that cache size acts as a *regularizer*—too small and you overfit to short‑term patterns; too large and you waste resources on rarely used data. Balancing recency vs frequency (ARC) is essentially balancing bias‑variance trade‑off in an online setting, a principle that extends far beyond caching into adaptive learning rates, curriculum design, and active sampling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
