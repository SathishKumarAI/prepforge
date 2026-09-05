---
qid: ing_b93ec45768__star__local
question: 'Explain: Expected actions — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 375
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:49-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a project that exposed our recommendation engine via a public REST API. After a spike in traffic from a marketing campaign, the backend began throttling requests and latency jumped from 120 ms to over 2 s, hurting user engagement.

**Task** – My goal was to design an adaptive rate‑limiting strategy that protected the inference cluster while maintaining a smooth experience for legitimate users, all within our existing Kubernetes + Envoy stack.

**Action** – I started by instrumenting request logs with per‑client IP and API key metadata. Using Prometheus we built real‑time metrics on QPS and error rates. With this data, I implemented a token‑bucket algorithm in Envoy’s Lua filter: each client had a dynamic bucket size that scaled with their historical usage patterns (e.g., 10 k requests/day). I added an exponential backoff policy for bursty traffic and exposed a “burst window” endpoint for internal services. Finally, we set up alerts to trigger when the overall QPS exceeded 5 k/s, automatically provisioning additional inference pods via Horizontal Pod Autoscaler.

**Result** – Within two weeks of deployment, API latency dropped to 140 ms on average, while the system sustained a peak throughput of 8 k requests per second. User churn fell by 12% in the month following the rollout, and we avoided an incident that would have cost us $15k in compute resources. I learned that combining fine‑grained metrics with adaptive token buckets can keep ML services both robust and responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
