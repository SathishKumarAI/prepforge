---
qid: ing_2cc85e2e98__faang__local
question: 'Explain: Clarifying Questions — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 467
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:27:16-05:00'
sources: []
---

**Clarify (≈40 words)**  
*What is the core service we’re building?* Are we designing the search, booking, or host‑listing subsystem?  
Do we target a global audience with multi‑currency support? What latency SLA must each API meet?  
How many concurrent users and requests per second should be handled?

**Assumptions (≈20 words)**  
- Unlimited horizontal scalability.  
- Data stored in relational DB + caching layer.  
- Third‑party payment gateway available.

---

## 1. Approach (≈30 words)
Outline the high‑level architecture:  
- **Load balancer → stateless API tier**  
- **Service mesh for inter‑service calls**  
- **Event‑driven data pipeline** for search indexing and analytics  
- **Cache + CDN** for static content, **search engine (Elasticsearch)** for listings.

---

## 2. Depth (≈70 words)
- **Search Service:** Accepts filters (location, price range, amenities). Queries a normalized schema in PostgreSQL; results are cached in Redis per query key.  
- **Booking Service:** Uses distributed locking on the listing’s availability calendar via Redlock to avoid double booking.  
- **Payment Service:** Idempotent transactions with 3‑phase commit to external gateway.  
- **Data Pipeline:** Kafka streams updates → Spark jobs → Elasticsearch index.  
Complexity: Search O(log N) per query; booking O(1) lock acquisition.

---

## 3. Edge Cases (≈20 words)
- Concurrent bookings on the last night → lock contention.  
- Price surge during peak demand → dynamic pricing service.  
- API rate limits per IP/tenant → throttling layer.

---

## 4. Optimize & Communicate (≈40 words)
Explain trade‑offs: using a single relational DB simplifies consistency but may bottleneck; sharding or CQRS can lift load at cost of complexity. Emphasize observability—metrics, tracing, alerting—to meet SLAs. End with how the design scales horizontally and isolates failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
