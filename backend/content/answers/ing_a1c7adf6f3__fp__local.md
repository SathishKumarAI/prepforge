---
qid: ing_a1c7adf6f3__fp__local
question: 'Explain: Walk me through what happens inside a single transformer decoder
  block.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 785
total_tokens: 958
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:49:49-05:00'
sources: []
---

## Inside a Transformer Decoder Block – From First Principles

A decoder block is a *self‑normalizing, locally recurrent* map that turns an already‑generated sequence of embeddings \(x_{1:t}\) into a new representation ready for the next token.  
The block solves two optimisation problems simultaneously:

| Problem | Why it must be solved |
|---------|-----------------------|
| **Contextualising** each token with all previous tokens (self‑attention). | Language is non‑stationary: the probability of the next word depends on *all* earlier words, not just the last one. |
| **Injecting external knowledge** from a source sequence \(y_{1:s}\) (cross‑attention). | Decoding often conditions on another modality (e.g., an image or a prompt). |

### Step 1 – Masked Multi‑Head Self‑Attention  
For every token \(x_i\), we compute queries, keys and values by linear projections:

\[
Q = xW_Q,\; K = xW_K,\; V = xW_V .
\]

The attention weight between positions \(i\) and \(j\) is

\[
a_{ij} = \frac{\exp\!\left(\frac{q_i^\top k_j}{\sqrt{d_k}}\right)}{\sum_{h=1}^{t}\mathbf{1}_{h<i}\exp\!\left(\frac{q_i^\top k_h}{\sqrt{d_k}}\right)},
\]

where the mask \(\mathbf{1}_{h<i}\) enforces causality.  
Why the scaling by \(\sqrt{d_k}\)? Because the dot product’s variance grows with \(d_k\); without it, softmax saturates and gradients vanish.  

The output of a head is \(z_i^{(h)} = \sum_j a_{ij} v_j^{(h)}\). Concatenating heads and projecting back gives the *self‑attended* vector \(\tilde{x}_i\).

### Step 2 – Residual + LayerNorm  
\(x'_i = \text{LN}(x_i + \tilde{x}_i)\).  
The residual stabilises optimisation (identity mapping is always possible); layer norm removes covariate shift, enabling deeper stacks.

### Step 3 – Cross‑Attention (optional)  
Same machinery as above but keys/values come from the encoder output \(y\):

\[
q_i = x'_i W_Q,\; k_j = y_j W_K,\; v_j = y_j W_V,
\]
with a mask that only allows attending to *past* decoder positions. The result \(\hat{x}_i\) injects external context.

### Step 4 – Position‑wise Feed‑Forward  
A two‑layer MLP with GELU activation:

\[
f_i = \text{GELU}(x'_i W_1 + b_1)W_2 + b_2 .
\]

Again wrapped in a residual and LN: \(x''_i = \text{LN}(\hat{x}_i + f_i)\).

---

### Non‑Obvious Insight  
The *mask* is not merely a safety guard; it enforces **causal convolution** in the attention space. This turns each block into a learnable, depth‑wise causal filter whose receptive field grows linearly with depth, mirroring how convolutional networks build hierarchy. Thus, transformer decoders are essentially *deep causal sequence models* that optimally balance locality (via masking) and globality (via multi‑head attention).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
