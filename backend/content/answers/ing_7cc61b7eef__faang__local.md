---
qid: ing_7cc61b7eef__faang__local
question: 'Explain: Inputs ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 631
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:05-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question:** “Explain: *Inputs ¶ — Paged Attention* – *vLLM*.”  
We’re asked to describe how vLLM implements paged attention for large‑scale language models.  
Assumptions I’d confirm:  
- The model uses transformer blocks with multi‑head self‑attention.  
- Inputs are tokenized and batched; the batch may contain sequences of varying lengths.  
- We target GPUs with limited memory, so we need to keep activations off‑device between layers.

## 2️⃣ Approach  
1. **Tokenization → embedding** (on‑device).  
2. **Paged attention kernel**: split the key/value tensors into fixed‑size *pages* stored in GPU memory.  
3. **Compute queries per head; load relevant pages on demand.**  
4. **Accumulate results, write back to CPU/host RAM if needed.**  

Explain why paging saves memory (only a subset of KV is resident) and how vLLM schedules page loading across CUDA streams.

## 3️⃣ Depth  
- *Page size* ≈ 32–64 kB; each page contains contiguous key/value vectors for one or more tokens.  
- For a sequence length **L** and head dimension **d**, we store **K, V ∈ ℝⁿ×d** in pages.  
- During attention: `softmax(Q·Kᵀ / √d) · V`. The kernel loads a page of K,V, computes partial dot products, then reduces across pages.  
- vLLM uses *paged memory* (`cudaMemAdvise`) to hint LRU eviction, and *zero‑copy buffers* so CPU doesn’t need to copy activations back until the final layer.  
- Complexity: still **O(L²·d)** per head, but memory footprint reduces from **O(L·d)** to **O(page_count · page_size)**, enabling inference of 8k+ token contexts on a single GPU.

## 4️⃣ Edge Cases  
- **Very short sequences** → overhead of paging outweighs benefit; fallback to dense attention.  
- **Page eviction thrashing** if batch size > cache capacity; need to tune `page_count`.  
- **Non‑uniform sequence lengths** cause load imbalance across streams—use dynamic batching.

## 5️⃣ Optimize & Communicate  
- **Prefetch pages** for the next layer while computing current layer to hide latency.  
- **Adaptive page sizing**: monitor GPU memory pressure and adjust at runtime.  
- When explaining, start with the problem (memory blow‑up), show how paging solves it, then detail the kernel flow, finish by quantifying savings and trade‑offs.  

> *Result:* vLLM’s paged attention lets us run trillion‑parameter models on commodity GPUs while keeping per‑token memory constant and inference latency predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
