---
qid: ing_982d6d6803__faang__local
question: 'Explain: It''s like, oh, let''s add another 10 — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 593
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:36-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asked to explain how we could “add another 10” (e.g., 10 ×) the capacity of a YouTube‑style streaming platform while keeping latency low and cost reasonable.  
Assumptions:  
- Current traffic ~ 10 M concurrent viewers, 1 Tbps bandwidth.  
- Core services: ingest → transcoding → CDN delivery → analytics.  
- Goal: preserve QoS (≤ 200 ms end‑to‑end), budget < 2× current spend.

**2️⃣ Approach**  
1. **Profile bottlenecks** – CPU, I/O, network, memory per microservice.  
2. **Horizontal scaling + sharding** – add more nodes and partition data by user/region.  
3. **Edge caching & smarter CDN placement** – reduce origin load.  
4. **Adaptive bitrate streaming (ABR)** – serve lower‑res when bandwidth tight.  
5. **Cost‑aware resource allocation** – spot instances, autoscaling policies.

**3️⃣ Depth**  
- *Transcoding*: Use GPU clusters and batch job queues; pre‑transcode popular videos to reduce on‑demand load.  
- *CDN*: Deploy edge servers in 100+ cities; use anycast + weighted round‑robin. Cache duration tuned per content popularity (TTL ≈ 24 h for evergreen, < 1 h for live).  
- *Analytics*: Shift from synchronous to event‑driven pipelines (Kafka → Flink) to decouple processing and reduce latency.  
- *Autoscaling*: Predictive models (LSTM on traffic curves) trigger scale‑up 5 min before peaks.  
Complexity:  
- Horizontal scaling O(1) per request; sharding reduces write contention to O(log N).  
- Cost trade‑off: spot instances reduce compute cost by ~30 % but add risk of preemption; mitigated with checkpointing.

**4️⃣ Edge Cases**  
- Sudden 50× spike (e.g., live event): fallback to lower bitrate, throttle non‑essential analytics.  
- CDN outage in a region: failover to nearest edge + increase origin fetch rate temporarily.  
- Data consistency after sharding: use distributed transaction or eventual consistency with conflict resolution.

**5️⃣ Optimize & Communicate**  
Present a dashboard showing real‑time latency, cache hit ratios, and cost per request. Iterate on the predictive scaling model until error < 5 %. Explain that each layer’s design decisions trade off latency vs. cost, and how we monitor for SLA violations to trigger corrective actions. This structured narrative demonstrates deep systems thinking while staying concise—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
