---
qid: ing_6856be2268__fp__local
question: 'Explain: Multi-Head Attention — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 488
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:46:25-05:00'
sources: []
---

**Why the “head”?**  
In a sequence of tokens we want each token *t* to attend to every other token *s*. The naive dot‑product attention
\[
\alpha_{ts}=\frac{\exp(q_t^\top k_s)}{\sum_u \exp(q_t^\top k_u)}
\]
produces one weighted sum \(v_t=\sum_s \alpha_{ts} v_s\).  
If we use a single projection for queries, keys and values, the model can only learn *one* linear view of the data. Yet natural language contains many simultaneous relations (syntax, coreference, world‑knowledge).  

**Enter multiple heads.**  
We split the embedding dimension into \(H\) subspaces:
\(q_t^{(h)}=W_Q^{(h)}x_t,\;k_s^{(h)}=W_K^{(h)}x_s,\;v_s^{(h)}=W_V^{(h)}x_s\).  
Each head performs its own attention, yielding \(v_t^{(h)}=\sum_s \alpha_{ts}^{(h)} v_s^{(h)}\).  
Finally we concatenate the heads and project back:
\(o_t = W_O [v_t^{(1)};\dots;v_t^{(H)}]\).

**Why it works.**  
Mathematically, multi‑head attention is a *learnable linear map* from the space of all pairwise interactions to a lower‑dimensional representation. By projecting into different subspaces we approximate a richer kernel (the dot product) that can capture diverse relational patterns—essentially performing a *joint factorization* of the interaction matrix.

**Deep insight:**  
The number of heads controls the *rank* of this approximation. A single head forces rank‑1, limiting expressivity; too many heads over‑parameterize and hurt generalisation. Thus, multi‑head attention is not just “more parallelism” but a principled way to balance **expressive capacity** (via higher effective rank) against **regularisation**—a subtle trade‑off that often determines model performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
