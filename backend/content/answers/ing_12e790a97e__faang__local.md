---
qid: ing_12e790a97e__faang__local
question: 'Explain: Cursor System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 475
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:39-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to sketch a *cursor system*—the component that tracks user position in large‑scale AI services (e.g., search, recommendation).  
Assumptions:  
- The cursor must persist across stateless requests.  
- It should support millions of concurrent users with low latency.  
- We need idempotency and eventual consistency for distributed writes.

**2️⃣ Approach**  
1. **Stateless API layer** → accepts/returns a cursor token.  
2. **Cursor token design**: opaque, signed JWT or hash‑based string containing page ID, offset, timestamp, and user/session ID.  
3. **Back‑end storage**: a sharded key–value store (e.g., DynamoDB/Redis) keyed by user+cursor ID for quick lookup; secondary index for cleanup.  
4. **Pagination logic** → server fetches next batch using the cursor’s offset, updates token, and returns.

**3️⃣ Depth**  
- *Token Generation*: embed HMAC‑SHA256 signature to prevent tampering.  
- *Storage*: write‑through cache + async persistence; use optimistic locking (CAS) for concurrent updates.  
- *Scalability*: shard by user hash; horizontal scaling via auto‑scaling groups.  
- *Complexity*: O(1) lookup, O(log n) for cleanup sweeps.  
- *Trade‑offs*: larger tokens increase bandwidth; tighter expiry reduces stale data but raises churn.

**4️⃣ Edge Cases**  
- Token replay → detect via version counter or timestamp > session start.  
- Data drift (model updates) → embed model hash in token and invalidate on change.  
- Network partitions → eventual consistency leads to duplicate results; mitigate with idempotent page IDs.

**5️⃣ Optimize & Communicate**  
- Compress tokens (base64‑url) for bandwidth savings.  
- Use CDN edge caching for static pages to reduce backend hits.  
- Explain to interviewers: “I prioritized statelessness, cryptographic integrity, and horizontal scalability while keeping the API simple.”  

This design balances performance, security, and maintainability—core criteria for a FAANG‑level cursor system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
