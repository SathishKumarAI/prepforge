---
qid: ing_badda665bd__fp__local
question: 'Explain: public endpoints um that we''ve sort of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 527
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:41:04-05:00'
sources: []
---

**Designing a Public‑Facing Parking‑Garage API**

*Problem*: A city wants an online system that lets drivers reserve, pay for, and locate parking spots in real time while the garage operators can monitor capacity and maintenance. The API must handle thousands of concurrent requests, guarantee consistency (no double bookings), and scale across multiple garages.

**Why it must work this way**

1. **Eventual consistency + optimistic locking**  
   Each spot is a *resource* with a state (`free`, `reserved`, `occupied`). Clients issue a `reserve` request; the server checks the current version of that spot (a row‑version or timestamp). If unchanged, it atomically flips to `reserved`. This guarantees no two drivers get the same spot even under high contention.

2. **Geospatial indexing**  
   Spot coordinates are stored in a spatial index (R‑tree or PostGIS). The `search` endpoint queries “spots within 50 m of latitude/longitude” and orders by distance, enabling efficient nearest‑spot discovery.

3. **Rate limiting + circuit breaking**  
   To protect the backend from flash crowds (e.g., after an event), per‑IP or per‑user quotas are enforced via a token bucket. A circuit breaker monitors latency; if it spikes, new reservations are temporarily rejected with a *retry‑later* header.

4. **Event sourcing for audit and analytics**  
   Every state transition (`reserve`, `pay`, `exit`) is appended to an immutable event log. Analytics (occupancy trends) can replay events without touching the live database, ensuring write latency stays low.

5. **API gateway + service mesh**  
   Public endpoints are fronted by a gateway that handles TLS termination, authentication (OAuth2), and request routing. Inside, services communicate over gRPC with mutual‑TLS, giving fine‑grained observability.

**Non‑obvious insight**

Treat *spot availability* as a **queue of tokens** rather than a binary flag. Each garage publishes a token stream; clients consume one token when reserving. This decouples the UI from the database and lets you implement back‑pressure naturally: if tokens run out, the client simply sees “full” without querying every spot individually. It also simplifies distributed scaling—each microservice can pull tokens from a shared Kafka topic, guaranteeing at‑least‑once delivery while preserving order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
