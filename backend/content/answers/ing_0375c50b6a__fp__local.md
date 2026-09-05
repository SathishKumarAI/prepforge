---
qid: ing_0375c50b6a__fp__local
question: Explain Multi-head Latent Attention (MLA). What problem does it solve and
  what does it cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 415
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:12:20-05:00'
sources: []
---

**Multi‑Head Latent Attention (MLA)** is a lightweight mechanism that learns *where* to focus inside a latent representation before it reaches the decoder.  
Instead of treating every latent dimension equally—as in vanilla transformers—MLA first projects the encoder output \(z\in\mathbb{R}^{d}\) into several *latent query–key* pairs \((q_i,k_i)\). Each head computes an attention weight
\[
\alpha_{i}=\frac{\exp(q_i^\top k_i)}{\sum_j\exp(q_j^\top k_j)},
\]
and then aggregates the latent vectors as a weighted sum \(z'=\sum_i \alpha_i z\).  

### Why it works  
The core problem MLA tackles is *spurious correlations* in high‑dimensional embeddings. By learning head‑specific relevance scores, it enforces an **information bottleneck**: only the most predictive subspaces survive each head’s softmax. This is a form of *structured sparsity* that aligns with *Bayesian inference*: heads act as independent experts, reducing overfitting and improving generalization.

### Cost  
MLA adds \(O(hd)\) extra parameters for the query/key projections (with \(h\) heads), and an \(O(h^2)\) matrix in the softmax. For typical settings (\(h=4\), \(d=256\)), this is <1 % of a transformer’s weight budget, yet it yields 3–5 % higher perplexity on language tasks.

**Non‑obvious insight:** because attention weights are *global* over the latent vector, MLA can correct for *latent drift*—the phenomenon where encoder updates shift subspace alignments. By re‑attending to the most stable directions each step, it stabilizes training without costly layer normalization or recurrent gating.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
