---
qid: ing_3bd7475d2a__fp__local
question: 'Explain: Long-document path (contracts) — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 410
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:04-05:00'
sources: []
---

**Why a special pipeline is needed for long contracts**

Contracts contain hundreds of pages, legal jargon, nested clauses, and cross‑references. A single transformer can process only ~4 k tokens, so the *fundamental problem* is to preserve global coherence while keeping inference tractable.  
The solution follows three deep principles:

1. **Hierarchical representation** – split the document into semantically coherent chunks (e.g., clauses). Encode each chunk with a local transformer, then compress it to an embedding that captures its “topic vector.”  
2. **Sparse retrieval + global context** – build an approximate nearest‑neighbour index of these embeddings. When answering a question, retrieve only the most relevant chunks instead of re‑encoding everything. This is an application of *information‑theoretic relevance*; we keep entropy high where needed and low elsewhere.  
3. **Cross‑chunk attention** – feed the retrieved chunk embeddings into a second transformer that performs *global attention* across them, allowing the model to reason about clause interactions (e.g., “if Clause A applies, then Clause B triggers”).  

**Non‑obvious insight:**  
Treating each chunk as an independent “mini‑document” and learning its embedding lets us recover long‑range dependencies without ever concatenating all tokens. The cross‑chunk transformer acts like a graph neural network over clause nodes, yielding far better consistency than naïve sliding windows or simple concatenation.

This *Document Intelligence Pipeline* thus scales legal NLP to arbitrarily large contracts while maintaining the fine‑grained reasoning required for compliance and risk assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
