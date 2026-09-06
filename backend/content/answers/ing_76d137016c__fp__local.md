---
qid: ing_76d137016c__fp__local
question: How does ALiBi encode position, and what's its claim to fame?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 506
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:17:01-05:00'
sources: []
---

**From first principles**

A transformer’s self‑attention is *position‑agnostic*: the dot product
\(QK^{\top}\) treats all tokens symmetrically.  
The original solution was to add a learnable positional embedding \(E_i\)
to each token, effectively biasing the attention matrix toward “this token
is at position i”.  This works but couples every head to a fixed set of
vectors and scales poorly with sequence length.

**Alibi’s idea**

Instead of learning an embedding per position, Alibi injects a *linear
bias* that depends only on the distance between two tokens:

\[
B_{ij}= -\,|i-j|\;\cdot \lambda_h ,
\]

where \(i,j\) are token indices and \(\lambda_h\) is a learnable slope for
head \(h\).  The bias is added to the raw attention logits before softmax:
\(A^{(h)}_{ij}=Q_iK_j^{\top} + B_{ij}\).

*Why this works:*  
The bias preserves the *relative* geometry of positions: tokens that are
far apart receive a larger negative penalty, while close tokens get only
a small shift.  This enforces a monotonic preference for nearby tokens,
mirroring the inductive bias of convolution or recurrent models without
explicitly encoding absolute indices.

**Deep connection**

Alibi turns positional information into a *convex regularizer* on the
attention distribution: minimizing cross‑entropy with this bias is
equivalent to adding a penalty proportional to the expected distance
between query–key pairs.  Thus, it leverages **information geometry**
(adding a linear term in logit space corresponds to a KL divergence
constraint on the posterior).  

**Non‑obvious insight**

Because the bias depends only on \(|i-j|\), Alibi is *invariant* to any
global shift of the input.  Consequently, it generalizes seamlessly to
arbitrarily long sequences: you can simply evaluate \(B_{ij}\) for larger
\(N\) without retraining or storing extra parameters.  This makes Alibi
particularly suited for streaming or hierarchical models where sequence
lengths vary widely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
