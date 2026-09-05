---
qid: ing_f07d534a8d__star__local
question: 'Explain: Failover Mechanisms — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 370
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:02-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time recommendation engine that served millions of users per day. The model inference layer ran on a Kubernetes cluster behind an NGINX ingress. One night, a node failure caused the entire pod set to crash, dropping 15 % of traffic and causing a spike in latency.

**Task:**  
I needed to design a failover mechanism that would keep predictions available with sub‑200 ms latency while automatically recovering from any single‑point failures without manual intervention.

**Action:**  
I implemented a two‑tier strategy:  
1. **Active‑passive replication** – spun up an identical “shadow” cluster in a separate AZ, mirroring the same TensorFlow Serving instances via Kubernetes StatefulSets and using etcd for model version synchronization. I added a lightweight health probe that routed traffic to the shadow cluster if any primary pod failed.  
2. **Circuit breaker + back‑off** – integrated Hystrix into the API gateway; when request rates spiked beyond 200 req/s, it throttled requests to the primary and gradually re‑enabled them as metrics stabilized. I also added a Redis cache with a TTL of 5 s to serve stale predictions during brief outages.

**Result:**  
After deployment, we observed zero downtime during a subsequent node failure; latency stayed below 180 ms for 99.8 % of requests. The system recovered automatically within 30 seconds, and we reduced SLA violations by 42 %. I learned that combining architectural redundancy with intelligent traffic shaping yields robust ML services without over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
