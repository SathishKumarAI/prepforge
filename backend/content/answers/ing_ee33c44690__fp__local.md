---
qid: ing_ee33c44690__fp__local
question: 'Explain: Example Workflow — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 557
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:25:38-05:00'
sources: []
---

**Why we need a URL‑shortener**

The core problem is *mapping an arbitrary string (the long URL) to a compact token* while keeping the lookup fast and the space efficient.  
We must satisfy three invariants:

1. **Deterministic, collision‑free mapping** – the same long URL should always give the same short code, but different URLs must rarely collide.  
2. **Fast O(1) resolution** – a user’s click must redirect within milliseconds.  
3. **Scalable storage** – millions of records without a central bottleneck.

---

### 1️⃣  Generate the token

- **Hash‑then‑encode**: Compute SHA‑256 of the URL → take first *k* bits → base‑62 encode → get a 6–8 char string.  
  - *Why?* SHA‑256 is cryptographically strong, giving us an almost uniform distribution; base‑62 gives dense packing (≈1 billion per 6 chars).  
- **Collision handling**: If the token already maps to a different URL, append a counter or use a secondary hash.  

### 2️⃣  Persist the mapping

| Layer | Reason |
|-------|--------|
| **Primary DB (e.g., DynamoDB)** | Fast key‑value lookup by token. |
| **Secondary index on long URL** | Detect duplicates and return existing code, saving space. |

*Non‑obvious insight*: Storing the reverse index also lets us implement *URL de‑duplication* for free—many sites share identical destinations.

### 3️⃣  Serve redirects

- **Cache layer (Redis)**: Hot tokens live in memory; miss → DB lookup → cache set.  
- **Edge CDN**: Route `/t/<code>` to the nearest node, reducing latency.  

### 4️⃣  Analytics & governance

- Store hit counts and timestamps in a separate analytics store (e.g., ClickHouse).  
- Enforce rate‑limits per IP/tenant via API gateway.

---

#### One hidden pitfall
If you only hash the URL, *changing* a long URL (e.g., adding query params) yields a different short code. To support “canonical” URLs, normalize before hashing—strip session IDs, enforce HTTPS, lowercase domain, etc.—otherwise users will get multiple codes for the same resource.

By grounding each design choice in an invariant or optimization principle, you can explain *why* your system behaves that way, not just *what* it does.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
