---
qid: ing_af3bf76a53__fp__local
question: Why does the transformer use multiple attention heads instead of one large
  one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 451
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:17:13-05:00'
sources: []
---

**Why a Transformer splits attention into many heads**

The core problem is *expressive capacity* under a fixed computational budget.  
A single head computes the weighted sum  

\[
\text{Attention}(Q,K,V)=\operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt d}\right)V ,
\]

where \(Q,K,V\in\mathbb R^{n\times d}\).  
If we increase \(d\) to make the head “larger”, we also raise the cost of matrix
multiplications and, more importantly, force the model to compress all
relations into one linear projection.  This limits the kinds of interactions it can capture: a large dot‑product essentially averages over *all* dimensions, blurring fine‑grained patterns.

A multi‑head scheme splits \(d\) into \(h\) subspaces (\(d_h=d/h\)).  
Each head learns a different linear mapping \(W^Q_i,W^K_i,W^V_i\).  The softmax operates on *low‑dimensional* queries, so each head can focus on a distinct aspect of the input (syntax, semantics, positional cues) without interference.  At the end we concatenate the heads, re‑projecting them back to dimension \(d\).  

Mathematically this is equivalent to learning a **block‑diagonal** attention matrix in a higher‑dimensional space, which has strictly more degrees of freedom than a single dense block of the same total size.  Hence multi‑head attention can approximate richer functions with the same computational budget.

*Non‑obvious insight:*  
Because each head is trained independently, the model naturally learns to **partition** the feature space into *disjoint semantic subspaces*. This implicit factorization resembles principal component analysis: the heads act as low‑rank approximations that capture complementary directions of variation, enabling the Transformer to represent complex interactions with fewer parameters than a single monolithic head would require.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
