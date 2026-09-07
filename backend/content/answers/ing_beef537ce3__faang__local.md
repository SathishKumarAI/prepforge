---
qid: ing_beef537ce3__faang__local
question: 'Explain: Platform — YouTube\u00a0Architecture - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 559
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:24-05:00'
sources: []
---

**Clarify**

You’re asking how a platform like YouTube can architect its video‑delivery stack for *high scalability*.  
Assumptions:  
1. Millions of concurrent viewers per region, each watching 720p–4K streams.  
2. Content is read‑heavy; writes (uploads) are far less frequent but still high volume.  
3. Latency ≤ 200 ms globally and zero single point of failure.

**Approach**

1. **Micro‑service decomposition**: separate ingestion, transcoding, cataloguing, recommendation, CDN, and analytics.  
2. **Data stores** – NoSQL for metadata (e.g., Cassandra), object storage for raw clips (S3/Google Cloud Storage), time‑series DB for telemetry.  
3. **CDN & edge caching**: global edge nodes with HTTP/2 + QUIC, content hashed per resolution.  
4. **Load balancing & autoscaling**: Kubernetes or serverless functions behind a global load balancer (GCP’s Global Load Balancing).  
5. **Observability**: distributed tracing (OpenTelemetry), metrics (Prometheus) and log aggregation.

**Depth**

- **Ingestion pipeline**: upload → dedupe → async transcoding via GPU‑accelerated workers; each job publishes to a message queue (Kafka).  
- **Serving**: Edge node serves the closest cached segment; if miss, fetch from origin, stream via HLS/DASH. Cache hit ratio > 95 %.  
- **Scaling math**: For 1 B views/day at 5 Mbps ≈ 2.3 PB data → use sharded object storage + CDN caching to keep origin bandwidth < 10 % of total.  
- **Latency**: QUIC reduces head‑of‑line blocking; edge nodes maintain a small segment buffer (< 1 s).  

**Edge Cases**

- Sudden viral spikes (e.g., live streams) → auto‑spin up transcoding workers, edge cache pre‑warm.  
- Content region restrictions or legal takedowns → dynamic ACL revocation in CDN config.  
- Storage churn (deleting old videos) must preserve referential integrity; use immutable object storage + soft delete.

**Optimize & Communicate**

Future improvements: AI‑driven bitrate adaptation, edge‑computed recommendations, and serverless transcoding to reduce operational overhead. I’d present this architecture with a high‑level diagram, walk through data flow for a single view request, and highlight how each component meets the scalability constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
