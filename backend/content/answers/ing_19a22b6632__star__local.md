---
qid: ing_19a22b6632__star__local
question: 'Explain: DB segment — Explaining 5 Unique ID Generators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 375
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:39-05:00'
sources: []
---

**Situation:**  
When we migrated our e‑commerce platform from a monolithic architecture to microservices, the old centralised ID system broke because each service had its own database and needed globally unique identifiers for orders, customers, inventory items, and payments.

**Task:**  
I had to design and implement five distinct ID generators that could operate independently yet guarantee uniqueness across all services, support high throughput, and be easy to audit.

**Action:**  
1. **UUID v4** – Used for customer profiles where collision risk is negligible; fast generation in Java’s `java.util.UUID`.  
2. **Snowflake (Twitter) style** – Built a Node.js microservice that concatenated timestamp, data‑center ID, worker ID, and sequence number to generate 64‑bit IDs for orders, ensuring millisecond ordering and no central bottleneck.  
3. **ULID** – Adopted for inventory SKUs; its lexicographically sortable property helped with search indexes in PostgreSQL.  
4. **Base62-encoded counter** – Implemented a Redis-backed atomic counter for payment transaction numbers, giving human‑readable 8‑character IDs while maintaining uniqueness.  
5. **Deterministic hash (SHA‑256)** – For sensitive audit logs we hashed the payload to produce a fixed‑length ID that could be verified without storing the raw data.

**Result:**  
All services now share a single, scalable ID namespace; order processing latency dropped 30 % due to non-blocking Snowflake IDs. The system handled 15k writes per second without collision incidents. I learned how choosing the right algorithm balances performance, readability, and auditability in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
