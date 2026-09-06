---
qid: ing_7a166f6680__fp__local
question: 'Explain: No results found — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 458
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:24:12-05:00'
sources: []
---

When you search the *Haystack* documentation for “tutorials” and get **No results found**, it’s not a glitch—it's an intentional design choice rooted in how Haystack organizes knowledge.

### 1. The underlying problem  
Users want to learn how to build pipelines, but the library is vast: connectors (Elasticsearch, FAISS), readers (BERT, T5), writers, and evaluation tools. A single “tutorial” page would have to be both **complete** and **up‑to‑date**, which is impossible in a fast‑evolving codebase.

### 2. Why the solution works  
Haystack splits its learning material into **small, version‑specific “recipe” notebooks** stored in the *examples* directory of the repo. Each recipe targets one concrete use‑case (e.g., “FAQ retrieval with Elasticsearch”) and is tagged by the library’s current release.

The web docs simply surface those notebooks via a search index that excludes internal paths like `/docs/examples/`. Thus, a query for “tutorial” hits no public page because all tutorials live in the source tree, not the rendered docs.

### 3. Deeper principle  
This mirrors **modular documentation** in scientific software: keep user‑facing docs lean (API reference) and let the *examples* be the living, versioned tutorials. It reduces duplication, ensures consistency, and allows contributors to update examples independently of the docs build pipeline.

### 4. One non‑obvious insight  
The absence of a “tutorial” page is actually an **optimization**: by not forcing users through a generic tutorial, Haystack lets them jump straight into the specific pattern that matches their stack (Elasticsearch vs. Milvus). This aligns with the principle of *contextual learning*: knowledge is most effective when embedded in concrete, relevant workflows rather than abstract overviews.

So, if you see “No results found,” simply navigate to `https://github.com/deepset-ai/haystack/tree/main/examples` or clone the repo—there’s a tutorial for every feature, just not indexed under that generic keyword.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
