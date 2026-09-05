---
qid: ing_30e999bf2d__fp__local
question: 'Explain: KV cache: the thing that eats your GPU — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 447
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:49:01-05:00'
sources: []
---

**Why a KV cache exists**

A Transformer decoder must multiply each new token by *all* past hidden states to compute self‑attention.  
Recomputing the full attention every step would cost \(O(n^2d)\) for sequence length \(n\).  
The trick is to pre‑compute and store the key (K) and value (V) tensors of all previous tokens once; then each new token only attends to this *cached* memory.  

**How it works**

For every layer, a tensor of shape \((B, L_{\text{max}}, d)\) holds K and V for the longest sequence ever seen in that batch.  
When decoding a new token, we:

1. Compute its Q vector.  
2. Multiply Q by the cached K to get attention scores.  
3. Weight the cached V by these scores and add the result.

Thus each step is \(O(L_{\text{max}}d)\) instead of recomputing \(L^2\).  

**GPU hunger**

The cache lives in GPU RAM, not VRAM that can be freed per batch.  
If you run a large‑batch inference with long sequences, the cache grows linearly:  
\( \text{Memory} \approx B \times L_{\max}\times 2d\times\text{bytes/float}\).  
This is why “KV cache eats your GPU” — it’s not an overhead but a necessity for fast decoding.

**Non‑obvious insight**

The cache *is* the only part that truly scales with sequence length.  
If you pre‑allocate the maximum \(L_{\max}\) per batch, subsequent inference steps become memory‑bound, not compute‑bound.  
Hence, to optimize GPU usage you must tune **batch size** and **\(L_{\max}\)** together—reducing one can free enough VRAM for a larger model or higher precision, yielding the biggest throughput gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
