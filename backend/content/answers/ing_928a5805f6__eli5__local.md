---
qid: ing_928a5805f6__eli5__local
question: 'Explain: High-level architecture — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 270
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:30:13-05:00'
sources: []
---

Imagine your company’s knowledge base as a huge library, and the AI assistant is a friendly librarian who can find the right books instantly.  
**1. Retrieval layer** – The librarian has a super‑fast index (a search engine) that scans every book title, author, and summary to pick the few pages most likely to answer your question.  
**2. Generation layer** – Once those pages are handed to her, she writes a clear, concise reply using her own language skills, weaving together facts from the retrieved text.  
**3. Feedback loop** – After you read the answer, you can rate it or correct it; the librarian stores that feedback and refines her future searches and writings.  

Together these parts form the **RAG (Retrieval‑Augmented Generation)** architecture: “retrieve” the best evidence first, then “generate” a polished response. In an enterprise setting this system runs behind secure servers, respects privacy rules, and can be updated with new documents without retraining the whole model. The result? A quick, accurate assistant that grows smarter as it learns from every interaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
