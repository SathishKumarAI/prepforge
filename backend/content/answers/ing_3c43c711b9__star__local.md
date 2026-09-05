---
qid: ing_3c43c711b9__star__local
question: 'Explain: Network Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:50-05:00'
sources: []
---

**Situation** – In my last role, we were launching a real‑time analytics dashboard for retail partners. The platform was built on AWS with a front‑end in React and a back‑end microservice stack (Node.js + PostgreSQL). During load testing, our monitoring flagged intermittent 504s when traffic spiked to 10k concurrent users.

**Task** – I needed to design a fault‑tolerant network layer that kept the dashboard available above 99.9% SLA while preserving low latency (<150 ms) for all users.

**Action** – First, I added an Application Load Balancer (ALB) with health checks and sticky sessions, routing traffic across two Availability Zones. Next, I implemented a circuit‑breaker pattern in each microservice using Netflix Hystrix, backed by Redis cache to serve stale data during outages. I also set up Route 53 weighted routing to a secondary instance of the service behind a separate ALB for disaster recovery. Finally, I introduced an automated failover script that re‑provisioned instances and updated DNS records within 30 seconds when a zone went down.

**Result** – After deployment, uptime improved from 97% to 99.95% during peak periods, and the average latency dropped to 120 ms. The exercise taught me that combining architectural patterns (load balancing, circuit breaking) with cloud‑native tooling (ALB, Route 53) is essential for resilient network design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
