---
qid: ing_1a6bed493b__star__local
question: 'Explain: Concurrent Connections — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 340
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:17-05:00'
sources: []
---

**Situation** – At my last role I was tasked with scaling the real‑time analytics pipeline that ingested telemetry from over 50 k IoT devices. The incoming HTTP stream hit a single application server and we started seeing 80 % CPU usage and a 2 s average latency spike during peak hours.

**Task** – Build a load‑balancing layer that could sustain thousands of concurrent connections, keep each client’s session state, and drop traffic gracefully when the backend was saturated.

**Action** – I chose Nginx as the front‑end LB because of its low memory footprint and built‑in health checks. I configured it with an upstream pool of 10 stateless microservices behind a Redis cache for sticky sessions (using `ip_hash` to keep device data local). To handle sudden bursts, I added a “request queue” module (`lua-resty-limit-req`) that throttles clients after 100 req/s per IP and returns a 429 with an exponential back‑off header. Finally, I set up Prometheus/Grafana dashboards to monitor `nginx_http_request_duration_seconds` and backend CPU, feeding alerts into PagerDuty.

**Result** – After deployment the average latency dropped from 2 s to 300 ms under peak load, and we maintained a 99.8 % request success rate during a 20× traffic spike. I learned that combining lightweight LB tools with per‑client throttling can dramatically improve resilience without adding costly hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
