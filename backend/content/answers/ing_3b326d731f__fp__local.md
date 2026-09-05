---
qid: ing_3b326d731f__fp__local
question: Explain FlashAttention's core idea. What does it optimise, and what doesn't
  it change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 482
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:10:39-05:00'
sources: []
---

**FlashAttention’s core idea**

At its heart FlashAttention tackles the *quadratic* cost of standard self‑attention: every query attends to all keys, so memory traffic and compute grow as \(O(n^2)\). The algorithm rewrites the softmax attention in a streaming, cache‑friendly way. Instead of materialising the full \(\mathbf{QK}^\top\) matrix, it processes one token (or a small block) at a time, accumulating the numerator \(\sum_k e^{q_i k_j}\!k_j\) and denominator \(\sum_k e^{q_i k_j}\) for each query \(i\). These partial sums are kept in registers or shared memory; when the next key arrives, they are updated on‑the‑fly. This eliminates the need to store intermediate attention maps, cutting memory bandwidth from \(O(n^2)\) to \(O(n)\), while keeping arithmetic identical.

**What it optimises and what stays unchanged**

*Optimised:*  
- **Memory traffic:** FlashAttention avoids writing/reading the full attention matrix, reducing global‑memory accesses by an order of magnitude.  
- **Cache utilisation:** By streaming keys through registers, data reuse is maximised; each key contributes to all queries in a single pass.

*Unchanged:*  
- **Algorithmic result:** The computed \(\mathbf{Y} = \text{softmax}(\mathbf{QK}^\top)\mathbf{V}\) remains exactly the same as vanilla attention.  
- **Numerical stability tricks (e.g., max‑subtraction):** FlashAttention still applies the usual stabilisation to prevent overflow.

**Deeper insight**

The non‑obvious point is that *the softmax denominator can be updated incrementally* because it is a simple sum over exponentials. Many people assume that only the numerator needs streaming; recognising that the denominator shares the same structure unlocks the full \(O(n)\) bandwidth saving. This incremental view turns the quadratic attention into a linear‑time “online” algorithm, revealing a hidden one‑dimensional optimisation problem within the high‑dimensional matrix operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
