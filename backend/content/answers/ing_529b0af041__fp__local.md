---
qid: ing_529b0af041__fp__local
question: 'Explain: KV Cache Tiling — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 461
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:00:52-05:00'
sources: []
---

**KV Cache Tiling – the short‑term context trick**

When a transformer runs in *autoregressive* mode it keeps two tensors per layer:  
\(K\in \mathbb{R}^{L\times d}\) and \(V\in \mathbb{R}^{L\times d}\), where *L* is the number of tokens already generated.  
For each new token *t*, attention needs all previous keys/values, so the naive cost is
\(O(Ld)\) per step and memory grows linearly.

The key insight is that the *soft‑max* in self‑attention is **local**: for a window of width *W* (the short‑term context), only the most recent *W* keys/values significantly influence the current token. Thus we can split the cache into **tiles** of size \(W\) and, at each step, compute attention only on the active tile.

Mathematically, we write
\[
\text{attn}(q_t)=\operatorname{softmax}\!\Big(\frac{q_t K^\top}{\sqrt d}\Big)V
      \approx \operatorname{softmax}\!\Big(\frac{q_t K_{\text{tile}}^\top}{\sqrt d}\Big)V_{\text{tile}},
\]
where \(K_{\text{tile}}\) and \(V_{\text{tile}}\) contain the last *W* rows.  
This reduces both compute (from \(O(Ld)\) to \(O(Wd)\)) and memory bandwidth.

**Non‑obvious insight:**  
Because tiles are contiguous in memory, GPU kernels can exploit **coalesced loads** and **shared‑memory reuse**, turning what looks like a mere sub‑sampling into a *dramatically faster* operation. The reduction in cache misses outweighs the small loss of global context, yielding near‑linear latency scaling while preserving accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
