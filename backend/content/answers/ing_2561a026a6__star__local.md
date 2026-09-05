---
qid: ing_2561a026a6__star__local
question: 'Explain: Pattern 1: Active-Passive (Failover) — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 394
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:26-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the edge‑caching layer for a global media company whose traffic spiked 4× during live events. The existing active‑active load balancer kept all nodes busy but had no graceful failover; when a primary data center went down, users saw 503 errors for several minutes.

**Task** – Build a fault‑tolerant system that keeps the CDN alive with minimal latency, supports instant switchover, and guarantees at least 99.9% uptime during regional outages.

**Action** – I chose an active‑passive architecture:  
1. Deployed two identical HAProxy clusters behind a DNS‑based global load balancer (AWS Route 53).  
2. Implemented health checks that ping each cluster’s “heartbeat” endpoint every 5 s; on failure the primary flag is cleared in Redis, which triggers the passive cluster to receive traffic via weighted routing.  
3. Used Kubernetes’ ClusterIP for internal service discovery and a shared NFS volume so the passive cache can instantly sync content from the active side with rsync + LVM snapshots every 30 s.  
4. Added a “grace period” in HAProxy to keep existing connections alive during switchover, preventing abrupt disconnects.  
5. Automated rollback scripts that re‑enable the primary once it recovers.

**Result** – After deployment, failover tests showed <2 s latency increase and zero 503 errors; uptime rose from 99.4% to 99.97%. I learned that coupling DNS routing with in‑cluster health state yields predictable, low‑impact switchover while keeping infrastructure simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
