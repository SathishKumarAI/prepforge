---
qid: ing_7fe5f0d0c1__star__local
question: Users ask "how many open orders are blocked on a supplier issue?" Plain
  RAG gets this wrong. Why, and what's the right architecture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 327
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:24-05:00'
sources: []
---

**Situation:**  
At a mid‑size e‑commerce platform, I was asked by product ops to build a voice‑activated assistant that could instantly tell how many open orders were blocked due to supplier stock issues. The existing RAG system (Retriever + LLM) kept pulling generic FAQs and missed the real-time inventory data.

**Task:**  
Create an architecture that delivers accurate, up‑to‑date counts of blocked orders while still allowing natural language queries.

**Action:**  
I designed a hybrid pipeline: a fast in‑memory Elasticsearch index for static product metadata, paired with a real‑time stream from our supplier API into a Kafka topic. The retriever first pulls candidate documents from Elasticsearch; then the LLM is wrapped by a reasoning module that queries a PostgreSQL “orders” table via a lightweight SQL interface (using pgvector embeddings). The system caches recent query results in Redis to meet latency targets (<200 ms). I also added a fallback rule‑based layer that checks for obvious supplier flags before calling the LLM.

**Result:**  
The new assistant returned correct counts 97% of the time, cutting error rates from 35% to <2%. Response latency dropped to 180 ms, and ops reported a 40% reduction in manual follow‑ups. I learned that blending real‑time data streams with RAG, rather than relying solely on static retrieval, is essential for accurate operational queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
