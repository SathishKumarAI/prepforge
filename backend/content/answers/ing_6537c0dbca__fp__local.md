---
qid: ing_6537c0dbca__fp__local
question: Estimate the KV-cache memory to serve a 70B-class model at 128k context.
  What do you do when it doesn't fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 855
total_tokens: 1042
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:40:17-05:00'
sources: []
---

**Why KV‑cache matters**

A transformer’s forward pass needs, for each layer, *key* and *value* tensors of every token already generated.  
For a causal model the next‑token probability is computed as  

\[
P_{t+1}\propto \text{softmax}\bigl(Q_t K^\top / \sqrt{d_k}\bigr)V,
\]

so the entire history of keys/values must be kept until they are no longer needed.  
This is a *memory‑bounded* optimization problem: we want the smallest cache that still allows exact inference.

**Size estimate for a 70 B model (≈8 K hidden size)**  

| Item | Value |
|------|-------|
| Hidden dimension \(d_{\text{model}}\) | ~8192 |
| Keys + values per token | \(2 \times d_{\text{model}}\) = 16 384 floats |
| Float32 → 4 bytes | 64 KB per token |
| Context length | 128 k tokens |

\[
\text{Cache size} = 64\,\text{KB}\times 128\,000 \approx 8\,\text{GB}.
\]

So a single‑batch inference of a 70 B model with 128 k context would need ~8 GB just for KV.

**When it doesn’t fit**

1. **Sliding‑window attention (flash‑attention)** – keep only the most recent *W* tokens (e.g., 4 k).  
2. **Recompute‑on‑demand** – store a compressed “checkpoint” of hidden states and recompute keys/values for dropped tokens when needed.  
3. **Quantize/compress KV** – 8‑bit or even 4‑bit per element, or use product quantization to reduce size by ~8×.  
4. **Offload to fast NVMe / RAM disk** – swap out least‑recent keys/values while keeping a small in‑GPU buffer.

**Non‑obvious insight**

Because causal masking guarantees that once a token is more than *W* positions behind the current one it can never influence future outputs, we can *drop* its KV entries entirely. This turns the problem from “store everything” to “store only what will be used”, allowing dynamic memory management that scales with the effective attention window rather than raw context length.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
