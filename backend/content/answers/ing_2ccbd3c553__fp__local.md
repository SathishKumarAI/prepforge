---
qid: ing_2ccbd3c553__fp__local
question: 'Explain: Problem statement — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 398
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:46-05:00'
sources: []
---

### Why we need **semantic search**

When a user types “best Italian restaurants in Manhattan,” the goal is not merely to match the exact words *Italian*, *restaurants*, *Manhattan* but to retrieve documents that truly answer the intent: places that serve Italian food, located in Manhattan, and considered good. The fundamental problem is **mapping an informal query onto a formal notion of relevance**.

### From relevance to geometry

Relevance can be expressed as similarity between two vectors:

1. A *query vector* \(q\) capturing the meaning of the user’s words.
2. An *document/answer vector* \(d\) encoding the content of each candidate result.

The distance \(\|q-d\|\) (or cosine similarity) must reflect semantic proximity, not lexical overlap. This turns relevance into an **optimization problem**: find the embedding space where semantically similar items are close, so that a simple nearest‑neighbor search solves the query.

### Building the space

Large language models learn this geometry by predicting masked tokens in billions of sentences—a self‑supervised objective grounded in information theory (maximizing mutual information between context and target). The resulting embeddings implicitly encode syntactic, factual, and world‑knowledge structure. Fine‑tuning on a relevance‑judgment dataset turns the generic space into one that aligns with user intent.

### Non‑obvious insight

Many treat semantic search as *“just use embeddings.”* The missing piece is **query‑time re‑weighting**: after retrieving nearest neighbours, adjust each candidate’s score by how well its local context matches the query. This dynamic weighting turns a static embedding space into an adaptive relevance engine that can handle polysemy and contextual nuance—something fixed cosine similarity cannot capture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
