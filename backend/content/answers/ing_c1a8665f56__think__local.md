---
qid: ing_c1a8665f56__think__local
question: 'Explain: What CDNs Cache — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 407
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:43:30-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- Ask whether the answer should cover *what* is cached *and why* a CDN does it.
- Assume the audience knows basic web terms (HTTP, latency) but not CDN internals.

**2️⃣ Adopt a mental model**

Think of a CDN as a distributed cache hierarchy:  
1. **Origin server** → 2. **Edge nodes** (closest to users).  
Use the “cache‑first” strategy: serve from edge if valid; otherwise fetch, store, and forward.

**3️⃣ Step‑by‑step reasoning**

- Identify *static* assets that change infrequently: images, CSS/JS, videos, fonts.  
- Explain cacheable HTTP headers (`Cache-Control`, `ETag`, `Expires`) that tell the CDN how long to keep a copy.  
- Discuss “origin pull” (edge pulls on miss) vs “push” (origin pushes updates).  
- Mention cache invalidation triggers: TTL expiry, purges via API, content‑hashing in URLs.

**4️⃣ Common traps**

- Don’t conflate *CDN* with *any* caching; it’s not for dynamic session data.  
- Avoid assuming every CDN automatically invalidates on origin changes—manual purge often needed.  
- Beware of over‑caching: if assets change too often, the CDN will serve stale content.

**5️⃣ Sanity‑check & verbalize**

- Recount a concrete example (e.g., loading a website’s logo): user → nearest edge → cached copy served instantly; if TTL expired, edge fetches fresh from origin.  
- Summarize: CDNs cache static, infrequently changing resources close to users, using HTTP caching semantics and explicit purging to keep content fresh.

This outline can be reused for any “what X does” explanation in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
