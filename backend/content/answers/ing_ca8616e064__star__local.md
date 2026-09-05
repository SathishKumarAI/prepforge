---
qid: ing_ca8616e064__star__local
question: 'Explain: Components for Streaming — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 363
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:18-05:00'
sources: []
---

**Situation:** While working on a media‑delivery startup, we hit a bottleneck where our batch‑processing pipeline couldn't keep up with real‑time user requests for new releases, causing 30 % of plays to time out during peak hours.

**Task:** I was tasked with redesigning the system so that users could stream any track within 200 ms from request to playback, while keeping storage costs under $2M per year and ensuring data consistency across global CDN nodes.

**Action:** I broke the architecture into four core streaming components:  
1) **Ingestion Layer** – a Kafka cluster with topic sharding by artist ID, guaranteeing order per user stream.  
2) **Metadata Service** – a Redis‑based cache that holds track pointers and DRM tokens, refreshed via a scheduled Consul watch.  
3) **Content Delivery Network (CDN)** – we integrated Akamai’s edge caching, pulling from our S3 object store with signed URLs, reducing latency to <80 ms for 95 % of requests.  
4) **Monitoring & Autoscaling** – Prometheus metrics fed into an OpenTelemetry collector; a custom autoscaler spun up new consumer pods when Kafka lag exceeded 5 s.

**Result:** The new design cut average play‑start latency from 1.2 s to 180 ms, reduced error rates by 97 %, and kept annual storage costs at $1.8M. I learned that treating streaming as a pipeline of stateless services with strong caching can dramatically improve user experience while keeping operational complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
