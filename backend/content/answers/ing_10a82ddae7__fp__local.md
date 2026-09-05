---
qid: ing_10a82ddae7__fp__local
question: 'Explain: Encoding Phase — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 450
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:41:00-05:00'
sources: []
---

**Encoding Phase – Late‑Interaction ColBERT (LIL)**  

The core task is *semantic search*: given a query \(q\) and a document \(d\), we need to estimate
\(S(q,d)=\max_{i,j}\,\text{sim}(q_i,d_j)\),
where \(\{q_i\}\) and \(\{d_j\}\) are token embeddings.  
The *late‑interaction* idea is that the similarity should be computed after both sides have been fully encoded, so each token can attend to every other token in its partner.  

1. **Token‑wise embedding** – Each side passes through a Transformer encoder (e.g., BERT). The output \(E_q\in \mathbb{R}^{|q|\times h}\) and \(E_d\in \mathbb{R}^{|d|\times h}\) are *dense* vectors that already capture context via self‑attention.  
2. **Projection to a common space** – A linear layer maps both \(E_q\) and \(E_d\) into the same dimensionality \(h'\), ensuring comparability while allowing a lightweight adaptation.  
3. **Normalization** – L2‑normalizing each token vector turns dot products into cosine similarities, which are bounded and more stable for ranking.  

Why must we *normalize*? Because without it, long documents would dominate simply due to larger norms; normalization enforces that only the *direction* (semantic content) matters, not length.  
**Non‑obvious insight:** The projection layer can be *shared* across queries and documents **without** sacrificing expressivity because the downstream max‑over‑pairs operation is invariant to a common linear transform. This sharing drastically reduces parameters while preserving late‑interaction power.  

Thus, the encoding phase prepares two sets of comparable, context‑aware token embeddings ready for an efficient max‑pairwise similarity computation that drives retrieval quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
