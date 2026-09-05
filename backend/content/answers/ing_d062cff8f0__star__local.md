---
qid: ing_d062cff8f0__star__local
question: 'Explain: Ongoing — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 379
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:06-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with redesigning the Pastebin clone used by our dev‑ops team. The existing prototype had a single‑node Flask app, SQLite DB and no autoscaling, which caused outages during spike events (e.g., when we launched a new CI pipeline).  

**Task**  
I needed to architect a highly available, horizontally scalable system that could handle up to 10k requests per second while keeping latency under 200 ms and supporting user‑generated expiration times.  

**Action**  
I broke the design into three layers:  
1. **API Gateway + CDN** – Nginx with rate‑limiting and CloudFront for global edge caching.  
2. **Microservice Layer** – Stateless Go services behind a Kubernetes cluster, using gRPC for internal calls; each service writes to a sharded PostgreSQL cluster (partitioned by paste hash). I introduced Redis as an in‑memory cache for hot keys and used a TTL queue in SQS to trigger background cleanup jobs.  
3. **Observability** – Prometheus + Grafana dashboards, OpenTelemetry traces, and automated alerts on error rates or memory spikes.  

I also implemented blue/green deployments via ArgoCD and set up autoscaling rules based on CPU/memory thresholds.  

**Result**  
The new system sustained 12k rps with <180 ms latency during load tests, reduced database writes by 35% thanks to caching, and cut downtime from hours to minutes during rollouts. I learned that separating concerns (API, business logic, persistence) and investing in observability are key to scaling simple services into production‑grade systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
