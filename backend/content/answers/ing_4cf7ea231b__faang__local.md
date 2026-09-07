---
qid: ing_4cf7ea231b__faang__local
question: 'Explain: Spotify System Design: High Level Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 485
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:43:12-05:00'
sources: []
---

**Clarify**  
We’re asked for a *high‑level* design of Spotify’s recommendation and streaming system—essentially the data ingestion → feature engineering → model serving → playback pipeline. Key assumptions: millions of users, real‑time personalized playlists, low latency (<200 ms) per track request, 99.9% uptime.

**Approach**  
1. **Data Layer** – ingest user interactions (clicks, skips, dwell time) via Kafka. Persist raw events in a distributed log and aggregate into a columnar store (Druid/ClickHouse).  
2. **Feature Store** – materialize user‑artist‑genre embeddings from the aggregated data; serve via a fast key‑value cache (Redis) for per‑request lookup.  
3. **Model Layer** – train offline matrix‑factorization + deep neural nets on GPU clusters, output vectors stored in the feature store. Deploy online inference using TensorFlow Serving behind an autoscaling gRPC pool.  
4. **Recommendation Service** – receives user ID, fetches cached features, queries the model server for top‑N tracks, then applies business rules (explicit skips, regional licensing).  
5. **Streaming Layer** – once a track is chosen, route to CDN edge nodes; maintain a prefetch queue for seamless playback.

**Depth**  
- Latency budget: 50 ms for feature fetch + 100 ms inference + 30 ms routing = <200 ms.  
- Throughput: ~10k req/s per shard; sharded by user hash to avoid hot spots.  
- Fault tolerance: Kafka replication, read‑replicas for the feature store, graceful degradation to a fallback popularity list.

**Edge Cases**  
- Cold start users → default to global top tracks.  
- Model drift → continuous retraining pipeline with A/B testing before promotion.  
- Bandwidth spikes during releases → auto‑scale CDN and prefetch buffer.

**Optimize & Communicate**  
Explain trade‑offs: storing embeddings in Redis gives speed but limits size; sharding balances load but adds complexity. Highlight that this architecture scales horizontally, keeps user experience smooth, and allows rapid experimentation with new models—all critical for a FAANG‑level product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
