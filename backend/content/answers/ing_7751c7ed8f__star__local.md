---
qid: ing_7751c7ed8f__star__local
question: 'Explain: Stage 4: Multiple App Servers (500K-2M users)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 381
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:30-05:00'
sources: []
---

**Situation** – At my last startup we were launching a recommendation engine that had already grown from 500 k to 2 million active users during the previous beta phase. The single-node Flask service that was fine for 100 k traffic now hit CPU saturation and latency spikes during peak hours.

**Task** – I needed to redesign the serving architecture so it could handle sustained throughput of ~3 000 requests per second, keep response time under 200 ms, and support zero-downtime upgrades while keeping costs manageable.

**Action** – First, I containerized the model with Docker and exposed a gRPC endpoint. Using Kubernetes we spun up an autoscaling group of 12 replicas behind an NGINX ingress controller with weighted round‑robin load balancing. To avoid hot‑spotting we added request sharding: each request carried a user hash that mapped to a specific pod, ensuring cache locality for the in‑memory vector store. We also introduced a Redis cache layer for the top 10 % of popular items and switched from single-threaded Python to multiprocessing with Gunicorn workers tuned to CPU cores. Finally, I set up Prometheus/Grafana dashboards to monitor latency distribution, error rates, and pod health.

**Result** – After rollout, throughput increased to 4 500 rps, average latency dropped from 350 ms to 120 ms, and the error rate fell below 0.02 %. The system handled a sudden spike of 5 M users during a holiday sale with no degradation. I learned that thoughtful request routing combined with lightweight caching can turn a monolith into a resilient, multi‑server ML service without overprovisioning resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
