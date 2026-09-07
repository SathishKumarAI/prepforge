---
qid: ing_0dabb9a134__faang__local
question: 'Explain: Migrating Live — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 589
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:42-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how Canva scaled its media upload pipeline from zero to 50 M uploads/day while keeping latency low and costs manageable. Key assumptions: (1) uploads are user‑generated images/videos; (2) the system must support real‑time processing (e.g., thumbnails, compression); (3) we’re interested in architectural decisions, not code details.

**Approach**  
1. **Identify bottlenecks** – I/O, compute, storage, network.  
2. **Decouple components** – separate ingestion, processing, and persistence.  
3. **Use elastic services** that auto‑scale with traffic spikes.  
4. **Optimize cost/latency trade‑offs** via caching, tiered storage, and spot instances.

**Depth**  
- **Ingestion Layer**: A global CDN + edge routers front an SQS/SNS queue. Uploads hit an API Gateway → Lambda (or container) that validates and pushes a message to the queue; this gives instant ack while deferring heavy work.  
- **Processing Micro‑services**: Workers poll the queue, pull blobs from S3 (or GCS), run image/video transcoding in Docker containers on ECS/Fargate or Kubernetes autoscaler. Parallelism is achieved by sharding queues per content type and region.  
- **Storage Tiering**: Hot uploads live in SSD‑backed object storage for 24 h, then moved to cheaper archival (S3 Glacier) after generating thumbnails/metadata. Lifecycle policies keep the hot tier at ~10–15 % of total objects.  
- **Caching & CDN**: Generated thumbnails are cached in CloudFront/Akamai; repeat requests hit edge caches, reducing compute load by >70%.  
- **Observability**: Distributed tracing (OpenTelemetry), metrics on queue depth, processing latency, and cost dashboards guide auto‑scaling thresholds.

**Edge Cases**  
- Sudden traffic spikes → queues grow; workers must back‑off gracefully.  
- Corrupt uploads → validation step prevents downstream failures.  
- Region outages → multi‑region failover keeps service available.  

**Optimize & Communicate**  
We can reduce cost by pre‑allocating spot instances for non‑critical jobs and using serverless functions for bursty traffic. To explain this to interviewers, I’d narrate the journey: start with a single monolith, identify that uploads become the bottleneck, refactor into decoupled micro‑services, then layer in elastic scaling and tiered storage. Highlight trade‑offs (e.g., higher latency for archival moves vs. cost savings) and how monitoring informs continuous improvement. This demonstrates structured problem solving, clear communication, and deep technical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
