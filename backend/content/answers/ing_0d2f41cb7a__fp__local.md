---
qid: ing_0d2f41cb7a__fp__local
question: 'Explain: Cody — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 366
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:33:54-05:00'
sources: []
---

**Why Cody works the way it does**

Cody is a *semantic search* engine for codebases, built on top of Sourcegraph’s indexing layer.  
The core problem it solves is: **“Given a natural‑language query, find the most relevant source files and snippets.”** Traditional grep or keyword searches treat code as plain text; they miss context (types, APIs) and return noisy hits. Cody replaces that with *vector embeddings* of code tokens and AST nodes.

1. **Feature extraction** – every token is mapped to a high‑dimensional vector using a transformer trained on millions of public repositories.  
2. **Contextual weighting** – the embedding is refined by surrounding syntactic constructs (e.g., method signatures, call sites). This encodes *information flow* and *type inference*.  
3. **Approximate nearest neighbor search** – embeddings are stored in an HNSW graph; queries traverse this structure in logarithmic time, yielding sub‑millisecond latency even on terabyte codebases.

The deeper principle is **information geometry**: the embedding space forms a manifold where distance ≈ semantic dissimilarity. By optimizing for *contrastive loss* on co‑occurring API calls, Cody learns to cluster semantically similar snippets together.

### Non‑obvious insight

Most people think search speed comes from indexing alone. In reality, **the quality of the embedding dictates how few candidates you need to examine**. A better representation reduces recall‑precision trade‑offs, allowing the ANN layer to be sparser without sacrificing accuracy—this is why Cody scales to millions of files while keeping latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
