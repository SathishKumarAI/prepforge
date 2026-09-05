---
qid: ing_27d1d26181__fp__local
question: You have thumbs-up/down and click logs from a live RAG product. How do you
  turn that into retrieval improvements?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 407
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:30:01-05:00'
sources: []
---

**From thumbs‑up/down to better retrieval**

The core problem is *ranking the right document* when a user asks a question.  
We observe two signals:

1. **Explicit clicks** – the set of documents the user actually opens.  
2. **Implicit labels** – each click receives a thumbs‑up or thumbs‑down.

Treat every `(query, doc)` pair as a training example with label = +1 if it was clicked and up‑voted, and –1 otherwise. This turns an online RAG system into a supervised ranking problem that respects the true end‑user objective: “present useful documents first.”

**Why this works**

* **Information‑theoretic view:** The thumbs‑up/down encode *mutual information* between the query and the relevance of a document. Maximizing this mutual information via a loss (e.g., binary cross‑entropy or pairwise ranking loss) forces the retriever to capture exactly what users care about, not just lexical overlap.
* **Optimization view:** The loss gradients are computed over *real user interactions*, automatically adapting to new topics and vocabulary without manual annotation.

**Implementation steps**

1. Build a click–label dataset from logs.  
2. Fine‑tune the embedding model (or train a lightweight reranker) with a contrastive or pairwise ranking objective on this data.  
3. Periodically re‑train as more feedback arrives, allowing continual improvement.

**Non‑obvious insight**

Users often up‑vote documents that *extend* their query rather than directly answer it. By weighting such “contextual” clicks higher in the loss, the retriever learns to surface documents that broaden the conversation—something standard lexical retrieval misses. This subtle shift turns passive logs into a powerful signal for semantic relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
