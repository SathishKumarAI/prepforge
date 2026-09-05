---
qid: ing_910c40c6df__eli5__local
question: 'Explain: Dimension 3: Answer Relevance — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 289
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:52-05:00'
sources: []
---

**Answer Relevance – the “Spot‑the‑Right Piece” test**

Imagine a librarian who receives a mystery book. She opens it, flips to a random page, and reads a paragraph that looks promising. To decide if this paragraph actually answers the reader’s question, she runs two simple checks:

1. **Direct match** – Does the paragraph contain the exact words or ideas the reader asked for?  
2. **Context fit** – Even if the words are there, does the paragraph make sense in the bigger story of the book?

In Retrieval‑Augmented Generation (RAG), a model does the same with each retrieved text snippet. It scores every candidate piece by how well it matches the question and how coherently it fits with other evidence. The highest‑scoring snippets are stitched together into the final answer.

*Key terms:*  
- **Retrieval** – pulling relevant passages from a database.  
- **Augmented Generation** – generating an answer that incorporates those retrieved passages.  
- **Relevance** – how well a passage actually addresses the question.  

By treating relevance like the librarian’s “spot‑the‑right piece” test, RAG ensures the AI gives you answers that truly answer your query, not just clever guesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
