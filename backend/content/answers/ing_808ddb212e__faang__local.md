---
qid: ing_808ddb212e__faang__local
question: 'Explain: Assumptions — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 696
total_tokens: 934
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:43:50-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question:** “Explain the *assumptions* you would make when designing a simplified version of Airbnb’s system.”  
I’ll assume we’re building a core service that supports:  

- **Listings** (property data, images, availability).  
- **Search & filter** (location, price range, amenities).  
- **Booking** (calendar, payment, confirmation).  

We want horizontal scalability, high availability, and minimal latency. I’ll ask clarifying questions about traffic volume, SLA requirements, and budget constraints.

---

## 2️⃣ Approach  
1. **Identify key data entities & relationships** (User ↔︎ Listing ↔︎ Booking).  
2. **Define functional vs non‑functional assumptions** (e.g., read‑heavy workload, eventual consistency is acceptable for availability updates).  
3. **Choose technology patterns** that satisfy those assumptions (NoSQL for listings, relational DB for bookings, cache layer).  
4. **Sketch high‑level architecture** with load balancers, microservices, and data stores.

---

## 3️⃣ Depth – Core Assumptions  

| Category | Assumption | Rationale |
|----------|------------|-----------|
| **Traffic** | 10M daily active users; 1M searches per hour. | Guides scaling decisions. |
| **Latency SLA** | <200 ms for search, <1 s for booking confirmation. | Must be met by caching & fast reads. |
| **Consistency** | Eventual consistency acceptable for availability updates; strong consistency required for payment transactions. | Balances speed vs correctness. |
| **Data Volume** | 100M listings, 10B bookings over 5 years. | Influences choice of storage (partitioning, sharding). |
| **Fault Tolerance** | 99.95% uptime, multi‑AZ deployment. | Drives replication and auto‑failover strategies. |
| **Cost Constraints** | $X/month budget. | Limits use of premium services; pushes for open‑source or pay‑as‑you‑go. |

---

## 4️⃣ Edge Cases  
- **Flash sales / high‑concurrency bookings** → race conditions on availability.  
- **Partial data loss** (e.g., lost listing image) → graceful degradation.  
- **Payment failures** → idempotent booking API.  
- **Cold starts for new regions** → pre‑warm caches.

Testing: simulate burst traffic, introduce network partitions, validate idempotency, verify cache staleness handling.

---

## 5️⃣ Optimize & Communicate  

*Improvements:*  
- Add a **content delivery network (CDN)** for images to reduce latency.  
- Use **CQRS** with separate read/write models; search can be powered by Elasticsearch.  
- Implement **rate limiting** and **leaky bucket** to protect downstream services.

*Narration:*  
“I’d start by modeling the domain, then layer our assumptions—traffic, consistency, cost—to choose the right tech stack. I’ll validate edge cases with load‑test scripts, ensuring we meet SLAs while keeping costs in check. This approach balances scalability, reliability, and developer agility.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
