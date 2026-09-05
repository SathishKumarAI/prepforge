---
qid: ing_31829e4e4c__star__local
question: 'Explain: 5.3 Reliability — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 411
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:24-05:00'
sources: []
---

**Situation**  
I was leading the backend team for a fintech app that sends real‑time transaction alerts to millions of users. During a recent audit, we discovered that during peak load (≈1 M requests/second) our notification service dropped 0.8% of messages, causing customer complaints and regulatory penalties.

**Task**  
Redesign the notification pipeline so it guarantees >99.9% delivery while keeping latency under 200 ms, even under traffic spikes or partial outages.

**Action**  
1. Introduced a **partitioned Kafka cluster** with topic replication (3‑node ISR) to decouple producers from consumers and provide durable buffering.  
2. Implemented an **idempotent consumer** that writes each message to a write‑through cache (Redis) before sending, ensuring at‑least‑once semantics without duplicates.  
3. Added a **dead‑letter queue** for messages that fail after 5 retries; a separate microservice reprocesses them with exponential backoff and alerts ops via PagerDuty.  
4. Deployed **Circuit Breaker** patterns (Hystrix) around external push APIs, coupled with graceful degradation to fallback email notifications when SMS gateways are down.  
5. Monitored delivery latency and error rates with Prometheus + Grafana; set up alerting for SLA breaches.

**Result**  
After deployment, message loss dropped from 0.8% to <0.01%, meeting the >99.9% SLA. Latency averaged 145 ms under peak load. The system now automatically recovers from partial failures and provides clear visibility into delivery health, reducing support tickets by 35% and avoiding potential regulatory fines. I learned that combining durable messaging with idempotent processing and graceful degradation is key to building truly reliable notification services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
