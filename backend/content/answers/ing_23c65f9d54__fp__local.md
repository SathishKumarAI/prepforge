---
qid: ing_23c65f9d54__fp__local
question: 'Explain: Estimate the KV-cache memory for serving a large model, and explain
  how it constrains batch size and throughput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 440
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:21:32-05:00'
sources: []
---

**KV‑cache memory estimation**

A transformer layer stores *key* (K) and *value* (V) tensors for every token processed.  
For a model with *L* layers, hidden size *H*, sequence length *S* and batch size *B*, the raw KV tensor per layer is  

\[
2 \times B \times S \times H
\]

where the factor 2 accounts for K + V.  
With half‑precision (FP16) each element costs 2 bytes, so

\[
M_{\text{KV}} = 4\,B\,S\,H \;\text{bytes}
\]

Summing over *L* layers gives \(M_{\text{total}} = L \times M_{\text{KV}}\).

**Constraint on batch size and throughput**

GPU memory is finite (e.g., 24 GB). For a given *S* and *H*, the inequality

\[
B \le \frac{\text{Mem}_{\text{avail}}}{4\,S\,H\,L}
\]

holds. Thus, as *S* grows, *B* must shrink linearly to keep \(M_{\text{total}}\) below the memory budget. Throughput (tokens per second) is roughly proportional to *B × S*, so a larger sequence length can paradoxically reduce throughput if it forces *B* to drop too much.

**Non‑obvious insight**

The bottleneck is not just the raw size of K and V, but the *interleaved access pattern*: during self‑attention, each query token reads all keys/values from **every** layer. This results in a memory traffic that scales as \(O(L \times S^2)\). Even if \(M_{\text{total}}\) fits, cache misses can throttle performance. Thus, optimizing KV layout (e.g., interleaving layers or compressing per‑layer buffers) can yield significant speedups beyond simple memory budgeting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
