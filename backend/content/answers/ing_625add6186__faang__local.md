---
qid: ing_625add6186__faang__local
question: 'Explain: 4.2 Requirement 2: URL Redirection — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 493
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:32:34-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *URL shortener* (e.g., bit.ly). Key requirements:  
1. Generate a unique, collision‑free short code for any long URL.  
2. Resolve the short code back to the original URL with low latency.  
3. Persist mappings across restarts and scale to millions of requests per day.  
Assumptions: one‑to‑one mapping (no “multiple URLs → same code”), no expiration unless added, and read‑heavy traffic.

**Approach**  
1. **API layer** – REST endpoints: `POST /shorten`, `GET /{code}`.  
2. **Service layer** – generate/lookup logic, idempotent creation.  
3. **Storage** – key‑value store (e.g., DynamoDB, Redis).  
4. **Cache** – in‑memory LRU for hot codes to hit 1 ms latency.  
5. **Background job** – optional analytics or cleanup.

**Depth**  
- *Code generation*: use a counter + base‑62 encoding or hash+collision resolution (e.g., append random suffix).  
- *Uniqueness*: store the code as key; if collision, retry.  
- *Read path*: check cache → DB. Write: store in DB, update cache.  
- *Complexity*: O(1) average for both ops; space ≈ number of URLs.  
- *Scalability*: horizontal scaling via sharding on hash prefix; use partition key to avoid hotspots.

**Edge Cases**  
- Very long URLs (≥ 2 KB): truncate or store separately.  
- Duplicate submissions: detect existing mapping to return same code.  
- High‑collision scenario: fallback to random + retry logic.  
- Cache eviction: ensure consistency with DB writes.

**Optimize & Communicate**  
- Use CDN for `GET /{code}` to reduce latency globally.  
- Implement rate limiting and CAPTCHA on POST to mitigate abuse.  
- Log analytics per code (clicks, referrers).  
Explain trade‑offs: heavier cache → faster reads but more memory; stricter uniqueness checks → slower writes. Conclude with a diagram of components and data flow to show clear architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
