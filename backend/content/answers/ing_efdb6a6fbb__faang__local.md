---
qid: ing_efdb6a6fbb__faang__local
question: 'Explain: Non Functional Aspects — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 626
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:57:12-05:00'
sources: []
---

**Clarify**  
We’re asked to design the *non‑functional* layer of a food‑delivery app (think Zomato/Swiggy).  
Key assumptions: high traffic (millions users, thousands of concurrent orders), low latency (~1–2 s for search/order flow), 99.9% uptime, and rapid feature rollout. We’ll ignore functional flows (menus, payments) and focus on scalability, reliability, consistency, observability, and security.

**Approach**  
1. **Scale & Latency** – stateless API gateways + auto‑scaling microservices, CDN for static assets, regional data centers.  
2. **Reliability** – multi‑region deployment, active‑active failover, circuit breakers, retry with exponential backoff.  
3. **Consistency** – eventual consistency for order state; use event sourcing / CQRS where needed (e.g., inventory updates).  
4. **Observability** – distributed tracing (OpenTelemetry), metrics (Prometheus) + alerting, log aggregation (ELK/CloudWatch).  
5. **Security & Compliance** – TLS everywhere, OAuth2 for user auth, rate limiting, DDoS protection, GDPR/KYC handling.

**Depth**  
- **API Layer**: API Gateway with request validation and throttling; behind it stateless services in Docker/K8s.  
- **Data Store**: Hybrid—NoSQL (Cassandra/Spanner) for order history, Redis for hot caches (restaurant menu), RDBMS (PostgreSQL) for transactional ops (payments).  
- **Message Bus**: Kafka for inter‑service events; partitioned by region to reduce latency.  
- **Service Mesh**: Istio or Linkerd for secure service‑to‑service traffic, observability hooks.  
- **CI/CD**: GitOps + automated blue/green deployments; canary releases with traffic shifting.

Complexity: O(log n) cache lookups, O(1) pub/sub; overall system latency dominated by network hops (~50–100 ms). Trade‑offs: eventual consistency vs. strict ACID—chosen for scalability and user experience.

**Edge Cases**  
- Sudden traffic spikes (e.g., festival sales): auto‑scale + pre‑warm nodes, burst quotas.  
- Partial failures (DB node down): read replicas, graceful degradation of non‑critical services.  
- Data skew: sharding by geographic region to avoid hot spots.

**Optimize & Communicate**  
Future improvements: use serverless functions for low‑traffic microservices, adopt multi‑cloud strategies for vendor lock‑in mitigation, integrate AI for predictive scaling. When explaining, I’d start with the problem scope, walk through each non‑functional pillar, justify technology choices, and conclude with how these decisions meet SLA targets—all while keeping the narrative concise yet thorough.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
