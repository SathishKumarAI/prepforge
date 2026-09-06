---
qid: ing_bf8c712d8c__fp__local
question: 'Explain: KV Cache Sharing (Copy-on-Write) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 514
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:50:31-05:00'
sources: []
---

### KV Cache Sharing (Copy‑on‑Write) – Paged Attention

When a transformer processes a sequence, each layer stores the *key* K and *value* V tensors produced by every token in a **KV cache** so that subsequent tokens can attend to all past positions without recomputing them.  
The fundamental problem is **memory pressure**: for long‑running inference we would need \(O(L^2)\) memory if we duplicated the full KV matrix for each new prompt, but this grows linearly with context length \(L\).  

**Why sharing works:**  
1. **Linear algebraic invariance** – attention only needs dot products of the current query \(Q_t\) with all previous keys and weighted sums over their values. If two contexts share identical prefixes, those keys/values are mathematically identical; we can store one copy and reference it from both.
2. **Copy‑on‑Write (CoW)** – when a new token extends a prompt that shares its prefix, the cache simply *points* to the existing KV tensors. Only when a branch diverges (e.g., different continuation) do we create a new copy of the affected slice; unchanged slices remain shared.

**Paging ties it together:**  
- We partition the KV matrix into **pages** (contiguous blocks covering a range of positions).  
- Each page is reference‑counted.  
- When a branch needs to modify a value inside a page, CoW duplicates that *page*, not the entire cache.  
- This reduces fragmentation and memory overhead: most pages stay shared until a mutation occurs.

**Non‑obvious insight:**  
The key benefit of paging is **lazy eviction**: if we later discard older tokens (e.g., sliding window inference), we can drop whole pages that are no longer referenced by any branch, freeing bulk memory in one operation. This contrasts with naïve per‑token caches where eviction requires scanning every slice.

In short, KV cache sharing via CoW paging turns the quadratic cost of transformer attention into a linear, incremental process that respects both mathematical correctness and practical memory limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
