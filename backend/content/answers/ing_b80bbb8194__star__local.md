---
qid: ing_b80bbb8194__star__local
question: 'Explain: Step 1: Notification Request Creation — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 367
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:30-05:00'
sources: []
---

**Situation**  
In a fintech startup, the user engagement metric for push notifications was dropping from 35% to 20% in just three months after we rolled out our new mobile app. The product team wanted a scalable notification service that could handle millions of events per day without overloading the database.

**Task**  
I was tasked with designing the first phase: Notification Request Creation – essentially, how the system receives and validates incoming requests before routing them to downstream workers.

**Action**  
I started by defining an idempotent REST/GRPC API that accepts a payload (user ID, event type, priority). To keep latency low I used a lightweight schema validation library (Pydantic) and added a circuit breaker pattern with Hystrix‑style timeouts. For scalability I introduced a Kafka topic “notification_requests” as the single source of truth; each request is produced to Kafka with a unique correlation ID so retries are safe. I also designed a simple caching layer using Redis to deduplicate requests within a 30‑second window, preventing duplicate pushes when the same event fires twice in quick succession. Finally, I drafted a monitoring dashboard that exposes queue depth and error rates.

**Result**  
The new request pipeline cut average processing time from 350 ms to 80 ms and reduced duplicate notifications by 92%. Load testing showed the system could handle 1.2 million requests per minute with <99th percentile latency of 120 ms. I learned that early‑stage design decisions—especially choosing an event bus and deduplication strategy—can dramatically improve both performance and reliability in a notification service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
