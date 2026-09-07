---
qid: ing_c3567a596c__faang__local
question: 'Explain: So here''s another kind of variant of — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 481
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:15:15-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how to scale a video‑streaming service like YouTube at the level of a large conference (e.g., Seattle).  
Assumptions: we’re focusing on infrastructure, data flow, and key performance metrics (latency, throughput, reliability) rather than algorithmic details.

**Approach**  
1. **Architecture diagram** – CDN + edge caching → origin storage → ingest pipeline → recommendation engine.  
2. **Data flow** – upload → transcoding → metadata extraction → placement in catalog.  
3. **Key metrics** – 99.9 % availability, <200 ms RTT for popular videos, 10× growth in traffic.

**Depth**  
- *CDN & edge caching*: use anycast IPs and multi‑region edge nodes; cache at the lowest resolution first, then higher ones on demand (progressive streaming).  
- *Ingest pipeline*: asynchronous microservices with Kafka topics for “upload”, “transcode‑queued”, “transcode‑done”.  Use container orchestration (K8s) to auto‑scale transcoding workers.  
- *Storage*: object storage (S3/Google Cloud Storage) with lifecycle tiers; use erasure coding for durability.  
- *Recommendation*: a separate ML service that streams events from Kafka, trains online models in Spark, and serves predictions via gRPC.  
- *Observability*: Prometheus + Grafana dashboards; automated alerts on cache hit ratios or transcoding queue depth.

**Edge cases**  
- Sudden viral upload → transcoder surge → autoscaler lag → buffer overflow → use pre‑provisioned “spike pods”.  
- CDN cache miss for a new region → high latency → fallback to origin until warm.  
- Data consistency between catalog and storage when deleting videos → implement eventual consistency with versioning.

**Optimize & Communicate**  
Explain trade‑offs: higher cache hit rates reduce origin load but increase storage cost; autoscaling reduces cost but adds jitter. Suggest A/B testing on cache eviction policies and latency budgets. Conclude by highlighting the importance of decoupling services, using streaming pipelines for real‑time analytics, and continuously measuring SLIs to guide scaling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
