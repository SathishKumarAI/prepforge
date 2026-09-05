---
qid: ing_8151ca02e9__star__local
question: 'Explain: Others — Tech-Stacks-Live-Apps/GoJek.md at main \u00b7 Anshul619/Tech-Stacks-Live-Apps
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 297
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:56-05:00'
sources: []
---

**Situation**  
When I joined the product team at GoJek, our live‑app traffic had spiked by 35 % during peak hours and latency in the recommendation microservice was creeping above the SLA of 120 ms.

**Task**  
I needed to redesign the recommendation stack so it could handle the load without breaking the user experience, all while keeping the cost under the quarterly budget.

**Action**  
I mapped the existing Go + gRPC service onto a container‑orchestrated architecture using Docker and Helm on Kubernetes. I introduced a Redis cache layer for cold‑start data, swapped the old MySQL join queries with a ClickHouse analytical store, and added OpenTelemetry tracing to pinpoint bottlenecks. Using Grafana dashboards, I set up alerts that triggered automatic horizontal scaling of the Go pods based on request latency thresholds.

**Result**  
Latency dropped from 180 ms to 85 ms during peak periods (a 53 % improvement), throughput increased by 1.8×, and we reduced infrastructure spend by 12 % through more efficient auto‑scaling. I learned how to balance performance, observability, and cost when refactoring live systems in a high‑traffic fintech environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
