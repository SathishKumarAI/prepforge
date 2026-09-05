---
qid: ing_10dbd5dc33__star__local
question: 'Explain: you could run into Network latency and — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 347
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:13-05:00'
sources: []
---

**Situation** – At my previous job we migrated a monolithic recommendation engine to a set of microservices on Kubernetes. Within two weeks of deployment the end‑to‑end latency for a user’s personalized playlist request spiked from 120 ms to over 1,200 ms, causing a 15% drop in daily active users.

**Task** – I had to identify the root cause of the latency, reduce it below 250 ms, and build a monitoring strategy that would surface similar issues before they impacted customers.

**Action** – First, I instrumented each service with OpenTelemetry traces and added request/response metrics to Prometheus. Using the Netflix Chaos Monkey framework, I introduced controlled failures (latency spikes, dropped packets) in staging to see how services behaved under stress. The traces revealed that a “recommendation‑catalogue” service was repeatedly hitting an external database over a slow network link. I applied Netflix’s “SLA‑Driven Service Level Objectives” by adding a circuit breaker (Hystrix) and caching layer (Caffeine) around the DB calls, and moved the database to a region with lower egress latency. I also rewrote the data pipeline to batch requests during peak hours.

**Result** – Latency dropped to an average of 180 ms, restoring the 15% user drop. Our new monitoring alerts now trigger on any request exceeding 200 ms, giving the team early warning. The exercise taught me how chaos engineering and proactive observability turn hidden network issues into measurable, fixable problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
