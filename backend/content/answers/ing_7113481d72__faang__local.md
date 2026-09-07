---
qid: ing_7113481d72__faang__local
question: 'Explain: Canva''s microservices and the media service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:49-05:00'
sources: []
---

**Clarify**  
Canva’s *media service* is a backbone microservice that stores, processes, and serves all user‑generated assets (images, videos, PDFs). I’ll assume it must: 1) ingest uploads, 2) expose CRUD APIs, 3) deliver content via CDN, 4) support real‑time transformations, and 5) scale to millions of requests daily.  

**Approach**  
1. **API gateway → service discovery** (Consul/Envoy).  
2. **Storage layer**: S3‑compatible object store + PostgreSQL for metadata.  
3. **Processing pipeline**: event‑driven (Kafka) → worker cluster (K8s) that runs image/video transcoding, watermarking, and ML inference (e.g., auto‑tagging).  
4. **Cache & CDN**: Redis cache for hot assets + CloudFront edge distribution.  
5. **Observability**: Prometheus/ELK stack for metrics, logs, tracing.

**Depth**  
- *Ingress*: multipart uploads routed to S3; checksum verified before DB insert.  
- *Processing*: workers pull Kafka messages, run GPU‑accelerated transforms (NVIDIA CUDA), publish results back to DB and push a “ready” event.  
- *Serving*: API returns signed URLs that bypass auth; CDN caches until TTL or invalidation via cache‑control headers.  
Complexity: O(1) per request for reads; writes are amortized across async workers, O(log n) metadata ops. Trade‑off: strong consistency vs. eventual consistency—use idempotent Kafka consumer offsets.

**Edge Cases**  
- Corrupt uploads → retry with exponential backoff.  
- CDN cache miss after update → invalidation API tested.  
- Worker failure → dead‑letter queue and alerting.

**Optimize & Communicate**  
I’d benchmark transcoding throughput, tune batch sizes, and use spot instances for cost savings. During the interview I’d narrate my design in the same 5‑step format, highlighting trade‑offs (latency vs. cost) and how each component meets Canva’s scalability and reliability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
