---
qid: ing_59fa7c9203__star__local
question: 'Explain: Step 4: Scale the design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 355
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:32-05:00'
sources: []
---

**Situation:**  
At my last company we built a lightweight pastebin service for internal demos. By the end of Q2, traffic had jumped from ~200 pps to over 10 k pps during product launches, and our single‑node Redis cache was hitting eviction limits.

**Task:**  
I needed to scale the architecture so it could handle sustained peaks of 20 k requests per second with <50 ms latency while keeping cost under $1k/month.

**Action:**  
First, I introduced a front‑end load balancer (NGINX) behind which we spun up multiple stateless application servers in a Docker Swarm. For persistence, I replaced the local SQLite file with a sharded PostgreSQL cluster using read replicas; each shard handled 5 k pps. To avoid hot spots on the key–value store, I switched from a single Redis instance to a Cluster mode with slot hashing and added a memcached fallback for infrequently accessed pastes. Finally, I instrumented Prometheus alerts for cache hit ratios and replica lag, and set up auto‑scaling rules in Kubernetes that spun up extra pods when CPU >70 % or request latency >30 ms.

**Result:**  
Post‑deployment, the service handled 25 k pps with 92 % cache hit rate and average latency of 35 ms. Monthly ops cost stayed at ~$950, and we reduced incident tickets by 80 %. I learned that early adoption of sharding, read replicas, and dynamic scaling can turn a prototype into production‑grade resilience without breaking the budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
