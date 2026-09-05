---
qid: ing_13e1623ec3__star__local
question: 'Explain: Connect APIs declaratively — Introduction to Apollo Federation
  - Apollo GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 329
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:07:56-05:00'
sources: []
---

**Situation**  
In a mid‑size e‑commerce startup, we had separate microservices for product catalog, inventory, and pricing. Each exposed its own GraphQL endpoint, but the front‑end needed a unified schema to display real‑time prices with stock levels in one query. The ad‑hoc approach of stitching schemas caused version drift and hard maintenance.

**Task**  
I was tasked with refactoring the architecture so that the services could be composed declaratively, eliminating runtime stitching while preserving backward compatibility for legacy clients.

**Action**  
I introduced Apollo Federation: each service became a “subgraph” exposing its own SDL plus `@key` directives. I added `@provides` on the inventory subgraph to supply stock info to the product subgraph, and used `@requires` in pricing to fetch up‑to‑date prices from the catalog. The Apollo Gateway was set up as a single entry point; it automatically resolved entity references across services using the federation protocol. I leveraged GraphQL code‑gen for type safety and wrote integration tests that hit the gateway to ensure cross‑service queries returned correct data.

**Result**  
The unified schema reduced API latency by 35 % (queries now hit only two subgraphs instead of three). Rollout time for new features dropped from weeks to days, and we eliminated the need for manual stitching scripts. I learned that declarative composition with Apollo Federation not only simplifies maintenance but also enforces clear ownership boundaries across services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
