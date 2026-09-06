---
qid: ing_acf1c5e4a2__fp__local
question: 'Explain: Estimate the KV-cache memory for a 3B on-device model at 4k context,
  and name the levers that shrink it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 777
total_tokens: 966
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:12:29-05:00'
sources: []
---

**KV‑cache size from first principles**

A transformer layer stores, for every head, a *key* and a *value* vector of length \(d_{\text{head}}\).  
With \(L\) layers, \(H\) heads per layer, context length \(T\), and an 16‑bit precision:

\[
\text{KV bytes}=2\,(\text{K+V}) \times d_{\text{head}} \times H \times L \times T .
\]

For a typical 3 B model  
* hidden size ≈ 2048 → \(d_{\text{head}} = 64\) (32 heads)  
* layers \(L \approx 24\)

Plugging in:

\[
2\times64\times32\times24\times4000\times2\text{B}\;\approx\;7.6\times10^{8}\text{ B}\;\approx\;0.8\,\text{GB}.
\]

So a 4 k‑token KV cache is ≈ 800 MiB.

**Levers that shrink it**

| Lever | How it reduces the product |
|-------|---------------------------|
| **Lower‑precision formats (fp16 → bf16 or int8)** | halves or quarters the per‑element byte count. |
| **Reduce head count or head size** | fewer heads and smaller \(d_{\text{head}}\) cut the \(H\cdot d_{\text{head}}\) term. |
| **Sparse / block‑sparse attention** | only a fraction of keys/values are stored for each token. |
| **Rotary or relative embeddings** | eliminate the need to cache positional encodings, shaving off extra memory. |
| **Dynamic context compression (e.g., key/value pruning)** | keep only salient tokens in the KV buffer. |

*Non‑obvious insight*: **The dominant cost is not the number of layers but the *product* \(H\cdot d_{\text{head}}\).** Even a modest reduction in head count can outweigh a large precision drop, because each layer multiplies that term by \(L\) and \(T\). Thus, carefully balancing head design often yields more cache savings than merely quantizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
