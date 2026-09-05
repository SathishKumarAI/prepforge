---
qid: ing_7db8e80f2b__star__local
question: 'Explain: Endpoint: GET /search — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 363
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:16-05:00'
sources: []
---

**Situation** – In my last role at a music‑streaming startup, we hit a 30 % spike in search traffic during a new album launch. The existing GET /search endpoint was a single monolith hitting the relational DB and returning results in under 200 ms for 95 % of requests, but it started throttling as concurrency grew.

**Task** – I needed to redesign the endpoint so that it could handle millions of concurrent queries with sub‑150 ms latency while still supporting complex filters (artist, genre, release date) and returning personalized ranking scores.

**Action** – I split the search into two layers: a fast in‑memory cache layer using Redis for exact match lookups, and a distributed Lucene/Solr cluster for full‑text, fuzzy matching. I added a microservice that normalizes query terms, applies user‑specific weighting, and streams results back via HTTP/2 multiplexing to reduce round trips. I also introduced a circuit breaker and rate limiter in the API gateway (Kong) to protect downstream services during traffic spikes.

**Result** – After deployment, average search latency dropped from 280 ms to 110 ms, 99th‑percentile stayed below 180 ms, and we handled 4× the query volume with zero outages. The exercise taught me how to balance cache hit ratios against index freshness and how to use observability (Prometheus + Grafana) to tune query pipelines in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
