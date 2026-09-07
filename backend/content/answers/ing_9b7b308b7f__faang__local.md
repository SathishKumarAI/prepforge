---
qid: ing_9b7b308b7f__faang__local
question: 'Explain: So you know plan plan for unreliability — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 485
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:45:45-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how a system like YouTube can scale while dealing with unreliability (network drops, server failures, spikes). I’ll assume we’re talking about video ingestion, storage, and delivery at global scale.

**Approach**  
1. **Decouple components** – use message queues for ingest → transcoding → CDN distribution.  
2. **Replicate data** – store videos in a sharded object store with geo‑replication.  
3. **Cache aggressively** – edge caches (CDN) reduce load on origin servers.  
4. **Graceful degradation** – fallback to lower‑quality streams or cached copies when backends fail.  
5. **Observability & auto‑recovery** – monitor latency, error rates; automatically spin up new instances.

**Depth**  
- *Ingestion*: Users upload → message queue → transcoding workers (stateless). Workers pull jobs, run FFmpeg pipelines, push results to S3‑like storage.  
- *Storage*: Use consistent hashing across object buckets with replication factor ≥ 3; store metadata in a distributed NoSQL DB.  
- *Delivery*: CDNs fetch from nearest edge; if an edge is down, requests hit the next hop or origin.  
- *Failover*: If a transcoder dies mid‑job, its job stays in the queue and another worker retries.  
- *Load balancing*: Use DNS‑based global load balancer with health checks; traffic directed to healthy regions.

**Edge Cases**  
- Massive upload bursts → queue backpressure, scaling workers horizontally.  
- Network partition → eventual consistency of metadata; use conflict‑resolution policies.  
- Sudden CDN outage → fallback to origin, increased latency but still functional.

**Optimize & Communicate**  
I’d iterate on replication factor vs cost, tune cache eviction (TTL) based on video popularity trends, and introduce adaptive bitrate switching for unreliable links. I’d explain that each layer is independent, so a failure in one doesn’t cascade; we measure SLAs at every boundary and adjust thresholds dynamically. This shows structured thinking, technical depth, and an eye toward maintainability—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
