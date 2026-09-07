---
qid: ing_70dfdc62c4__faang__local
question: 'Explain: How It Works — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 591
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:05-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the seven most common cache‑eviction policies used in ML pipelines (e.g., data loaders, feature stores). I’ll assume a distributed setting where memory is scarce and we need deterministic, low‑overhead strategies.

**Approach**  
1. List each policy with a one‑liner definition.  
2. For each, note when it shines, its computational cost, and a typical use‑case in ML.  
3. End with a quick comparison table to aid recall.

**Depth**

| Policy | Core Idea | Complexity | Typical ML Use |
|--------|-----------|------------|----------------|
| **LRU (Least Recently Used)** | Evict item not accessed for longest time. | O(1) with hash‑linked list. | Data loaders that stream batches; cache feature vectors. |
| **LFU (Least Frequently Used)** | Remove item with lowest access count. | O(log n) if using a heap; can be O(1) with counting bloom. | Feature stores where some features are hot. |
| **ARC (Adaptive Replacement Cache)** | Mix of LRU & LFU, self‑tuning. | O(1) amortized. | General purpose cache in model serving. |
| **LRFU (Least Recently/Frequently Used)** | Weighted blend of recency and frequency. | Similar to ARC. | Hybrid workloads where both recency and popularity matter. |
| **Random** | Pick a random entry to evict. | O(1). | Baseline, when eviction cost dominates. |
| **FIFO (First In First Out)** | Evict the oldest inserted item. | O(1) with queue. | Simple pre‑fetch buffers for sequential data pipelines. |
| **LFU+LRU hybrid** | Keep a small LFU “hot” list and LRU for the rest. | O(log n). | Large‑scale feature stores where a few features dominate access. |

**Edge Cases**  
- Highly skewed workloads can break simple FIFO or Random policies (cache thrashing).  
- Counting in LFU may overflow; use decay mechanisms.  
- ARC’s two queues can grow unbounded if not capped.

**Optimize & Communicate**  
When choosing, trade off *predictability* vs *simplicity*: LRU is fast and works well for sequential data; LFU shines when a few items dominate but incurs counting overhead. In production, start with LRU, monitor hit‑rate, then move to ARC or hybrid if hit‑rate plateaus.

This concise map lets interviewers see that I understand the mechanics, trade‑offs, and practical ML contexts—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
