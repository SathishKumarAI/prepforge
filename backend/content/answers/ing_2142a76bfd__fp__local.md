---
qid: ing_2142a76bfd__fp__local
question: 'Explain: Streaming Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 391
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:16:57-05:00'
sources: []
---

**Streaming traffic in a music‑service like Spotify is an optimization problem: deliver high‑quality audio to millions of users with minimal latency and maximal throughput while keeping costs bounded.**

1. **Fundamental constraints**  
   * Bandwidth ≈ (≈ 5 MB/s per user for 320 kbps) × users → terabits per second at peak.  
   * Latency < 200 ms to avoid buffering.  
   * Content distribution must respect copyright (regional rights, DRM).  

2. **Why the canonical architecture works**  
   * **CDN edge nodes**: place copies of popular tracks close to users; reduces round‑trip time and backbone load.  
   * **Sharded storage**: each audio file is split into fixed‑size chunks and stored across many disks/objects; allows parallel read and fault isolation.  
   * **Request routing with consistent hashing**: maps a user’s session to a specific edge node, ensuring cache locality and preventing “cache stampedes.”  
   * **Rate limiting & token bucket per user**: guarantees no single stream monopolizes bandwidth and smooths traffic spikes.

3. **Deeper principle – Information‑theoretic redundancy vs cost**  
   The CDN stores *redundant* copies of popular tracks to reduce average path length, but sharding and erasure coding on the origin side keeps storage overhead near Shannon’s limit for a given reliability.

4. **Non‑obvious insight**  
   Most designs treat the CDN as a passive cache; in practice, **dynamic prefetching**—predicting the next track a user will play based on listening patterns—shifts bandwidth usage to off‑peak periods and dramatically lowers peak CDN load without additional storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
