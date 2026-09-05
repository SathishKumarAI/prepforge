---
qid: ing_2f3a8d71a6__star__local
question: 'Explain: The Search Flow in Action — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 385
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:07-05:00'
sources: []
---

**Situation** – In my last role I was tasked with revamping the search experience for a music streaming app that had a growing catalog of 10 million tracks and an active user base of 4 M daily listeners. The existing search returned irrelevant results in about 30 % of queries, causing drop‑off during discovery sessions.

**Task** – My goal was to design a low‑latency, personalized search flow that could surface the right track or playlist within 200 ms while scaling to millions of concurrent users and supporting complex query types (artist, genre, mood).

**Action** – I started by building an inverted index in Elasticsearch for full‑text lookup on titles, artists, and metadata. To personalize, I added a real‑time user embedding layer using a lightweight ANN that fused listening history with contextual signals (time of day, device). Queries were routed through a two‑stage pipeline: the first stage returned top‑10 candidates from the index; the second stage re‑ranked them using the ANN scores. Caching was implemented at the shard level and we leveraged CDN edge caches for static assets. We monitored latency with Grafana dashboards and set an SLO of 95 % queries under 200 ms.

**Result** – After deployment, search relevance improved by 18 %, user session time increased from 4.2 to 5.1 minutes, and the search‑to‑play conversion rate rose 22 %. I learned that balancing freshness (real‑time embeddings) with latency (caching & sharding) is key in large‑scale music search systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
