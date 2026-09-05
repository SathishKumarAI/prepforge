---
qid: ing_e4d7accb5d__star__local
question: 'Explain: Hash-Based Partitioning — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 293
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:05:30-05:00'
sources: []
---

**Situation** – At my previous company we launched a public URL‑shortening API that grew from 1M to 50M daily hits within six months. The traffic hit our database layer, causing query latency spikes and occasional timeouts on the lookup service.

**Task** – I was tasked with designing a scalable storage solution that could keep read throughput high while keeping writes simple, all without redesigning the API contract.

**Action** – I introduced hash‑based partitioning on the original URL’s SHA‑256 digest. Each hash value was mapped to one of 64 MongoDB shards using consistent hashing. We added a lightweight lookup cache (Redis) for hot keys and implemented an automatic rebalancing script that redistributed under‑utilized shards during low traffic windows. To keep the user experience seamless, I wrapped the partition logic in a middleware layer so the API endpoint remained unchanged.

**Result** – Read latency dropped from 350 ms to <30 ms on average, and the system handled 200k concurrent requests without timeouts. The write path stayed atomic with minimal overhead, and we avoided costly schema migrations. This experience taught me how proper partitioning can turn a bottleneck into a scalable architecture while preserving API simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
