---
qid: ing_a19187547e__fp__local
question: What is learned sparse retrieval, SPLADE-style, and when would you pick
  it over BM25 or a dense retriever?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 493
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:49:22-05:00'
sources: []
---

**Why learn a sparse index?**  
Retrieval is an *information‑retrieval* problem: for each query \(q\) we must score documents \(d\) by a similarity function that reflects relevance.  
The classic BM25 uses a hand‑crafted term‑frequency weighting, which implicitly assumes that relevance can be captured by a linear dot product in the *term space*.  This is optimal only if the relevance signal lives on a low‑dimensional subspace spanned by a few discriminative words.

A dense retriever learns an embedding \(\phi(q),\psi(d)\in\mathbb{R}^k\) and scores via cosine similarity.  It can model long‑range semantic relations but loses the *exact match* precision of sparse indices: rare, highly specific terms that are decisive for relevance get diluted by dimensionality reduction.

**SPLADE (Sparse LAttice Decomposition)** bridges this gap.  
It trains a transformer to predict a *log‑softmax* over the vocabulary for each token in a document, then exponentiates and threshold‑filters to produce a sparse vector \(\tilde{\psi}(d)\).  The query is processed similarly.  Because the model learns which terms should be amplified (via attention) and which should be suppressed, it optimizes a *sparse* dot product that retains exact‑match power while still benefiting from contextual re‑weighting.

**When to pick SPLADE?**  
- **Precision‑critical domains** (law, medical literature): the model can learn that certain jargon words are decisive.  
- **Hybrid systems**: combine SPLADE scores with dense embeddings in a late fusion for both semantic drift and exact matches.  
- **Large‑scale open‑domain QA** where BM25’s hand‑crafted heuristics lag but dense models suffer from hallucination; SPLADE offers a principled, learned sparse alternative.

*Non‑obvious insight:* the sparsity threshold is not a hyperparameter but an emergent property of training: it reflects the model’s confidence that a term is *necessary* for relevance. This aligns with Occam’s razor in high‑dimensional spaces—only the most informative features survive, giving SPLADE both efficiency and interpretability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
