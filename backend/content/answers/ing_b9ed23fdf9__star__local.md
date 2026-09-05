---
qid: ing_b9ed23fdf9__star__local
question: 'Explain: The "Nines" of Availability — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 343
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:57-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our payment gateway was on a single VM that crashed every winter due to traffic spikes. Customers were losing money and trust; the CFO demanded a 99.999% uptime SLA within six months.

**Task**  
I had to redesign the architecture so the service met “five nines” availability: an error rate of only 0.001% (≈5 minutes downtime per year) while keeping latency under 200 ms and cost below $30k/month.

**Action**  
First, I split the monolith into stateless micro‑services behind a Layer 4 load balancer with health checks every second. I added auto‑scaling groups in two AZs to handle sudden spikes and implemented cross‑region replication of the PostgreSQL DB using logical streaming. For critical paths I introduced circuit breakers (Resilience4j) and cached responses in Redis clusters. Finally, I set up Prometheus/Grafana dashboards and automated alerts for any degradation beyond 99.999% thresholds.

**Result**  
Within three months we achieved 99.997% uptime (≈1 hour/year), reduced latency to 140 ms, and stayed under budget. The exercise taught me that “nines” are not just numbers; they’re a disciplined trade‑off between redundancy, observability, and cost—each extra nine demands exponentially more robust design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
