---
qid: ing_42f9ad0280__faang__local
question: 'Explain: Cons — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 496
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:55-05:00'
sources: []
---

**Clarify**  
You’re asked to critique a design for a URL‑shortening service (e.g., bit.ly).  
Key assumptions:  
1. Millions of users, billions of clicks per day.  
2. Requirements: fast read/write, high availability, low latency, analytics, security, GDPR compliance.

---

**Approach**  
Outline the typical stack: API layer → load balancer → stateless workers → cache (Redis) → database (NoSQL for URL mapping + RDBMS for analytics). Highlight trade‑offs between consistency and scalability.  

---

**Depth**  
*Pros:*  
- Simple key–value store; easy to scale horizontally.  
- Cache hits keep latency < 10 ms.  

*Cons:*  
1. **Collision risk & ID generation** – naive random IDs cause collisions; sequential counters leak traffic patterns.  
2. **Single point of failure** – if DB shard fails, the whole service stalls unless you replicate or use eventual consistency.  
3. **Analytics bottleneck** – write‑heavy analytics can overwhelm the primary store; requires separate ingestion pipeline (Kafka → data warehouse).  
4. **Security & abuse** – without rate limiting or CAPTCHA, bots can flood the system with spam URLs.  
5. **Legal/Privacy** – storing click logs raises GDPR issues; need audit trails and user deletion paths.

---

**Edge Cases**  
- Extremely long original URLs (over 2 KB).  
- URL collisions after re‑generation attempts.  
- Sudden traffic spikes (DDoS or viral link).  
- Users deleting their account → orphaned analytics records.

---

**Optimize & Communicate**  
- Use a two‑phase ID scheme: short prefix for cache, full hash for DB to reduce collisions.  
- Deploy read replicas and eventual consistency with conflict resolution.  
- Offload click streams to an event‑driven architecture (Kafka + Spark).  
- Implement API throttling, CAPTCHA, and bot detection.  

Convey the trade‑offs clearly: “We choose eventual consistency here because read latency is critical; we mitigate data loss by replaying events.” This shows structured reasoning, depth, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
