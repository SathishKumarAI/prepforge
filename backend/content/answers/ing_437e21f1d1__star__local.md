---
qid: ing_437e21f1d1__star__local
question: 'Explain: System Design: AI Search Infrastructure — Perplexity AI Interview
  Prep 2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 336
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:54-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our recommendation engine’s response time had ballooned from 150 ms to over 1 s after we added a new natural‑language query feature. Users were abandoning the app during peak hours.

**Task** – I was tasked with redesigning the AI search infrastructure so that latency stayed below 200 ms while supporting real‑time embeddings for 10k concurrent users and allowing easy addition of new intent models.

**Action** – First, I benchmarked our current TF‑IDF pipeline against a vector‑search approach using Faiss on GPU. I rebuilt the ingestion layer to stream raw logs into an Apache Kafka topic, then used Spark Structured Streaming to compute embeddings with Sentence‑Transformers and store them in an ElasticSearch cluster with dense vector fields. For query time, I implemented a two‑phase retrieval: a quick BM25 filter followed by FAISS k‑NN on the top 200 candidates. To keep costs low, I containerized the service with Docker and deployed it to Kubernetes, auto‑scaling based on request rate.

**Result** – Latency dropped from 1 s to 120 ms average, throughput increased to 15k QPS, and we saw a 35% lift in conversion rates. I learned that hybrid retrieval (BM25 + dense vectors) often yields the best trade‑off between speed and relevance, and that observability (Prometheus metrics on embedding latency) is key for ongoing tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
