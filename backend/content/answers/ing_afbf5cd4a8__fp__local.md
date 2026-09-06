---
qid: ing_afbf5cd4a8__fp__local
question: 'Explain: Cody Enterprise — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 526
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:10-05:00'
sources: []
---

### Why “Cody Enterprise” exists

At its core, code search is an *information‑retrieval* problem: given a natural‑language query (e.g., “how do I serialize a struct to JSON?”) and a massive corpus of source files, return the most relevant snippets. Traditional keyword search treats every file as a bag of words; it ignores context, developer intent, and code semantics. Cody Enterprise solves this by treating **source code as a first‑class language** and applying *transformer‑based* models that understand syntax, data flow, and API contracts.

### The engine

1. **Indexing** – Each file is parsed into an abstract syntax tree (AST) and tokenized at the *semantic* level (identifiers, types, call sites). This preserves locality: a variable’s type in one function informs relevance in another.
2. **Embedding** – A large language model maps each AST node to a high‑dimensional vector that captures its meaning relative to other nodes. The embedding space is *smooth*: semantically similar constructs lie close together, enabling cosine similarity search.
3. **Query translation** – User input is also tokenized and embedded in the same space. Because both query and code share the representation, relevance scoring reduces to a nearest‑neighbor lookup—an optimization problem solved efficiently by locality‑sensitive hashing.

### Why it must work this way

- **Scalability**: Linear search over millions of lines is infeasible; embedding vectors allow sub‑linear retrieval.
- **Precision**: Semantic embeddings capture context (e.g., the difference between `String` and `bytes`) that keyword matching misses, reducing false positives.
- **Extensibility**: The same model can be fine‑tuned for language‑specific idioms or domain constraints without re‑engineering the index.

### A non‑obvious insight

Most people view Cody as a “search bar.” In reality, it is a *probabilistic inference engine*: each returned snippet is not just matched but scored by the likelihood that it satisfies the developer’s intent. This perspective explains why Cody can surface code from unrelated repositories—it has learned latent associations (e.g., that `serde::Serialize` and `json::to_string`) even when no explicit keyword connects them. Thus, Cody Enterprise turns static codebases into a dynamic, probabilistic knowledge graph, enabling truly intelligent coding assistance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
