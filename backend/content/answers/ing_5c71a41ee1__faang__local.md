---
qid: ing_5c71a41ee1__faang__local
question: 'Explain: So suddenly you have a lot more — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 490
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:18:16-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how YouTube scales when a sudden spike (e.g., the Seattle Conference) causes a huge influx of viewers.  
Assumptions:  
1. Traffic is read‑heavy, with occasional writes (comments, likes).  
2. Latency must stay < 200 ms for 95 % of requests.  
3. Budget constraints allow incremental scaling but not overnight data center expansion.

**Approach**  
1. **Observability & Load Shaping** – real‑time metrics, auto‑scaling policies, rate limiting.  
2. **Horizontal Scaling** – stateless video delivery servers behind a CDN; autoscale based on CPU/IO.  
3. **Cache‑First Delivery** – edge caches (CDN), regional cache layers, and in‑app LRU caches for metadata.  
4. **Partitioning & Sharding** – split user data by geography/ID to reduce contention.  
5. **Backpressure & Circuit Breaker** – graceful degradation when downstream services saturate.

**Depth**  
- *CDN*: Pull‑through caching reduces origin load 10×; edge cache hit ratio > 90 %.  
- *Autoscaling*: Predictive models (e.g., ARIMA on request counts) trigger new instances 5 min before spike peaks.  
- *Sharding*: Video metadata in a distributed key‑value store with consistent hashing; each shard handles ~10k requests/s.  
- *Backpressure*: If cache miss rate > 30 %, throttle client requests and queue writes to a message bus (Kafka).  
Complexity: O(log N) for sharded lookups, constant time for CDN cache hits.

**Edge Cases**  
- Flash crowds in one region → edge cache eviction.  
- Sudden API failures → fallback to read‑only replicas.  
- Bot traffic → anomaly detection and request throttling.

**Optimize & Communicate**  
Iterate on autoscaling thresholds after each event; monitor latency distribution, not just averages. Explain trade‑offs: higher CDN costs vs. reduced origin load. Summarize that a layered, cache‑centric architecture with predictive scaling keeps YouTube responsive even during unexpected surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
