---
qid: ing_878d7f68cd__star__local
question: 'Explain: Domain name system — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 317
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:40-05:00'
sources: []
---

**Situation** – At my previous company we were launching a new cloud‑based SaaS platform that needed to support millions of customer domains and provide subdomain routing with zero downtime. Our existing DNS layer was a single Redis instance, which quickly became a bottleneck during traffic spikes.

**Task** – I had to redesign the domain name system to be horizontally scalable, highly available, and able to handle 10 M queries per second while guaranteeing <50 ms latency for 99.9% of requests.

**Action** – First, I broke the problem into three layers: a front‑end load balancer (NGINX), a distributed cache cluster (Cassandra + Memcached), and a resilient authoritative zone server written in Go using gRPC. I implemented consistent hashing to shard domain records across Cassandra nodes, added TTL‑based cache invalidation, and used vector clocks for conflict resolution. For failover, each zone was replicated across three availability zones with automated health checks that switched traffic on failure. I also introduced a CDN edge layer to serve cached DNS responses globally.

**Result** – The new system handled 12 M QPS with <30 ms latency, reduced mean response time by 35%, and eliminated single‑point failures. I learned the importance of separating concerns (load balancing, caching, persistence) and that rigorous consistency models can coexist with low latency in a globally distributed DNS service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
