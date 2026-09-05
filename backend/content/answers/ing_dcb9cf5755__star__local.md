---
qid: ing_dcb9cf5755__star__local
question: 'Explain: In-Context Reranking — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 299
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:28-05:00'
sources: []
---

**Situation** – At my previous company we were building a semantic search engine for an e‑commerce catalog of 2 million SKUs. The initial BM25 retrieval returned a ranked list, but click‑through rates on the top 10 results were only 12 %, far below our target of 18 %.

**Task** – I was tasked to boost relevance by adding an in‑context reranking step that leveraged user intent and product metadata without re‑ranking from scratch each query.

**Action** – I implemented a lightweight transformer (DistilBERT) fine‑tuned on historical search logs. For every candidate from BM25, the model received the original query concatenated with the product title, description, and category hierarchy as context. It output a relevance score used to re‑order the top 50 hits. To keep latency low, I cached embeddings for popular products and only recomputed scores on-demand for new queries. I also introduced an A/B test framework that logged click‑through and dwell time metrics.

**Result** – The reranked results lifted average CTR from 12 % to 18.7 %, meeting our KPI. Latency increased by only 15 ms per request, well within SLA. This project taught me how to blend classic IR with modern contextual models while balancing performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
