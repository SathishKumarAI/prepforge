---
qid: ing_7844a2ba7f__fp__local
question: 'Q: How do you handle reranking for extremely long queries (e.g., a whole
  paragraph)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 505
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:20:35-05:00'
sources: []
---

**Reranking long‑query embeddings: a geometric–information view**

When a query is a full paragraph, the naive “take the nearest document” strategy fails because the query vector becomes an *average* of many sub‑topics, inflating its variance and diluting discriminative signal.  
Start from the *information bottleneck* principle: we want a representation \(T\) that maximizes mutual information with relevance \(Y\) while minimizing redundancy with irrelevant content \(Z\). For a long query, the raw embedding \(q_{\text{raw}}\) contains high‑dimensional noise (irrelevant clauses, stop‑words, style).  
Reranking therefore should:

1. **Project onto the subspace spanned by topic‑relevant directions**.  
   Estimate a *topic covariance* matrix \(\Sigma_T\) from a corpus of labeled queries or via self‑supervised contrastive learning on paragraph pairs. Compute the whitening transform \(W=\Sigma_T^{-1/2}\) and apply it to both query and candidate embeddings: \(q'=Wq_{\text{raw}}\). This suppresses directions that vary widely across unrelated paragraphs, sharpening discriminative axes.

2. **Apply a relevance‑aware similarity**.  
   Instead of cosine, use *scaled dot‑product* with temperature tuned to the entropy of the projected distribution:
   \[
   \operatorname{sim}(q',d')=\frac{\exp\!\bigl((q'\cdot d')/t\bigr)}{\sum_{k}\exp\!\bigl((q'\cdot d_k)/t\bigr)}.
   \]
   The temperature \(t\) is set to the standard deviation of dot‑products in a validation set, ensuring that only truly informative matches receive high probability.

**Non‑obvious insight:**  
The whitening step is *not* just noise reduction; it aligns the query with the manifold where relevance varies most. In effect, we are learning a *query‑specific metric* on the fly, turning the problem into one of projecting onto a low‑dimensional “relevance subspace” rather than merely ranking in ambient space. This principled shift turns long paragraphs from noise‑laden to highly informative query vectors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
