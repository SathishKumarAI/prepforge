---
qid: ing_4a2513c48f__star__local
question: 'Explain: Why we did not build this on a single vector index'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 327
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:32-05:00'
sources: []
---

**Situation:** At my previous company we were launching a recommendation engine for an e‑commerce platform that had to serve millions of users in real time. Our data set consisted of 2 million product embeddings and 10 million user interaction vectors, all evolving daily.

**Task:** I was tasked with designing the search layer so that it could return top‑k recommendations within 50 ms while handling a peak query load of 3 000 TPS and allowing continuous model updates without downtime.

**Action:** After evaluating several architectures, I chose a hybrid approach: a coarse‑grained inverted index for categorical filters (brand, category) combined with a locality‑sensitive hashing (LSH) sub‑index for high‑dimensional similarity search. The LSH tables were distributed across 12 nodes using Apache Spark for training and Elasticsearch for query routing. We also implemented a rolling update pipeline that swapped in new embeddings every 30 minutes, keeping the system live.

**Result:** Query latency dropped from an initial 120 ms to 35 ms on average, while throughput exceeded the 3 000 TPS target by 40 %. The hybrid design allowed us to add new features (e.g., price‑range filters) without rebuilding the entire index. I learned that a single vector index often sacrifices scalability and flexibility when the data schema is heterogeneous and rapidly changing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
