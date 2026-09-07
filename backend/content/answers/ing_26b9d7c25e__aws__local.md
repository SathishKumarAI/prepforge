---
qid: ing_26b9d7c25e__aws__local
question: 'Explain: Scalable System Design Patterns — Pragmatic Programming Techniques:
  Scalable System Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 422
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:33-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the design of a recommendation engine that served 3 M active users daily. The existing monolith could not scale beyond 200 requests/sec, and latency was 1.2 s on average—far above our SLA of 500 ms.

**Action – Pattern & AWS Services**  
I applied *Event‑driven microservices* (Kafka → Lambda) and *CQRS + Event Sourcing*.  

| Pattern | Why it fits | Key AWS services |
|---------|-------------|------------------|
| **Microservice decomposition** | Isolates recommendation logic; independent scaling | ECS/Fargate, EKS |
| **Event sourcing** | Guarantees idempotency, audit trail | Kinesis Streams, DynamoDB |
| **CQRS** | Separate read/write models → faster reads | DynamoDB (read‑optimized), S3 for model artefacts |
| **Cache + CDN** | Reduces database load & latency | ElastiCache Redis, CloudFront |

I also introduced *Feature Flags* via AppConfig so new algorithms could roll out gradually. For cost control, I used Spot Instances for batch inference jobs and reserved instances for the critical API layer.

**Result**  
- Throughput increased to 12 k req/s (60×) with 90 % success rate at <400 ms latency.  
- Daily costs fell from $48K to $27K due to efficient resource provisioning.  
- The system now auto‑scales via Application Auto Scaling, reducing manual ops.

**Reflection & Learning**  
I owned the end‑to‑end rollout, diving deep into failure modes (e.g., back‑pressure on Kinesis). After an initial spike caused a 5 % error burst, I added dead‑letter queues and retry logic—an example of *Bias for Action* and *Customer Obsession*. The project earned me the “Architect” badge in our internal recognition program.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
