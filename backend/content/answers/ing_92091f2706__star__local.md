---
qid: ing_92091f2706__star__local
question: 'Explain: When to Use Each Pattern — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 383
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:04-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a customer‑support chatbot for a SaaS platform that served over 500,000 users. The team needed real‑time answers to technical queries, but the knowledge base was huge—hundreds of internal documents and code repositories.

**Task:**  
I had to design a retrieval‑augmented generation (RAG) pipeline that could serve accurate responses at scale while keeping latency under 800 ms per request, and ensure that updates to the knowledge base reflected instantly in the bot’s answers.

**Action:**  
I first evaluated dense versus sparse embeddings. For quick indexing I built a vector store with FAISS using Sentence‑Transformers for dense vectors, but added a BM25 layer on top for exact keyword matching—this hybrid approach reduced hallucinations. I then set up an incremental update system: new documents were re‑embedded in a nightly batch and pushed to the vector index via a microservice that exposed a REST endpoint; this avoided full re‑indexing downtime. For scaling, I containerized the retrieval service with Kubernetes autoscaling based on request queue depth, and used Redis caching for top 10 most‑frequent queries. Finally, I implemented an A/B test harness to compare responses from the RAG model against the legacy rule‑based bot.

**Result:**  
The new system cut average response time from 1.4 s to 650 ms, increased user satisfaction scores by 18%, and reduced support tickets by 23% in the first quarter. I learned that a hybrid dense–sparse retrieval strategy combined with incremental updates is key for production RAG at scale, and that observability around latency and cache hit rates drives continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
