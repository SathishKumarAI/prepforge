---
qid: ing_67fc083057__star__local
question: 'Explain: 5.4 Monitoring and Logging — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 373
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:28-05:00'
sources: []
---

**Situation:**  
At my previous startup, the push‑notification microservice was hitting a 4 % failure rate during peak traffic (8 k requests/second). The engineering lead wanted us to reduce outages and give ops instant visibility into delivery health.

**Task:**  
I needed to build a monitoring and logging framework that could surface failures in real time, correlate them with request traces, and trigger alerts without flooding the queue.

**Action:**  
First, I added OpenTelemetry instrumentation to capture span data for each notification job—status, latency, retry count. These spans were exported to Grafana Loki as structured logs (JSON) and Prometheus metrics. I defined a “critical path” alert: any 5xx rate > 0.5 % over 2 min would fire an Opsgenie webhook. To avoid alert fatigue, I implemented exponential back‑off suppression using a Redis counter keyed by service region. For log aggregation, I introduced a Kafka sink that parsed logs into ElasticSearch, enabling full‑text search on `error_code` and `user_id`. Finally, I wrote a lightweight dashboard showing per‑region success rates, average delivery time, and the top 10 failure reasons.

**Result:**  
Within two weeks, the failure rate dropped to < 0.1 %. Opsgenie alerts now include actionable metrics (e.g., “queue depth” and “retry stack”), reducing mean time to recovery from 45 min to 12 min. I learned that coupling structured logs with distributed tracing gives ops a clear root‑cause path, and that alert suppression logic must be data‑driven to balance sensitivity and noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
