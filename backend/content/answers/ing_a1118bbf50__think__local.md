---
qid: ing_a1118bbf50__think__local
question: 'Explain: Pros : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 687
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:43:44-05:00'
sources: []
---

### 1️⃣ Clarify the scope  
- **Audience**: Data‑science or ML engineers who build inference pipelines.  
- **Assumption**: “Cache” means an in‑memory store for pre‑computed tensors / model outputs that can be evicted when memory is tight.  

### 2️⃣ Mental model  
Treat a cache as a *finite‑capacity buffer* with two dimensions:
1. **Hit ratio** – how often requested data stays in the cache.  
2. **Eviction cost** – computational or latency overhead of rebuilding an item.  
Each strategy trades off these dimensions differently.  

### 3️⃣ Step‑by‑step reasoning  
| Strategy | Idea | Typical ML scenario | Pros |
|----------|------|---------------------|------|
| **FIFO (First In, First Out)** | Evict the oldest entry. | Simple inference queue where order matters less. | O(1) eviction, trivial implementation. |
| **LRU (Least Recently Used)** | Evict the least recently accessed item. | Embedding caches that see frequent “hot” tokens. | Keeps items with recent access patterns; good for bursty workloads. |
| **LFU (Least Frequently Used)** | Evict the item with lowest access count. | Caches of pre‑computed feature maps reused across epochs. | Captures long‑term popularity better than LRU. |
| **ARC (Adaptive Replacement Cache)** | Mixes LRU and LFU, learns which works best. | Mixed workloads where hotness changes over time. | Self‑tuning, often beats pure LRU/LFU. |
| **CLOCK** | Approximate LRU with a circular list and reference bits. | Real‑time inference on embedded devices. | Low overhead, near‑LRU performance. |
| **Random** | Pick any entry at random to evict. | When all items are roughly equal in value (e.g., cache of random seeds). | Extremely low cost, avoids worst‑case patterns. |
| **Segregated LRU / Multi‑Queue** | Partition cache into age buckets, promote/demote entries. | Large model checkpoints where some tensors stay longer than others. | Fine‑grained control, can target critical items for retention. |

### 4️⃣ Common traps  
- **Ignoring access patterns**: Choosing FIFO when data is highly skewed hurts hit ratio.  
- **Over‑engineering**: ARC or CLOCK add code complexity; if latency is already low, simple LRU may suffice.  
- **Memory fragmentation**: In Python/NumPy, large tensors can cause fragmentation; consider a *memory pool* instead of pure cache semantics.

### 5️⃣ Sanity‑check & communicate  
1. **Ask**: “What is the dominant cost? Memory pressure or recomputation latency?”  
2. **Map**: Pick strategy that minimizes that cost.  
3. **Explain**: “We’ll use LRU because our embedding cache shows strong locality; if we see a shift, ARC can adapt.”  

This framework lets you justify any eviction choice in an ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
