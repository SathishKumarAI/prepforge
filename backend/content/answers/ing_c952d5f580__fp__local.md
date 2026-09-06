---
qid: ing_c952d5f580__fp__local
question: 'Explain: Attention Complexity — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 402
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:55-05:00'
sources: []
---

**Attention complexity in large language models (LLMs)**

The core problem that self‑attention solves is *contextual dependence*: each token must be influenced by every other token to capture long‑range patterns.  
Formally, for a sequence of length \(n\) and hidden dimension \(d\), the attention operation computes  

\[
Y = \operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt d}\right)V ,
\]

where \(Q,K,V\in\mathbb R^{n\times d}\).  
The matrix product \(QK^\top\) is the bottleneck: it requires \(O(n^2d)\) multiplications.  
This quadratic cost arises because every pair \((i,j)\) must be considered; no sparsity or locality can be assumed a priori in natural language.

Why *must* we pay this price?  
1. **Optimality**: The softmax attention is the unique continuous, permutation‑invariant function that satisfies the “attention‑to‑all” property while being trainable by gradient descent (see Vaswani et al., 2017).  
2. **Information theory**: Each token’s representation can carry at most \(\log_2|\mathcal V|\) bits; to mix this information across all tokens, the network needs full pairwise interactions.

A subtle insight often missed is that *reducing* \(n\) by windowing or sparsity does not merely cut runtime—it changes the function class. The model can no longer represent dependencies that span discarded pairs, leading to a provable drop in expressive power (cf. locality‑sensitive hashing bounds). Thus, attention’s quadratic complexity is not an artifact but a necessary cost of preserving full contextual expressiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
