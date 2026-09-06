---
qid: ing_bf6c96650d__fp__local
question: 'Explain: Estimate the KV-cache memory for serving Mistral 7B, and design
  the rolling-buffer cache that sliding-window attention enables.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 448
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:50:07-05:00'
sources: []
---

**KV‑cache size**

For a transformer layer with *H* heads, key/value dim *d_k*, and a sliding‑window of length *L*, each head stores an \(L\times d_k\) matrix for keys and the same for values.  
Total per‑token memory = \(2Hd_k \times \text{bytes/float}\).  
For Mistral‑7B:  

- \(H=32\), \(d_k=d_v=64\).  
- 16‑bit FP (half) → 2 bytes each.  

Memory per token ≈ \(2\times32\times64\times2 = 8\,192\) bytes ≃ **8 KiB**.  
With a context window of *N* tokens the KV cache occupies \(8N\) KiB, e.g. 2048 tokens → ~16 MiB per layer, 32 layers → ~512 MiB.  

**Rolling‑buffer design**

Sliding‑window attention allows us to keep only the last *L* positions in memory.  
Implement a circular buffer of size \(L\) for each head:  

1. **Indexing** – Use modulo arithmetic on token counter to overwrite the oldest slot.  
2. **Attention mask** – Precompute a binary matrix where entry *(i,j)* is 1 iff \(|i-j|<L\). This mask can be reused across tokens, saving per‑token computation.  
3. **Batching** – Stack buffers of *B* beams; the circular logic applies independently to each beam, enabling SIMD over heads and beams.  

*Non‑obvious insight:* The buffer’s modulo index is also a lightweight “time stamp.” By coupling it with an LRU policy on auxiliary metadata (e.g., token entropy), one can selectively refresh keys/values that are likely to be reused across prompts without increasing the physical cache size, thus improving throughput in multi‑prompt workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
