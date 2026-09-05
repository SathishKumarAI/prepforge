---
qid: ing_cc159bc389__star__local
question: 'Explain: Requirements — Flightbookingsearchmakemytrip'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 345
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:02-05:00'
sources: []
---

**Situation** – At a fintech startup, we were tasked with building a flight‑booking search feature for our mobile app. The launch date was in three months and user traffic was projected to hit 500k searches per day during peak season.

**Task** – I had to define the functional and non‑functional requirements: search latency ≤ 200 ms, support 50+ airline APIs, handle concurrent users up to 10k per minute, and ensure data freshness within 5 minutes. The goal was to deliver a seamless “search‑compare‑book” flow while keeping costs under $1M.

**Action** – I led workshops with product, ops, and vendor teams to capture user stories (price comparison, filter by layover, real‑time seat availability). We used an event‑driven microservice architecture: a search orchestrator in Go, caching via Redis for flight offers, and a Kafka pipeline to ingest price updates. I drafted a Service Level Agreement with airlines, defined API contract schemas, and set up automated CI/CD with Terraform and Docker. For scalability we planned auto‑scaling on Kubernetes and employed a CDN edge cache.

**Result** – The feature launched on time, achieving 180 ms average latency and 99.9% uptime during the first month of peak traffic. Bookings increased by 35%, and we stayed $120k below budget. I learned that clear, measurable requirements plus an infrastructure‑first mindset are critical for high‑traffic ML‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
