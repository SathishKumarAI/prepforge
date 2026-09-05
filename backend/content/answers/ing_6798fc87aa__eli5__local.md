---
qid: ing_6798fc87aa__eli5__local
question: 'Explain: Scenario 3: Design a RAG system for enterprise search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 227
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:28-05:00'
sources: []
---

Imagine you’re at a massive library that stores every report, email, and policy your company has ever written—so big that no single librarian can remember everything. A **Retrieval‑Augmented Generation (RAG)** system is like having two smart assistants working together: one (the *retriever*) quickly scans the shelves to pull out the most relevant books for a question, and another (the *generator*) reads those pages and writes a concise answer in plain language.

In an enterprise search, you first set up a *knowledge base* by indexing all internal documents. When someone asks, “What is our policy on remote work?” the retriever pulls the latest policy PDFs, contracts, and meeting notes that match keywords. The generator then blends those snippets into a clear response, adding context or clarifying details. This way, employees get up‑to‑date answers without wading through endless files, and the system can learn from new documents automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
