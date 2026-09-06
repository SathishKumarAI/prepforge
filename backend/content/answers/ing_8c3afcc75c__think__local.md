---
qid: ing_8c3afcc75c__think__local
question: 'Explain: System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 584
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:20:52-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
- Ask whether the answer should cover only backend services or also mobile/frontend, user experience, and analytics.  
- Assume a large‑scale, globally distributed service with millions of users, real‑time ordering, and high availability.  
- Define key functional requirements: restaurant catalog, menu browsing, cart, payment, order tracking, delivery routing, ratings.

**2. Adopt a layered mental model**  
- *Client layer*: mobile/web UI, caching, push notifications.  
- *API gateway*: request routing, authentication, rate limiting.  
- *Core microservices*: user service, restaurant service, menu service, cart/order service, payment service, delivery/dispatch service, rating service.  
- *Data storage*: relational DB for orders/users, NoSQL for menus, graph DB for delivery routes, in‑memory store (Redis) for session and hot data.  
- *Auxiliary services*: search/indexing, recommendation engine, analytics pipeline, monitoring.

**3. Step‑by‑step reasoning**  
1. **User flow mapping** → identify touchpoints & required data exchanges.  
2. **Identify bottlenecks**: order placement, payment, real‑time tracking.  
3. **Choose communication patterns**: REST for CRUD, gRPC/Protobuf for low‑latency internal calls, Kafka for event streams (order events, delivery status).  
4. **Design data models** → normalize where consistency matters (orders), denormalize menus for fast reads.  
5. **Scalability & fault tolerance** → stateless services behind load balancers, auto‑scaling groups, multi‑AZ deployments.  
6. **Consistency model** → eventual consistency for cart items, strong consistency for payments/fulfillment.  
7. **Security** → OAuth2/JWT, PCI compliance for payment gateway, encryption at rest/in transit.

**4. Common traps to avoid**  
- Mixing data storage concerns (e.g., putting too much relational logic in a NoSQL store).  
- Over‑optimizing early; focus first on correct functionality and then profile hotspots.  
- Ignoring cross‑service transaction boundaries—use sagas or compensating actions instead of distributed locks.

**5. Sanity‑check & communicate**  
- Run through the user journey mentally, ensuring each service can handle expected load.  
- Verify that latency budgets (e.g., 200 ms for order placement) are met with chosen tech stack.  
- Present a high‑level diagram: client → gateway → services → databases, annotating key decisions and trade‑offs.  

This structured approach lets you systematically build and explain a robust food‑delivery system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
