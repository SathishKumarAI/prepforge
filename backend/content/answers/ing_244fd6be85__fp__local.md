---
qid: ing_244fd6be85__fp__local
question: 'Explain: Hotel APIs (Admin) — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 450
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:22:59-05:00'
sources: []
---

**Hotel‑Admin API – Airbnb System Design (Neo Kim & Hayk)**  
The *core problem* is to let property owners and managers create, update, and control their entire catalog—rooms, calendars, pricing, policies—while guaranteeing consistency across millions of listings.  

1. **Domain‑driven decomposition**  
   *Listing* → immutable identity + mutable *Inventory*, *Rate*, *Amenity*.  
   Each sub‑service owns its own data store (NoSQL for time‑series rates, relational for contractual terms).  This mirrors the *CQRS* principle: reads are fast and write‑heavy updates stay isolated.

2. **Event‑driven consistency**  
   State changes publish events (`ListingCreated`, `RateUpdated`).  Other services subscribe to maintain materialized views (e.g., search index, revenue analytics).  Guarantees eventual consistency without locking the entire catalog—an application of *distributed transaction* trade‑off.

3. **Optimistic concurrency**  
   Versioned records prevent lost updates when multiple admins edit a listing concurrently.  The underlying principle is *information theory*: each write carries a checksum; mismatches signal conflict, preserving data integrity.

4. **Rate‑limiting & audit**  
   Admin actions are throttled per user and logged in an immutable ledger for compliance—an instantiation of *security by design*.

> **Non‑obvious insight:** The *calendar* is the true “master” of availability; all other services must treat it as read‑only, deriving inventory from it.  This inversion (inventory derived from calendar rather than vice versa) eliminates circular dependencies and guarantees that no booking can slip through because a stale inventory table was out of sync.

In short, the design solves the *scale–consistency* trade‑off by separating immutable identity, mutable sub‑state, and event‑driven replication—principles that extend to any large‑scale marketplace.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
