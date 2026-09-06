---
qid: ing_d65326ae13__fp__local
question: 'Explain: Title: Ring Attention with Blockwise Transformers for Near-Infinite
  Context'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 551
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:50-05:00'
sources: []
---

**Ring Attention with Blockwise Transformers for Near‑Infinite Context**

The core problem is that vanilla transformers compute an attention matrix \(A_{ij}=q_i^\top k_j\) over all token pairs in a sequence of length \(N\). This requires \(\mathcal O(N^2)\) time and memory, which quickly becomes infeasible when the context grows beyond a few thousand tokens.  

*First‑principle derivation:*  
Consider an *infinite* stream of tokens arriving sequentially. At any time we must decide how much each past token influences the current prediction. If we insist on exact attention over all history, we would need to store every key–value pair forever—impossible in practice. However, if we assume that influence decays with distance (a common empirical observation), then the *effective* receptive field is bounded: only a recent window \(W\) of tokens matters significantly.  

We formalize this by partitioning history into contiguous blocks of size \(B\). For each block we compute an aggregated “block‑key” and “block‑value”, e.g., via pooling or a lightweight attention head. The current token attends to:
1. Its local window (full pairwise attention within the last \(W\) tokens).
2. All preceding blocks through their compressed representations.

This yields **ring attention**: the block keys form a circular buffer that “rings” around the current context, always keeping the most recent \(L=B\times R\) tokens (where \(R\) is the number of retained rings). The cost becomes \(\mathcal O(BW + B^2R)\), linear in \(N\) asymptotically.  

*Deeper insight:*  
The ring acts as a *recursive sufficient statistic*. Each block’s compressed key/value pair captures all information that older tokens contribute to the current prediction, **provided** the model is trained with an objective that encourages such compression (e.g., by penalizing reconstruction error of longer‑range dependencies). Thus, the architecture trades exactness for a principled summary that preserves long‑range context without ever storing it verbatim.  

*Non‑obvious takeaway:*  
Because block keys are reused across multiple future tokens, training the model to **predict** the next token from a *fixed‑size* representation of each block implicitly enforces a form of *information bottleneck*: only the most salient features survive compression. This self‑regularization can improve generalization beyond what naïve truncation offers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
