---
qid: ing_51a70ff61d__star__local
question: 'Explain: Resiliency & Scalability — Uber Engineering \u2014 Where the Digital
  World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 315
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:32-05:00'
sources: []
---

**Situation**  
When I joined Uber’s ride‑matching team, our real‑time dispatch system was hitting a bottleneck: during peak hours we could only handle ~4 k rides per second before latency spiked and some requests timed out.

**Task**  
I had to redesign the matchmaking pipeline so it could scale to 20 k rides/sec while staying resilient against node failures and network partitions, all without breaking existing API contracts.

**Action**  
First, I broke the monolith into microservices—matching, pricing, and routing—each deployed with Kubernetes and autoscaled based on CPU & request latency. I introduced a sharded Kafka topic for ride requests; each shard was processed by an independent worker pool to avoid contention. For resiliency, I wrapped critical calls in a circuit breaker (Hystrix) and added exponential back‑off retries. To guarantee at‑least‑once delivery, I used idempotent message handling with a Redis cache keyed on request ID. Finally, I instrumented the entire stack with Prometheus + Grafana dashboards and set up automated chaos tests that randomly killed pods to verify recovery.

**Result**  
The system now processes 22 k rides/sec with <30 ms average latency during rush hour, and our failure‑rate dropped from 4% to below 0.1%. I learned that combining sharding, stateless services, and proactive chaos engineering is the recipe for true resilience at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
