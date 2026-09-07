---
qid: ing_acb150b93b__aws__local
question: 'Explain: Other links — Graphql'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 475
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:23-05:00'
sources: []
---

**Situation & Task**  
While building a recommendation engine for an e‑commerce platform, I needed to expose related product data (e.g., “Customers who bought this also viewed”) through our public GraphQL API without duplicating logic across services.

**Action – Design & Implementation**  
I introduced *“link resolvers”* that delegate to a dedicated **ProductLinkService**. The resolver simply forwards the request to an internal REST/HTTP endpoint (`/product/{id}/links`) and returns the JSON payload mapped to GraphQL types.  
- **AWS services used:**  
  - **API Gateway + Lambda** for the public GraphQL endpoint (serverless, auto‑scales).  
  - **Amazon ECS Fargate** for the ProductLinkService (low overhead, easy scaling).  
  - **DynamoDB** to cache link data with TTL of 5 min.  
- **Scalability & Availability:**  
  - Lambda’s concurrency limits were set to 1000; traffic spikes hit 80% utilization without cold starts due to provisioned concurrency.  
  - Fargate tasks run across two AZs, auto‑scaling on CPU/Memory metrics (max 10 tasks).  
- **Cost & Trade‑offs:**  
  - Using Lambda + API Gateway reduced server costs by ~70 % compared to a monolith.  
  - The link service’s single responsibility simplified debugging and allowed us to roll out new algorithms without touching the GraphQL layer.

**Result**  
Within two weeks of deployment, we saw a **32 % lift in click‑through rate** for recommended products (from 4.1 % to 5.3 %) and reduced API latency by **18 ms** on average.  

**Learning & Bar‑raiser Insight**  
I took full ownership: I mapped the requirement, designed the microservice pattern, estimated costs, and iterated based on monitoring data—demonstrating *Ownership* and *Dive Deep*. The bar‑raiser will note my quantified impact, clear separation of concerns, and lessons learned from initial latency spikes that led to adding a caching layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
