---
qid: ing_21efd1503c__faang__local
question: 'Explain: A KVCache-centric Disaggregated Architecture for LLM Serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 504
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:34-05:00'
sources: []
---

**Clarify**

You’re asking how a key‑value cache (KVCache) can be isolated from the compute layer in large‑language‑model (LLM) serving, so that inference scales without duplicating expensive memory on every GPU or CPU node.  
Assumptions: *We have multi‑GPU servers, each with local VRAM; the KVCache is the dominant memory consumer; we want low‑latency read/write to a shared cache across nodes.*

**Approach**

1. **Decouple storage and compute** – store all KV pairs in a high‑bandwidth distributed memory pool (e.g., NVMe‑based SSDs or HBM interconnect).  
2. **Cache tiering** – keep the most recent/active tokens on local GPU VRAM; evict older keys to the shared pool.  
3. **Address‑space mapping** – each compute node maps a slice of the global KV address space into its memory via RDMA or PCIe Gen4, enabling zero‑copy access.  
4. **Consistency & locking** – use fine‑grained per‑token locks or optimistic concurrency (compare‑and‑swap) to avoid stalls.

**Depth**

- *Read path*: compute node issues an RDMA read; if cache hit in local tier → immediate; else RDMA fetch from shared pool, then write back locally.  
- *Write path*: after a layer’s forward pass, new KV entries are written locally and asynchronously pushed to the shared store.  
- Complexity: O(1) per token for lookup/insert; bandwidth dominates latency. Trade‑off: additional network traffic vs. eliminating VRAM duplication.

**Edge Cases**

- High contention on popular tokens → burst RDMA traffic; mitigate with adaptive sharding or prefetching.  
- Node failure → stale pointers; require a checkpoint/recovery protocol.  
- Size mismatch (token size > cache line) → fragmentation; use padding or variable‑length encoding.

**Optimize & Communicate**

We can compress KV entries (e.g., quantization), batch RDMA ops, and employ hardware accelerators for hash lookups to push latency below 1 ms. In an interview, I’d sketch a diagram of the tiered cache, quantify bandwidth savings versus VRAM cost, and explain how this architecture scales linearly with model size while keeping inference throughput high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
