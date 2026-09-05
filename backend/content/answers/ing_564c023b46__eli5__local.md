---
qid: ing_564c023b46__eli5__local
question: 'Explain: Interview questions — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 249
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:32-05:00'
sources: []
---

Think of an AI that’s a *library librarian* who also writes new books on the fly.  
When you ask it a question, the librarian first **retrieves** the most relevant books from shelves (that’s Retrieval). It then reads those passages and stitches together a fresh answer, adding its own style—this is **Retrieval‑Augmented Generation (RAG)**.

In an interview, questions might be:  
- *“How does RAG decide which documents to fetch?”* – the librarian uses keywords or embeddings to find close matches.  
- *“What happens if the retrieved text is wrong?”* – you’d explain how the model weighs evidence and can back‑off to safer defaults.  
- *“Can RAG hallucinate new facts?”* – ask about safeguards like fact‑checking loops.

Key terms: **Embedding** (a numeric fingerprint of words), **Similarity score** (how close two embeddings are). Keep answers concrete, like describing the librarian’s workflow, and you’ll impress any interviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
