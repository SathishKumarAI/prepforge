---
qid: ing_0783053de3__star__local
question: 'Explain: High Level Design — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 362
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:53-05:00'
sources: []
---

**Situation** – At my previous company we had a micro‑service architecture that needed real‑time push notifications for user events (orders, shipping updates, promotions). The existing system was a monolithic email sender; it couldn’t scale to millions of users and had latency issues during traffic spikes.

**Task** – I was tasked with designing a high‑level notification service that could handle 5 M active users, support push, SMS, and email channels, guarantee at least 99.9% delivery, and allow dynamic subscription preferences without code changes.

**Action** – I architected an event‑driven pipeline: every domain event is published to Kafka topics; a “Notification Producer” aggregates events per user into a priority queue in Redis. A pool of worker services consumes from the queue, resolves channel preferences via a lightweight gRPC “Preference Service”, and dispatches through channel adapters (Twilio for SMS, Firebase Cloud Messaging for push, SES for email). I introduced idempotency keys to avoid duplicate sends and used exponential back‑off retries with a dead‑letter topic. For scaling, each worker runs in Kubernetes pods autoscaling on CPU and queue depth. Metrics are streamed to Prometheus; we set alerts for latency >200 ms or delivery failure >0.5%.

**Result** – The new service handled 10× traffic during peak sales without outages, reduced average notification latency from 4 s to 150 ms, and achieved a 99.97% successful delivery rate. I learned that decoupling event ingestion, preference resolution, and channel dispatch with proper idempotency is key for reliability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
