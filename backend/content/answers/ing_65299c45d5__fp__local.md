---
qid: ing_65299c45d5__fp__local
question: 'Explain: Concepts ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 365
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:40:06-05:00'
sources: []
---

**Paged Attention – the memory‑aware core of vLLM**

The fundamental problem is that transformer models need to access *every* token in a prompt when computing self‑attention, but modern GPUs can only hold a fraction of the full attention matrix in fast on‑chip memory. If we naïvely stream tokens one by one, we incur \(O(N^2)\) memory accesses and lose parallelism.

*vLLM* solves this by *partitioning* the key–value tensors into **pages** that fit in GPU RAM. Each page contains a contiguous block of hidden states (e.g., 512 or 1024 tokens). During inference, only the pages required for the current query token are loaded; others remain on host memory and are fetched lazily via efficient zero‑copy DMA. This turns the quadratic cost into a *sparse* access pattern: we pay \(O(P \times Q)\) where \(P\) is the number of pages actually accessed, not the total sequence length.

The deeper principle is **locality optimization**—keeping hot data close to the compute core while still enabling full‑sequence attention. By treating each page as an *independent kernel launch*, vLLM exploits GPU warp parallelism and reduces register pressure. A non‑obvious insight: because transformer attention is *softmax‑normalized*, missing a small fraction of keys can be compensated by re‑normalizing on the fly, allowing aggressive page eviction without biasing the output distribution.

In short, paged attention turns an intractable memory problem into a tractable streaming one, preserving exact inference while scaling to tens of billions of parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
