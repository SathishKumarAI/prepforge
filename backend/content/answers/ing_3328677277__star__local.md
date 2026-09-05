---
qid: ing_3328677277__star__local
question: 'Explain: Rate Limiting and Resource Quotas — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 381
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:52-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup as an ML engineer, we rolled out a new credit‑score model behind a public REST endpoint. Within the first week, a handful of automated scripts were hitting the API at 10 k requests per minute, causing our GPU workers to throttle and some downstream services to time out.

**Task:**  
I had to design a safety layer that would protect the inference cluster from abuse while still allowing legitimate users to get results with minimal latency. The goal was to enforce both rate limits and overall resource quotas so we could guarantee SLA compliance for paying customers and keep the platform stable.

**Action:**  
I implemented a two‑tier guard:  
1. **Token bucket per user** stored in Redis, refreshed every second, capped at 200 requests/min with burst allowance of 50. This gave fine‑grained control without adding latency.  
2. A global **CPU/GPU quota** enforced via Kubernetes resource limits and Prometheus alerts; when total inference time exceeded the set threshold, a temporary circuit breaker paused new jobs. I also added an exponential back‑off middleware in FastAPI to gracefully reject over‑limit requests with clear error codes.  

I logged all throttled events to ElasticSearch for audit and used Grafana dashboards to monitor usage patterns.

**Result:**  
After deployment, API uptime rose from 92 % to 99.8 %, and we avoided any GPU overload incidents during peak traffic spikes. The rate‑limiting policy also reduced billing anomalies by 35 %. I learned that combining per‑user quotas with system‑wide resource caps provides both safety and transparency—critical for responsible AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
