---
qid: ing_1bddb82c58__star__local
question: 'Explain: Chunking — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 381
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:10-05:00'
sources: []
---

**Situation**  
While leading the migration of our customer support chatbot to a Retrieval‑Augmented Generation (RAG) architecture, we noticed that answer latency spiked from 350 ms to over 1.2 s when users asked complex queries that required pulling multiple policy documents.

**Task**  
I had to reduce retrieval time by at least 50% without sacrificing answer quality, and ensure the system could still surface up‑to‑date content from a constantly growing knowledge base of 120 k pages.

**Action**  
I introduced chunking: I split each document into semantic segments using a sliding window over the text, then encoded each chunk with a Sentence‑BERT model (embedding dimension 384). The embeddings were indexed in Pinecone, enabling sub‑millisecond similarity searches. For context, I capped chunk size at 300 tokens and added overlap to preserve continuity. During generation, the RAG pipeline fetched the top‑3 chunks per query, concatenated them, and passed them as a single prompt to GPT‑4o. To keep the index fresh, I automated an incremental update script that re‑embeds only changed or newly added documents.

**Result**  
Latency dropped from 1.2 s to 420 ms (a 65% reduction). Accuracy of returned answers improved from 78 % to 91 % on our internal QA suite. The approach also cut storage costs by 20 % because we avoided duplicating full documents in the vector store. I learned that thoughtful chunking balances granularity and performance, and that integrating incremental updates keeps a RAG system responsive as content grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
