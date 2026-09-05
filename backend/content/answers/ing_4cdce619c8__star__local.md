---
qid: ing_4cdce619c8__star__local
question: 'Explain: Endpoint: POST /shorten — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 385
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:02:04-05:00'
sources: []
---

**Situation**  
At my last startup we were launching a new marketing platform that needed a public API for partners to embed short links. The team had no existing shortening service and the traffic estimate was ~50 k requests per day with an SLA of 99.9% availability.

**Task**  
I had to design the `POST /shorten` endpoint: receive a long URL, return a unique short code, store it reliably, and guarantee that the same original URL always maps to the same short link to avoid duplicates.

**Action**  
1. **API contract & validation** – JSON body `{ "url": "<string>" }`, validate with regex, reject unsafe schemes.  
2. **Idempotency** – hash the canonical URL (SHA‑256) and store the digest in a Redis cache keyed by `hash`. If hit, return existing code.  
3. **Code generation** – use base62 encoding of an auto‑incrementing counter stored in PostgreSQL (`serial` column). Wrap with a Snowflake‑style worker ID to avoid collisions at scale.  
4. **Persistence & caching** – write the mapping (`code → url`) to PostgreSQL for durability; cache both directions in Redis (TTL 30 days) for fast reads.  
5. **Rate limiting & security** – token bucket per API key, 200 req/min; add HSTS and content‑security‑policy headers on redirects.

**Result**  
The endpoint handled 70 k QPS with <2 ms latency in production, hit the SLA, and reduced storage by 40% using idempotent hashing. I learned how to balance consistency, speed, and cost when designing a core service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
