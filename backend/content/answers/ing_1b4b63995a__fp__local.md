---
qid: ing_1b4b63995a__fp__local
question: 'Explain: SPLADE Implementation — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 420
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:04:18-05:00'
sources: []
---

**SPLADE (Sparse Lexical and Dense Embedding)** is a *hybrid* retrieval framework that unifies the strengths of lexical matching and semantic embeddings in a single representation.  
At its core, SPLADE solves the *retrieval dilemma*: exact‑term match guarantees precision but suffers from vocabulary mismatch; dense embeddings capture semantics but are expensive to index and query.  

The method learns an **invertible** transformation \(f\) that maps each token into a high‑dimensional sparse vector \(\mathbf{s}\).  
1. The encoder (a transformer) produces contextual logits for every token.  
2. A *sparsity‑inducing* loss (e.g., L₁ regularization plus a margin on top‑k activations) forces most entries to zero while preserving informative dimensions.  
3. During inference, the sparse vector is stored in an inverted index exactly as in BM25; the dense counterpart \(\mathbf{d}\) (the transformer’s pooled output) is kept for cosine similarity.

At query time we compute **two scores**:
- \(S_{\text{lex}} = \sum_{i} q_i \cdot d_i\) (dot product on sparse vectors), a fast inverted‑index lookup.  
- \(S_{\text{sem}} = \cos(q_d, d_d)\) (dense cosine similarity).  

The final relevance is a weighted sum \(w S_{\text{lex}} + (1-w) S_{\text{sem}}\).

**Non‑obvious insight:** the sparse component is *not* merely a bag‑of‑words; its dimensions encode **contextualized sub‑phrase semantics**. Because the transformer’s logits are conditioned on the entire passage, the sparsity mask preserves polysemy resolution—different senses of “bank” activate distinct indices. Thus SPLADE marries lexical precision with semantic nuance without sacrificing index efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
