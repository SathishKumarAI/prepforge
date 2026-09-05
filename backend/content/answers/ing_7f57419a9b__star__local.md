---
qid: ing_7f57419a9b__star__local
question: 'Explain: Redundancy Across Layers — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 367
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:48:13-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our payments platform had to process ~3 k transactions per second and was required to maintain 99.999% uptime for regulatory compliance. The previous architecture was monolithic: a single database cluster behind one load balancer, so any outage meant a full service shutdown.

**Task:**  
Design a multi‑layered redundancy strategy that would isolate failures, preserve data integrity, and keep latency under 200 ms while keeping cost <20% of the existing bill.

**Action:**  
I introduced three layers of redundancy. First, I replaced the single database with an active‑active PostgreSQL cluster using Patroni for automatic failover; each node ran in separate availability zones. Second, I added a CDN‑based edge cache (Redis Cluster) to serve read‑heavy requests and reduce DB load. Third, I deployed a dual‑stack Kubernetes control plane with an external etcd quorum to avoid single points of failure. For traffic routing, I implemented AWS Global Accelerator to keep failover latency <30 ms across regions. I also added health‑check probes that trigger automatic pod restarts and used Helm hooks for graceful draining.

**Result:**  
After implementation, the platform achieved 99.9997% uptime over six months, reduced mean time to recovery from 12 h to under 3 min, and cut average response times from 350 ms to 140 ms. I learned that layered redundancy not only improves availability but also provides measurable performance gains when designed with cost‑effective, cloud‑native tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
