---
qid: ing_2163276742__faang__local
question: 'Explain: Data Model — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 542
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:33-05:00'
sources: []
---

**Clarify**

We’re asked to explain the *Data Model* portion of Airbnb’s system design, as presented by Neo Kim & Hayk.  
Assumptions:  
1. Focus on the relational/NoSQL schema that underpins listings, users, bookings, and reviews.  
2. Highlight how the model supports scalability, consistency, and query patterns typical for a marketplace.

**Approach**

1. Identify core entities (User, Listing, Reservation, Review).  
2. Map relationships (one‑to‑many, many‑to‑many).  
3. Show primary keys, indexes, and denormalization strategies.  
4. Discuss sharding / partitioning hints that enable horizontal scaling.

**Depth**

| Entity | Key Fields | Relationships | Indexes/Denorm |
|--------|------------|---------------|----------------|
| **User** | `user_id PK`, email, hashed_pw | 1‑N → Listing (host), 1‑N → Reservation (guest) | Email unique; user_id sharded by hash. |
| **Listing** | `listing_id PK`, host_id FK, location, price, amenities, availability calendar | 1‑M → Reservation; 1‑M → Review | Geohash index for proximity search; composite price/location index for filtering. |
| **Reservation** | `reservation_id PK`, listing_id FK, guest_id FK, start_date, end_date, total_price | 1‑N ← Listing/Guest | Compound date+listing index for availability checks. |
| **Review** | `review_id PK`, reservation_id FK, rating, comment | 1‑1 → Reservation | Indexed by listing_id via reservation join; cached summary fields (avg_rating). |

*Denormalization:*  
- Store `total_ratings` & `rating_sum` in Listing to avoid joins on read.  
- Cache availability windows per city in a distributed key‑value store.

**Edge Cases**

- Concurrent booking: optimistic locking on the Availability calendar.  
- Deleted users: soft delete + orphan cleanup job.  
- Global scale: sharding by geographic region; cross‑region replication for read latency.

**Optimize & Communicate**

Future improvements: switch to a graph DB for complex recommendation queries, employ CQRS with separate write and read models, use event sourcing for audit trails. I’d explain each trade‑off (latency vs consistency) while keeping the narrative concise—exactly what interviewers look for in a FAANG answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
