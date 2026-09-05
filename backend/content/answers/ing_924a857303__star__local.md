---
qid: ing_924a857303__star__local
question: 'Explain: Example — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 302
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:32-05:00'
sources: []
---

**Situation**  
When we were migrating our legacy monolith to a micro‑service architecture, the data layer was still a single PostgreSQL instance holding tables for orders, inventory, and customers. As traffic grew, read latency spiked and we hit a hard limit on connection pooling.

**Task**  
I had to design a scalable persistence strategy that isolated services, reduced contention, and allowed independent scaling of each domain without breaking existing APIs.

**Action**  
I proposed the “database per service” pattern. First, I mapped out the bounded contexts: Order Service, Inventory Service, and Customer Service. For each, I spun up a dedicated PostgreSQL cluster on our Kubernetes platform using StatefulSets with persistent volumes. To keep schema evolution simple, I used Flyway migrations triggered by CI/CD pipelines. I also implemented an async event bus (Kafka) so services could publish domain events when data changed, keeping replicas eventually consistent. Finally, I added connection pooling via PgBouncer per service and adjusted the read/write split to reduce contention.

**Result**  
Within two months, order‑service query latency dropped from 350 ms to 85 ms, inventory updates no longer blocked customer lookups, and we could scale the order cluster independently during peak sales. The team gained confidence in managing data boundaries, and I learned how to balance isolation with eventual consistency using event sourcing patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
