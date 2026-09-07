---
qid: ing_76dacbd67c__faang__local
question: 'Explain: Facebook System Design | Instagram System Design | System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 548
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:20:12-05:00'
sources: []
---

**Clarify**

> *What is the scope?*  
> We’re asked to sketch the architecture of a large‑scale social media service (e.g., Instagram).  
> **Assumptions to confirm:**  
> – Core features: photo/video upload, feed, likes/comments, real‑time notifications.  
> – Scale: millions of daily active users, petabytes of media.  
> – SLA: < 1 s read for feeds, < 5 s upload latency.

**Approach**

1. **API layer** (REST/GraphQL) → load‑balanced front‑end.  
2. **Upload service** → ingest → CDN edge → S3/Blob storage + transcoding micro‑service.  
3. **Metadata store** (PostgreSQL + Redis cache).  
4. **Feed engine** – push vs pull; use precomputed timelines in Cassandra or Kafka streams.  
5. **Engagement services** (likes/comments) → message queue → event‑driven updates to user feeds.  
6. **Notification service** → WebSocket/FCM with a distributed pub/sub layer.  
7. **Analytics & A/B testing** – stream data to BigQuery / Snowflake.

**Depth**

- *Storage*: immutable blobs in object store; thumbnails cached in CDN.  
- *Feed*: push‑based timeline using a “fanout” queue (e.g., Kafka).  Each user’s feed is materialized in Redis for low latency.  
- *Consistency*: eventual consistency for likes/comments, strong consistency for uploads via transactional writes to Postgres + S3 pre‑signed URLs.  
- *Scalability*: autoscale micro‑services; use Kubernetes/managed services.  
- *Fault tolerance*: multi‑AZ replicas, graceful degradation (serve cached feed if DB down).

**Edge Cases**

- Heavy upload spikes → throttling & queue backpressure.  
- Content moderation latency → asynchronous flagging pipeline.  
- Large media files → chunked uploads + resumable sessions.

**Optimize & Communicate**

- Replace “push” fanout with “pull” on‑demand if write amplification becomes too high; trade‑off read latency vs storage cost.  
- Use CDN caching for static assets to cut origin hits by > 90 %.  
- Highlight that monitoring (Prometheus + Grafana) and automated canary releases are critical.

*This structure demonstrates clear problem framing, a layered solution, complexity analysis, edge‑case awareness, and optimization rationale—key signals in FAANG system‑design interviews.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
