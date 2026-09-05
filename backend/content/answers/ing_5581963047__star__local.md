---
qid: ing_5581963047__star__local
question: 'Explain: Latency budget (p95, the table interviewers want to see)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 379
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:52-05:00'
sources: []
---

**Situation**  
At my last role I was on the team that launched a recommendation engine for an e‑commerce platform with over 5 M daily users. The product owner demanded sub‑100 ms latency for 95 % of requests (p95) to keep the checkout flow snappy.

**Task**  
I had to design, monitor and enforce a p95 latency budget across all microservices that fed into the recommendation model while keeping throughput high enough for peak traffic.

**Action**  
First I instrumented every service with OpenTelemetry, sending spans to Prometheus. Using Grafana dashboards I plotted 99th‑percentile latencies per endpoint and set alerting rules for any service exceeding 120 ms on p95. To tighten the budget I applied several optimizations:  
1) Quantized the model from FP32 to INT8, reducing inference time by ~30 %.  
2) Added a request‑coalescing layer that batched identical queries during high load, cutting context switches.  
3) Implemented a rate‑limiting circuit breaker on downstream caches to avoid cascading failures.  
4) Ran nightly A/B tests, comparing the new pipeline against baseline and feeding results back into the CI pipeline.

**Result**  
After deployment, p95 latency dropped from 210 ms to 78 ms during peak hours, meeting the budget with a 35 % margin. Throughput stayed above 10k requests per second. I learned that coupling observability with iterative performance tuning is essential for maintaining strict latency guarantees in AI‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
