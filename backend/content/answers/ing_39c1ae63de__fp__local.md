---
qid: ing_39c1ae63de__fp__local
question: Walk me through hybrid retrieval - keyword, vector, and reranking. When
  does each stage earn its cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 474
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:42-05:00'
sources: []
---

### Why a three‑stage pipeline?

The fundamental problem is **retrieving the most relevant document** given a short query.  
1. **Keyword matching** solves *exactness*: it guarantees that any document containing the query terms will be considered, but ignores semantic similarity and suffers from sparsity.  
2. **Vector search** addresses *semantic completeness*: dense embeddings capture latent meaning, so paraphrases surface, yet they are noisy; many irrelevant vectors score highly because similarity is a soft metric.  
3. **Re‑ranking** restores *precision* by re‑evaluating the top candidates with a higher‑capacity model (e.g., BERT), exploiting context and discourse that vector models miss.

Each stage trades off cost against quality:

| Stage | Cost | Benefit | When it pays |
|-------|------|---------|--------------|
| **Keyword** | Very low (hash tables, inverted lists) | Guarantees recall of exact matches; filters out trivially irrelevant docs. | Early filtering for short, well‑formed queries or when latency must be minimal. |
| **Vector** | Moderate (GPU/CPU compute, large index) | Captures semantic similarity; recovers documents missed by keyword search. | When query terms are ambiguous, misspellings, or the corpus is highly heterogeneous. |
| **Re‑ranking** | Highest (transformer inference per candidate) | Fine‑grained relevance using full context; eliminates false positives from vector stage. | When answer quality is paramount (e.g., legal or medical QA) and latency can be amortized over a small candidate set. |

### Non‑obvious insight

The *optimal* point is not “more stages equals better results.” Because each stage consumes resources linearly with the number of processed documents, the *marginal gain* drops sharply after the vector step. A well‑tuned two‑stage pipeline—keyword + lightweight neural reranker—often outperforms a three‑stage system that spends heavy GPU cycles on vectors for queries that rarely need semantic expansion. Thus, profiling the query distribution (exact vs. paraphrased) is essential before deciding how many stages to pay for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
