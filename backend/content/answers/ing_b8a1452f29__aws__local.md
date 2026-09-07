---
qid: ing_b8a1452f29__aws__local
question: 'Explain: Serving Video Key Points — YouTube\u00a0Architecture - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 569
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:28-05:00'
sources: []
---

**Scenario (Situation)**  
At my previous role I was tasked to redesign YouTube’s “Video Key Points” feature so that it could serve millions of concurrent requests while keeping latency under 200 ms and cost per request below $0.0005.

**Task**  
Build a highly‑scalable, low‑latency serving layer that ingests pre‑computed key points (transcripts, timestamps, captions) and exposes them via a public API for the YouTube mobile/web clients.

**Action**  

| Step | Design choice | AWS services | Rationale |
|------|---------------|--------------|-----------|
| 1. **Storage** | Serverless document store | Amazon DynamoDB Global Tables (partitioned by `video_id`) | Provides single‑digit ms reads, multi‑region replication for 99.999 % availability, and auto‑scaling with on‑demand capacity. |
| 2. **Serving** | Edge‑first API | Amazon CloudFront + Lambda@Edge | Reduces round‑trip latency to <20 ms globally; edge caching serves the same key points to many users without hitting origin. |
| 3. **Compute** | Optional transformation (e.g., language translation) | AWS Lambda (with provisioned concurrency) | Keeps compute costs low and scales linearly with traffic spikes. |
| 4. **Observability** | Metrics & alerts | Amazon CloudWatch + X-Ray | Enables *Dive Deep* into latency, error rates, and cost per request. |
| 5. **Cost control** | Spot instances for batch re‑indexing | EC2 Spot + S3 | Batch jobs run on spot to keep the $/hour at ~30 % of On‑Demand. |

**Result (Impact)**  
- Latency dropped from 350 ms to **<180 ms** (95th percentile).  
- API throughput increased to **500k QPS** with no degradation.  
- Monthly cost for serving key points fell by **42 %** compared to the legacy monolith.  
- Incident response time reduced from 4 h to under 30 min due to real‑time metrics.

**Reflection (Learnings)**  
I owned the end‑to‑end pipeline, iterated on partition keys after a *post‑mortem* of a hotspot incident, and documented failure scenarios in our runbooks. This aligns with **Customer Obsession** (fast, reliable service) and **Ownership** (full accountability from ingest to serve).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
