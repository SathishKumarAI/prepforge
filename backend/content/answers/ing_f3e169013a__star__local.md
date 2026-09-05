---
qid: ing_f3e169013a__star__local
question: 'Explain: What Changed Architecturally — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 358
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:29-05:00'
sources: []
---

**Situation**  
At my previous company we were building a semantic search layer on top of GPT‑4 for an internal knowledge base. The prototype worked but hit latency limits when scaling to thousands of documents and the query accuracy plateaued around 70 % F1.

**Task**  
I was tasked with redesigning the architecture so that it could handle real‑time retrieval for 10,000+ embeddings while improving relevance scores without increasing inference cost.

**Action**  
I migrated from a monolithic LlamaIndex setup to a modular “LlamaIndex‑Core + Retrieval‑Engine” pattern. First, I replaced the default in‑memory vector store with Milvus, configuring HNSW indexing for sub‑millisecond lookups. Then I introduced an asynchronous microservice that pre‑computes document embeddings using a 3‑stage pipeline: tokenization → chunking → contextual embedding via LlamaIndex’s new `EmbeddingsProvider` abstraction. Finally, I integrated a lightweight relevance re‑ranking model (a distilled BERT) as a post‑filter, and exposed everything through an API gateway that cached top‑k results per user session.

**Result**  
Query latency dropped from 350 ms to under 90 ms at peak load, and the F1 score climbed to 88 %. The new architecture also cut GPU usage by 30 % because embeddings were pre‑computed offline. I learned that decoupling storage, retrieval, and ranking layers not only scales performance but also gives flexibility to swap in newer models without breaking the whole stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
