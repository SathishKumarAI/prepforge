---
qid: ing_9f33caea58__faang__local
question: 'Explain: Short Code Length — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 517
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:54:12-05:00'
sources: []
---

**Short‑Code Length – Designing a URL Shortener**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | “We need a service that maps long URLs → short codes, stores them, and redirects.  Assume millions of requests/day, sub‑second latency, high availability, and the code must be as short as possible (≤ 6 chars).  Ask about: persistence layer, analytics, rate limits, GDPR, custom aliases, and traffic spikes.” |
| **Approach** | 1️⃣ Generate a unique numeric ID per URL. <br>2️⃣ Encode it in base‑62 (0‑9,a‑z,A‑Z) → short code. <br>3️⃣ Persist mapping (`id ↔ longURL`) in a distributed key‑value store. <br>4️⃣ Use a CDN or edge cache for redirects. <br>5️⃣ Add optional analytics table and throttling layer. |
| **Depth** | *Code generation*: `id = auto_increment()` → `code = base62(id)`.  For 6 chars, capacity ≈ 62⁶≈ 56 billion URLs. <br>*Storage*: Use DynamoDB/Bigtable with `PK=short_code`, `SK=URL`.  Cache top‑k codes in Redis (TTL). <br>*Redirect latency*: <br>• Cache hit → ~10 µs.<br>• Cache miss → DB read (~50 ms) + CDN cache. <br>*Scaling*: Auto‑scaling shards, consistent hashing for key‑value store. |
| **Edge Cases** | • Duplicate long URLs → same code (idempotent).<br>• Code collisions after manual custom alias.<br>• Extremely high traffic bursts → read replicas and rate limiting.<br>• GDPR: ability to delete mapping quickly. |
| **Optimize & Communicate** | • Use a Bloom filter at the edge to reject invalid codes before DB hit.<br>• For even shorter codes, use random 5‑char strings with collision checks (hash‑table + retry).<br>Explain trade‑offs: deterministic incremental IDs give perfect uniqueness but expose traffic patterns; random short codes hide usage and reduce predictability. Conclude with a diagram of flow, noting that the system can be built with serverless components for cost efficiency while still meeting SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
