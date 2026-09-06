---
qid: ing_be074ebf76__fp__local
question: 'Explain: Q6: Describe hybrid search and when you would use it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 440
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:47:39-05:00'
sources: []
---

**Hybrid Search – From Problem to Principle**

When a user issues a query, two fundamental questions arise:

1. *What can be retrieved exactly?*  
2. *Which documents are most likely relevant but cannot be matched by exact tokens?*

Exact‑match engines (hash tables, inverted indexes) solve the first with linear‑time lookup, guaranteeing 100 % precision but failing to surface semantically similar or misspelled items. Vector‑based retrieval solves the second by measuring similarity in a learned embedding space, offering high recall but at the cost of false positives and often slower ranking.

Hybrid search marries these two views:  
- **Step 1 – Exact filter**: A lightweight inverted index prunes the corpus to a manageable candidate set based on keyword hits or field constraints.  
- **Step 2 – Vector rerank**: The surviving candidates are re‑ranked using cosine similarity (or other distance metrics) in the embedding space, typically via Approximate Nearest Neighbor (ANN) search.

This two‑stage pipeline is an instance of *divide‑and‑conquer* optimization. By first reducing the search space, we keep ANN’s high computational cost to a small subset, achieving near‑real‑time performance while maintaining semantic depth.

**When to Use It**

- **Large, noisy corpora** (e.g., e‑commerce catalogs with misspellings).  
- **Hybrid relevance criteria**: exact filters for mandatory constraints (price range, category) and vector rerank for subjective similarity.  
- **Latency‑critical applications** where pure ANN would exceed response budgets.

**Non‑obvious Insight**

The key advantage is *error correction*: the exact filter can be relaxed (e.g., fuzzy matching or n‑gram overlap), allowing the vector stage to correct early mismatches that a strict keyword index would discard. Thus, hybrid search not only speeds up retrieval but also increases robustness against imperfect queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
