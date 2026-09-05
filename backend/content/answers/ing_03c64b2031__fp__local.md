---
qid: ing_03c64b2031__fp__local
question: 'Explain: We want to add semantic search to our existing product. Design
  the service.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 529
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:13:27-05:00'
sources: []
---

### From “find anything” to “understand what you mean”

**Problem** – Our users type arbitrary text and expect relevant results, but keyword matching ignores intent, synonyms, or context.  
**Goal** – Build a service that *infers* the user’s semantic intent and returns items whose meaning aligns with it.

---

#### 1. **Input → Vector Space**

| Step | Rationale |
|------|-----------|
| Tokenize & normalize (lower‑case, stop‑words) | Removes noise that would otherwise dominate cosine similarity. |
| Embed each token with a contextual model (e.g., BERT, Sentence‑Transformer) | Contextual embeddings capture polysemy; they encode *how* a word is used in the query. |
| Aggregate to a single query vector (CLS token or weighted average) | A fixed‑size representation allows efficient similarity search. |

> **Insight:** Weight tokens by inverse document frequency before aggregation; this boosts rare, informative terms that are often overlooked in plain averages.

---

#### 2. **Index → Approximate Nearest Neighbor**

| Component | Why it works |
|-----------|--------------|
| Faiss/Annoy index on pre‑computed item vectors | ANN gives sub‑linear search while preserving cosine similarity ranking. |
| Periodic re‑indexing (e.g., nightly) | Keeps embeddings up to date with evolving content without latency spikes. |

---

#### 3. **Ranking & Relevance Scoring**

*Primary score*: cosine similarity between query and item vectors.  
*Secondary signals* (optional): click‑through rate, freshness, user profile features.  
Combine via a linear or gradient‑boosted model trained on logged relevance data.

---

#### 4. **Feedback Loop**

Collect implicit feedback (clicks, dwell time). Use it to:

1. Fine‑tune the embedding model on domain‑specific language.
2. Adjust weighting of secondary signals.

---

#### 5. **Deployment & Observability**

- Wrap the pipeline in a stateless gRPC service behind an API gateway.  
- Log query vectors and top‑k hits for offline analysis; this allows continual detection of semantic drift.

---

**Non‑obvious insight:** *Embedding similarity alone is not enough—rare, high‑information tokens must be amplified early (via IDF weighting) to prevent common words from drowning out the true intent.* This subtle step can raise precision by 5–10 % in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
