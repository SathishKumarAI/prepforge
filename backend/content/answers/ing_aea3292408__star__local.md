---
qid: ing_aea3292408__star__local
question: 'Explain: Latency, cost, caching — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 347
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:25-05:00'
sources: []
---

**Situation:**  
At my last company we built a chatbot for enterprise support that used a Retrieval-Augmented Generation (RAG) pipeline. The product had to serve 15 k requests per hour with sub‑second responses, while keeping infrastructure costs under $2k/month.

**Task:**  
I was tasked with reducing average latency from 750 ms to <300 ms and cutting the monthly cost of our vector search service by 40%, without sacrificing answer quality.

**Action:**  
1. **Latency tuning:** I profiled the pipeline, discovered that the heavy chunking step added ~200 ms. I re‑implemented a lightweight tokenizer in Rust, reducing that overhead to 30 ms.  
2. **Cost optimization:** I replaced our paid vector store with an open‑source FAISS index running on a single GPU instance, cutting monthly spend from $1.8k to $600.  
3. **Caching strategy:** I added a two‑tier cache: an in‑memory LRU cache for the top 10 % most frequent queries and a Redis cache for the next 20 %. This reduced external calls by ~55%, further cutting latency and cost.

**Result:**  
Latency dropped to 280 ms on average, meeting our SLA. Monthly vector search costs fell from $1.8k to $600, saving 66 % of the budget. I learned that profiling early, leveraging open‑source tech, and smart caching can dramatically improve both performance and cost in RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
