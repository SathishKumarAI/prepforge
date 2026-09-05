---
qid: ing_110b5d95fd__star__local
question: 'Explain: were optional maybe an email or i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 339
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:48-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we were launching a mobile app that allowed users to reserve and pay for parking spots in real‑time across multiple city lots. Our existing backend was monolithic, causing latency spikes during peak hours and limiting our ability to scale new features.

**Task**  
I had to design a scalable, fault‑tolerant parking‑garage service that could handle 10k concurrent reservations per minute, support dynamic pricing, and integrate with payment gateways—all while keeping response time under 200 ms.

**Action**  
- Decomposed the system into microservices (Reservation, Pricing, Availability, Billing).  
- Implemented a Kafka event bus for real‑time updates of spot status.  
- Used Redis Streams as an in‑memory queue to achieve sub‑50 ms latency for spot allocation.  
- Employed DynamoDB with conditional writes to guarantee idempotent reservations and avoid double booking.  
- Added circuit breakers and exponential backoff for third‑party payment APIs, plus a fallback cache of the last known good price.  
- Built an autoscaling Lambda layer that spun up additional workers based on CloudWatch metrics.

**Result**  
The new architecture cut reservation latency from 750 ms to 120 ms, increased throughput by 3×, and reduced outage incidents by 85%. I learned how event‑driven patterns can solve real‑world scaling problems while keeping the system resilient and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
