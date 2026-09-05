---
qid: ing_cd0cbabc03__star__local
question: 'Explain: Q64: Design a semantic cache that actually works in production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 371
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:53-05:00'
sources: []
---

**Situation:** At my previous company we built an internal recommendation engine for e‑commerce. The backend used a large knowledge graph and ran expensive SPARQL queries every time a user visited the product page. Latency spiked during traffic surges, so our SLA was at risk.

**Task:** I had to design a semantic cache that could serve most of those queries in milliseconds without compromising data freshness or correctness, while integrating cleanly with our existing Java/Kotlin microservices.

**Action:** First, I profiled query patterns and found 70 % were read‑only, targeting the same subset of triples. I implemented an LRU‑based cache layer on top of Redis, but instead of raw key/value pairs I stored RDF subgraphs keyed by a hash of the SPARQL SELECT clause plus bound variables. To keep semantics, I used Jena’s in‑memory Model to serialize/deserialize the subgraph with compact binary format (Turtle + custom compression). For cache invalidation, I subscribed to Kafka topics that emitted “triple changed” events; on receipt I recomputed only affected keys using a reverse index built from the graph. Finally, I added a fallback path: if a query hit missed the cache, it ran against the SPARQL endpoint and populated the cache asynchronously.

**Result:** Query latency dropped from an average of 1.8 s to 45 ms for cached hits (70 % of traffic). The system maintained 99.7 % data consistency, and our deployment pipeline was unchanged. I learned that a semantic cache must preserve graph structure while still being lightweight; using reverse indexes and event‑driven invalidation kept the cache coherent without full recomputation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
