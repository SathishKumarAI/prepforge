---
qid: ing_3e848ae553__faang__local
question: 'Explain: So, we have sort of a way — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 510
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:09:21-05:00'
sources: []
---

**Clarify**

> *Question:* “Explain how you would scale a video‑streaming platform (like YouTube) for massive global traffic.”  
Assumptions:  
1. We need low latency and high throughput worldwide.  
2. Content is read‑heavy; writes are mostly metadata updates.  
3. Budget constraints but can use cloud services.

**Approach**

1. **Front‑end CDN layer** – edge caching, HTTP/2, adaptive bitrate.  
2. **Back‑end sharding** – partition video IDs by hash → regionally colocated storage (object stores + local cache).  
3. **Metadata service** – distributed key–value store (e.g., Cassandra) with eventual consistency.  
4. **Load balancing & autoscaling** – Kubernetes/managed services to spin workers per traffic spike.  
5. **Observability** – metrics, tracing, anomaly detection.

**Depth**

- *CDN:* Use multi‑origin edge nodes; leverage request routing (GeoIP). Cache control headers for 30–90 days.  
- *Storage:* Store raw and transcoded streams in object storage (S3/Blob). Keep a local cache of hot videos on SSDs to hit >95% cache hit ratio.  
- *Metadata:* Partition by user or content cluster; use read‑replicas for high throughput, write‑through caching with Redis. Consistency: “Read your own writes” via session stickiness.  
- *Scaling:* Autoscale based on CPU/queue depth. Use spot instances for non‑critical workers to reduce cost.  
- *Latency:* Keep CDN response <100 ms; backend <200 ms.

**Edge Cases**

- Sudden viral content → cache warming, burst capacity.  
- Geo‑restrictions: enforce policy at edge.  
- Failure of a region: fallback to nearest healthy origin.  
- Data consistency during rapid metadata updates.

**Optimize & Communicate**

1. **Performance tests:** simulate 10k QPS, measure cache hit ratios.  
2. **Cost‑benefit analysis:** spot vs on‑demand, CDN edge count.  
3. **Explain trade‑offs:** eventual consistency vs latency; caching granularity vs storage cost.  

This structured plan balances scalability, reliability, and cost—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
