---
qid: ing_34f5142411__faang__local
question: 'Explain: Subscription Management System — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 577
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:17-05:00'
sources: []
---

**Clarify**

We’re designing a *subscription‑management* service (think Netflix, Spotify).  
Key objectives: high availability, low latency for CRUD on user plans, billing reconciliation, and auditability.  
Assumptions to confirm:
1. Scale – millions of active users, thousands of concurrent plan changes per second.  
2. Data model – one‑to‑many between User → Subscription; each subscription has a plan, status, start/end dates, payment method, and usage metrics.  
3. Billing frequency – daily/weekly/monthly cycles with potential proration.

**Approach**

1. **API layer** (REST/GraphQL) → rate‑limit & auth.  
2. **Event‑driven state store**:  
   *Read* from a highly available relational DB (PostgreSQL + read replicas).  
   *Write* via an append‑only event log in Kafka – each change is immutable and audit‑ready.  
3. **Microservices**:  
   - `SubscriptionService` for CRUD, validation, and plan transitions.  
   - `BillingService` that consumes events to schedule invoices (using a scheduler like Temporal).  
4. **Caching**: Redis cache per user for quick reads of current subscription.  
5. **CQRS + Event Sourcing**: write side emits events; read model materializes into denormalized tables.

**Depth**

- CRUD ops are ACID via the DB; idempotent writes ensured by event keys.  
- Proration calculated in `BillingService` using stored plan price history.  
- Complex queries (e.g., churn analysis) served from a separate analytics data warehouse (Snowflake).  
- Complexity: O(log n) for read‑replica lookups, O(1) cache hits; writes are amortized O(1) in Kafka.

**Edge Cases**

- Simultaneous plan changes → conflict resolution via optimistic locking.  
- Payment failures → retry with exponential backoff, flag subscription as “past due”.  
- Data consistency between event log and DB – use two‑phase commit or transactional outbox pattern.

**Optimize & Communicate**

1. **Backpressure**: throttle Kafka producers when consumer lag spikes.  
2. **Observability**: instrument metrics (latency, error rates) and trace request flows across services.  
3. **Scalability**: shard event log by user ID; horizontal scale read replicas for traffic bursts.

By layering stateless APIs over an immutable event store with a denormalized read model, we achieve strong consistency where needed, high availability, and the ability to audit every subscription change—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
