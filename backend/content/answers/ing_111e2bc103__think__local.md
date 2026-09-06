---
qid: ing_111e2bc103__think__local
question: 'Explain: Design decisions and Technology choices — System Design of food
  delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 462
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:50:14-05:00'
sources: []
---

**1️⃣ Clarify the scope & constraints**  
   * Ask: “What core features must we support? (orders, real‑time tracking, payments, reviews)”  
   * Assume: high traffic, low latency for order placement, eventual consistency for inventory.

**2️⃣ Adopt a layered design framework**  
   * **Presentation layer** – mobile/web clients.  
   * **API gateway** – rate‑limit, auth, routing.  
   * **Service layer** – microservices (catalog, order, payment, driver).  
   * **Data tier** – relational for orders/transactions; NoSQL for menus & user profiles; cache for hot data.

**3️⃣ Reason step‑by‑step through each decision**  

| Decision | Why? | Tech choice |
|----------|------|-------------|
| Horizontal scaling of API gateway | Handle spikes (e.g., lunch rush) | Nginx + Kubernetes |
| Stateless services | Easier autoscaling | Go / Node.js microservices |
| Event‑driven order state machine | Decouple payment & driver assignment | Kafka or RabbitMQ |
| Geo‑aware dispatch | Minimize ETA | Redis GEO, PostGIS |
| CDN for static assets | Reduce latency | CloudFront |

**4️⃣ Avoid common traps**  
   * Don’t over‑optimize early; start with a simple monolith then refactor.  
   * Don’t ignore eventual consistency; model it in the domain (e.g., “out‑of‑stock” flag).  
   * Don’t choose a single database for everything; match data patterns to stores.

**5️⃣ Sanity‑check & verbalize**  
   * Walk through a sample user journey: place order → payment processed → driver assigned → ETA updated.  
   * Ask “What could fail? Where do we need retries or compensating actions?”  
   * Communicate the trade‑offs: latency vs consistency, cost vs performance.

Use this checklist whenever you face a new system design problem—clarify first, layer second, reason systematically, watch pitfalls, and validate through a concrete user flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
