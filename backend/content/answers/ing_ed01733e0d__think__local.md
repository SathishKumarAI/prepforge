---
qid: ing_ed01733e0d__think__local
question: 'Explain: Implement scaled dot-product attention with a causal mask in NumPy.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 658
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:39:38-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
- *What is asked?* We need to build the scaled‑dot‑product attention routine that accepts queries \(Q\), keys \(K\), values \(V\) and applies a causal (future‑masking) mask.  
- *Assumptions:* All tensors are 3‑D NumPy arrays of shape \((B, T, D)\); we’ll work in float32; no GPU acceleration; the causal mask is a lower‑triangular binary matrix.

**2️⃣ Adopt a mental model / framework**  
- **Linear algebra view:** compute scores \(S = QK^T / \sqrt{d_k}\).  
- **Masking view:** set future positions to \(-\infty\) before softmax.  
- **Implementation steps:** (a) reshape for batched matrix multiplication, (b) generate mask once per sequence length, (c) apply mask efficiently using broadcasting.

**3️⃣ Step‑by‑step reasoning toward code**  

| Step | Action | Reasoning |
|------|--------|-----------|
| 1 | Compute raw scores: `scores = np.matmul(Q, K.transpose(0,2,1)) / sqrt(d_k)` | Standard dot‑product scaled. |
| 2 | Build causal mask: `mask = np.tril(np.ones((T,T)))` then expand to `(B, T, T)`. | Lower‑triangular keeps past and current tokens. |
| 3 | Convert mask to large negative number: `scores_masked = np.where(mask==0, -1e9, scores)` | Softmax will ignore future positions. |
| 4 | Compute attention weights: `weights = softmax(scores_masked, axis=-1)`. | Normalized probabilities over keys. |
| 5 | Apply to values: `output = np.matmul(weights, V)` | Weighted sum of values. |

**4️⃣ Common traps & how to avoid them**  
- *Broadcasting errors:* Ensure mask shape matches scores; use `np.newaxis` or `expand_dims`.  
- *Numerical overflow:* Use a large negative constant (e.g., \(-1e9\)) instead of `-inf` for stability.  
- *Softmax axis confusion:* Softmax must be over the key dimension (`axis=-1`).  
- *Data types:* Mixing float32 and float64 can slow down; keep consistent dtype.

**5️⃣ Sanity‑check & communicate clearly**  
- Verify with a toy example: small batch, known Q/K/V, compare against PyTorch’s `nn.MultiheadAttention` with causal mask.  
- Print shapes after each step to catch mismatches early.  
- Explain the logic in comments or documentation: why we scale by \(\sqrt{d_k}\), why masking is needed for autoregressive models, and how broadcasting keeps code concise.

By following this structured thought process you can implement a robust, readable NumPy version of causal scaled‑dot‑product attention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
