---
qid: ing_e188f9e639__fp__local
question: 'Explain: How it Works — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 639
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:59:31-05:00'
sources: []
---

**Cache eviction in machine‑learning pipelines is a classic *online optimisation* problem**: we have limited fast memory (RAM or GPU cache) and must decide which items (model weights, feature vectors, training batches) to keep so that future accesses incur minimal latency. The optimal policy depends on two competing signals:

| Signal | What it captures | Typical strategy |
|--------|------------------|-----------------|
| **Recency** | “Just used” → likely to be reused soon | LRU (Least‑Recently Used) |
| **Frequency** | “Used often” → high utility | LFU (Least Frequently Used) |
| **Predictive cost** | Expected future access pattern | ARC, NUR, Clock |

### 1. FIFO  
Evict the *first* item inserted. Simple but ignores locality; useful when items are uniformly random.

### 2. LRU  
Keep a stack of accesses; pop the bottom (least recently used). Optimal for workloads with strong temporal locality.

### 3. LFU  
Count hits per key; evict the lowest counter. Works when usage is *stable* over long periods but suffers from “stale” counters.

### 4. Random  
Pick an item uniformly at random. Surprisingly effective in highly dynamic, non‑local workloads because it avoids worst‑case clustering.

### 5. ARC (Adaptive Replacement Cache)  
Maintains two LRU lists—one for *recent* and one for *frequent* items—and adapts the split ratio online. Bridges FIFO/LRU and LFU.

### 6. NUR (Not‑Used‑Recently) / Clock  
Approximate LRU with a single bit per item. The “clock” hand scans, clears bits, and evicts when all are zero—cheap to maintain in GPU memory.

### 7. LRU‑K (k‑recency)  
Extends LRU by considering the *k*‑th most recent access. Captures deeper locality: an item accessed once a long time ago may still be valuable if it will be hit again soon.

---

#### Non‑obvious insight  
**The “cost of counting” is often higher than the cost of evicting**. In large‑scale ML, maintaining exact frequencies (LFU) or K‑th recency counters can dominate memory bandwidth and latency. Approximate schemes—like using a small sketch for LFU or a single reference bit for LRU—often give *near‑optimal* hit rates while keeping overhead negligible. Thus, the choice of eviction strategy is less about theoretical optimality and more about the *measurement cost* versus *access penalty*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
