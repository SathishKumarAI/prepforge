---
qid: ing_5f5534034e__faang__local
question: 'Explain: System Design Videos (Upcoming) — Course Introduction | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:58-05:00'
sources: []
---

**Clarify**  
The interview asks for a high‑level design of a “System Design Videos” platform that will host upcoming course videos (e.g., a pre‑release library). I’ll assume: 1) users can stream or download, 2) there’s an admin UI to upload and schedule releases, 3) the system must scale to millions of concurrent viewers, and 4) we need strong durability for video assets.  

**Approach**  
1. **Front‑end CDN** for low‑latency delivery.  
2. **Microservice API layer** (REST/GraphQL) exposing endpoints: upload, schedule, list, play.  
3. **Storage tier**:  
   - *Object store* (S3/MinIO) for raw uploads.  
   - *Transcoding service* that generates adaptive‑bitrate HLS/DASH manifests.  
4. **Metadata DB** (PostgreSQL + Redis cache).  
5. **Auth & DRM** using JWT and token‑based access tokens per stream.  

**Depth**  
- **Upload flow**: client → API → S3 multipart upload; callback to transcoder via message queue (Kafka).  
- **Transcoder** writes HLS segments back to S3, updates DB with manifest URL.  
- **Streaming**: CDN fetches segments; edge caching reduces origin load.  
- **Scalability**: autoscale API pods, use serverless for transcoding if volume spikes.  
- **Reliability**: multi‑region S3 replication, active‑passive failover for API, read replicas for DB.  

**Edge Cases**  
- Large file failure → resumable uploads; retry logic in queue.  
- Out‑of‑sync manifests → versioned URLs with cache‑busting query params.  
- Unauthorized access → token revocation on user logout.  

**Optimize & Communicate**  
Explain trade‑offs: serverless transcoding saves ops but adds cold start latency vs. dedicated workers for predictable load. Highlight cost controls (auto‑scaling, spot instances). Conclude with monitoring stack (Prometheus + Grafana) and CI/CD pipeline for rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
