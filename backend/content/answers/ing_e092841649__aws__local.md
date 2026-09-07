---
qid: ing_e092841649__aws__local
question: 'Explain: Write-Around — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 389
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:15-05:00'
sources: []
---

**Situation – Task:**  
I led a team that needed to expose a high‑throughput recommendation API for an e‑commerce platform. The database was the single source of truth, but read latency was unacceptable during flash sales.  

**Action – Design & Implementation (AWS):**  
We adopted a *write‑around* cache: every write went first to **Amazon DynamoDB** (ACID guarantees), then asynchronously pushed to **ElastiCache for Redis** via an **SQS FIFO queue** and a Lambda consumer. Reads hit Redis; if miss, fallback to DynamoDB and write back to the cache.  
- *Scalability:* Elasticache clusters auto‑scale on CPU/Memory thresholds.  
- *Availability:* Multi‑AZ deployments with read replicas ensured 99.99 % uptime.  
- *Cost:* Lambda bursts during traffic spikes avoided provisioning excess Redis nodes; we saved ~30 % vs a pure in‑memory approach.  

**Result – Metrics:**  
Read latency dropped from 350 ms to <20 ms (90 % reduction), and the API handled 4× the traffic without additional servers. The queue throughput remained stable at 10k msgs/sec, proving the system could absorb flash‑sale spikes.  

**Learning & Ownership:**  
We discovered that stale data was an edge case; adding a TTL of 5 min on cache keys mitigated this risk. I documented the trade‑off between eventual consistency and performance, enabling future teams to tweak the strategy. This experience reinforced **Ownership** (owning end‑to‑end flow) and **Dive Deep** (profiling latency bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
