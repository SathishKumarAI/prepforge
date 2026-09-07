---
qid: ing_0135fa0db7__faang__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 503
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:08-05:00'
sources: []
---

**Clarify**  
You’re asked to walk through the *Pastebin* case from the System‑Design‑Primer – a lightweight service that lets users create and share text snippets. Key assumptions: we need low latency reads, eventual consistency for writes, high read traffic, and minimal storage per snippet.

**Approach**  
1. **API layer** – REST endpoints (`POST /paste`, `GET /p/<id>`).  
2. **Service tier** – stateless micro‑service that validates input, generates a short ID, and persists the payload.  
3. **Storage** – NoSQL key‑value store (e.g., DynamoDB) keyed by paste ID; TTL for auto‑expiry.  
4. **Caching** – CDN + in‑memory cache (Redis) to serve hot snippets.  
5. **Communication** – Use gRPC or HTTP/JSON between API and service; internal queues (SQS/Kinesis) for background tasks like analytics.

**Depth**  
- *ID generation*: collision‑resistant hash of timestamp+random bytes → 6‑char base62.  
- *Write path*: API → service → write to DB → publish “paste_created” event.  
- *Read path*: cache lookup → miss → DB read → populate cache.  
- *Scalability*: horizontal scaling of stateless services; auto‑scaling on request rate; partitioned DB tables by hash prefix.  
- *Consistency*: eventual consistency is fine—reads may miss a write for <1 s.

**Edge Cases**  
- Extremely large pastes: stream to S3 instead of DB.  
- Duplicate IDs: retry logic with new random suffix.  
- Cache stampede on popular snippets: use “cache aside + mutex” or double‑check pattern.  

**Optimize & Communicate**  
Explain trade‑offs: tighter consistency (transactional DB) vs latency; heavier cache (CDN) vs cost. Emphasize monitoring metrics (latency, cache hit ratio, error rate). Conclude with a diagram and note that the design can evolve to add user auth or versioning if requirements change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
