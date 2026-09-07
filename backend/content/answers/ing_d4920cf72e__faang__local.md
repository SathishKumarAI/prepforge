---
qid: ing_d4920cf72e__faang__local
question: 'Explain: hey guys welcome to Pyon my name — Scalability at YouTube'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 514
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:16-05:00'
sources: []
---

**Clarify**  
The interview asks you to describe how a system like **YouTube** scales its video‑delivery platform. Key points to confirm: *What traffic volumes are we handling?* *Which layers (upload, encoding, storage, CDN, recommendation) must scale?* *Do we care about latency, consistency, or cost?*

**Approach**  
1. **Data ingestion & processing** – parallel uploads → sharded storage → distributed transcoding pipelines.  
2. **Storage & caching** – object store (S3‑like), CDN edge caches with cache‑invalidation strategies.  
3. **Serving layer** – stateless microservices behind a global load balancer, using consistent hashing for request routing.  
4. **Recommendation engine** – distributed ML training clusters, model serving via inference containers that auto‑scale.

**Depth**  
- *Upload*: Use S3-compatible object storage with multipart uploads; each video split into chunks hashed to shards, enabling concurrent writes and fault tolerance.  
- *Encoding*: A fleet of GPU/CPU workers in a Kubernetes cluster; autoscale based on queue depth; use spot instances for cost savings.  
- *CDN*: Edge nodes cache popular videos; employ stale‑while‑revalidate to keep latency low while fetching fresh content from origin.  
- *Recommendation*: Train models nightly on sharded clickstream logs stored in BigQuery; serve via TensorFlow Serving, scaling horizontally with request rate.

Complexity: Ingestion O(1) per chunk; encoding O(n log n) for parallel jobs; serving O(log k) lookup in CDN. Trade‑offs involve consistency vs. latency (eventual cache invalidation).

**Edge Cases**  
- Sudden traffic spikes (e.g., live events): pre‑warm CDNs, burst capacity on transcoding workers.  
- File corruption: implement checksum verification and retry pipelines.  
- Cache misses: fallback to origin with graceful degradation.

**Optimize & Communicate**  
Explain that horizontal scaling of stateless services and sharded data stores provides linear throughput growth; adding more edge nodes reduces latency. Highlight cost controls (spot instances, cache hit ratios). End by summarizing how each layer’s scalability aligns with YouTube’s massive global user base and real‑time demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
