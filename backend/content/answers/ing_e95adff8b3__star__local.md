---
qid: ing_e95adff8b3__star__local
question: 'Explain: Pitfall 9: Shallow Understanding of RAG Components'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 379
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:45-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a customer‑support chatbot that used Retrieval Augmented Generation (RAG) to pull from our knowledge base. The sprint deadline was tight, and the product manager wanted a quick demo before the quarterly review.

**Task** – Deliver a working prototype that could fetch relevant FAQ snippets and generate accurate replies in real time while keeping latency under 800 ms.

**Action** – I initially assumed “RAG” meant just hooking up an LLM to a search engine, so I wired the OpenAI GPT‑4 endpoint directly to Elasticsearch. The first run produced generic answers that missed context, and the response times spiked because each query hit the index, retrieved thousands of documents, and then sent them all to the model. Realizing my shallow grasp of RAG components, I paused, studied the official RAG pipeline (retriever, ranker, generator), and re‑architected with a dense retriever (FAISS) for quick embeddings, a lightweight cross‑encoder reranker, and an LLM that received only the top‑3 passages. I also added caching for frequent queries.

**Result** – The updated prototype cut latency to 350 ms, improved answer relevance by 42% (measured via BLEU scores against human‑written responses), and earned a 95% satisfaction rating from beta testers. I learned that mastering each RAG layer—retrieval, ranking, generation—is crucial for building efficient, accurate AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
