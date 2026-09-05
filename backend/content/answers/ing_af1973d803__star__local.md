---
qid: ing_af1973d803__star__local
question: What is a Notification Service? — Design Notification Service | System Design
  Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 426
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:25-05:00'
sources: []
---

**Situation** – At my last job we had an e‑commerce platform with 1.2 M daily active users. The marketing team wanted real‑time alerts for order status, promotions and abandoned carts, but the existing push system was a single Kafka topic that stalled under traffic spikes.

**Task** – I was tasked to design a robust notification service: deliver up to 5 % of messages within 200 ms, support email, SMS, in‑app and push channels, and scale to 10 k concurrent users per second while keeping the cost under $0.02 per user‑day.

**Action** – I broke it into three layers:
1. **Ingestion**: a lightweight REST API (FastAPI) that validates payloads and pushes them to a partitioned Kafka cluster; one partition per region to avoid hotspots.
2. **Processing** – a pool of worker pods (Kubernetes) running Celery with Redis broker, each pulling from its region’s topic, applying user preferences and throttling rules (token bucket). We added a caching layer in Memcached for recently sent templates to avoid redundant DB lookups.
3. **Delivery** – an async microservice per channel: SMTP via SendGrid, Twilio SMS, Firebase Cloud Messaging, and a WebSocket gateway for in‑app notifications. Each service uses retry with exponential backoff and dead‑letter queues.

We added health checks and Prometheus metrics; the latency percentile curves showed 99th % < 250 ms under peak load. The cost dropped from $0.08 to $0.018 per user‑day, and we achieved a 30 % lift in conversion for abandoned cart emails.

**Result** – The new service handled 12 k concurrent users with 98 % success rate, cut costs by 78 %, and taught me how to balance throughput, latency, and operational cost using microservices and event‑driven architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
