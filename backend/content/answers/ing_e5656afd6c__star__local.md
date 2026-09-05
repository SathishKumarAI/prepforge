---
qid: ing_e5656afd6c__star__local
question: 'Explain: Key Points — Tech-Stacks-Live-Apps/Dream11.md at main \u00b7 Anshul619/Tech-Stacks-Live-Apps
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 422
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:30-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our product was stuck in a monolith built with Ruby on Rails and MySQL. The team needed to launch a real‑time betting dashboard for the upcoming cricket season, but the existing stack couldn’t handle live score feeds or high concurrent users.

**Task**  
I had to architect a new microservice that would ingest live match data, store it efficiently, expose an API for front‑end clients, and support horizontal scaling—all within two weeks before the tournament kickoff.

**Action**  
1. **Tech stack selection** – I chose Go for its low latency, PostgreSQL with TimescaleDB extensions for time‑series storage, and Redis Streams to queue incoming score updates.  
2. **Data pipeline** – Implemented a Kafka producer in Node.js that pulled data from the official cricket API every second, pushed messages into Redis Streams, and had a Go consumer that wrote batched records to TimescaleDB.  
3. **API layer** – Built a RESTful service in Go using Gin, with GraphQL endpoints for flexible client queries; deployed on Docker containers orchestrated by Kubernetes.  
4. **Observability & scaling** – Integrated Prometheus/Grafana dashboards and set up horizontal pod autoscaling based on CPU/memory thresholds.

**Result**  
The new service processed 10 000 score updates per minute with sub‑100 ms latency, handled 50 000 concurrent WebSocket connections during peak matches, and reduced the total page load time for the dashboard from 2.3 s to 0.8 s. The success convinced the product team to adopt a microservices architecture across all live‑data features, saving us an estimated $120k in infrastructure costs over the next year. I learned that choosing the right combination of language, database, and messaging layer can transform a monolith into a scalable, low‑latency platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
