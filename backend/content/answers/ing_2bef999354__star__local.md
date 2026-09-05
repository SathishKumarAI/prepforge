---
qid: ing_2bef999354__star__local
question: 'Explain: Latency Budget — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 388
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:58-05:00'
sources: []
---

**Situation:**  
When my team launched a new e‑commerce search feature, we had to support both fast keyword lookups and richer semantic queries. The product manager set a 150 ms latency budget for the user-facing API because any slower response would hurt conversion.

**Task:**  
I needed to design a hybrid search system that combined an inverted‑index engine (Elasticsearch) for quick keyword hits with a transformer‑based reranker (OpenAI’s GPT‑4 embedding model) for relevance, all while staying within the 150 ms budget and handling ~10k requests per second.

**Action:**  
I split the pipeline into two parallel stages:  
1. **Fast filtering** – Elasticsearch returned the top 200 candidates in ~50 ms using field‑data caching and a pre‑computed BM25 score.  
2. **Relevance reranking** – I deployed the GPT‑4 embeddings on an NVIDIA A100 cluster, batching queries into groups of 32 to amortize GPU overhead; this stage ran in ~80 ms per batch.  
To meet the overall budget, I added a *fallback* path: if GPU latency spiked (e.g., during traffic peaks), we served the Elasticsearch results directly without reranking. I also instrumented Prometheus alerts for any 90th‑percentile spike over 140 ms and auto‑scaled the GPU pool by 20% when thresholds were hit.

**Result:**  
The hybrid search reduced average relevance scores (measured by click‑through rate) from 0.38 to 0.52, a 37 % lift in conversions, while keeping 95 % of responses under 140 ms. I learned that careful batching and dynamic fallback paths are key to staying within strict latency budgets when combining large‑model reranking with traditional search engines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
