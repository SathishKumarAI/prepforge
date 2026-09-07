---
qid: ing_76dacbd67c__aws__local
question: 'Explain: Facebook System Design | Instagram System Design | System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 559
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:03-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to redesign the photo‑delivery pipeline for a social‑media app that served > 3 B daily active users (DAU). The goal: cut latency by 30 % and reduce operational costs while maintaining 99.9 % availability.

**Action – System Design**  
1. **Requirements & Trade‑offs**  
   * *Latency*: < 200 ms for image load on mobile.  
   * *Scalability*: Handle sudden traffic spikes (e.g., live events).  
   * *Cost*: Keep S3 storage + CDN costs under $5M/month.

2. **Architecture**  
   * **Ingestion**: `Kinesis Data Streams` → micro‑services (`Lambda`) for on‑the‑fly transcoding.  
   * **Storage**: `S3` (object tiering) + `EFS` for thumbnails.  
   * **Serving**: `CloudFront` with edge caching; request routing via `API Gateway`.  
   * **Metadata**: `DynamoDB` (global tables) for quick lookup; secondary indexes for search.  
   * **Monitoring**: `CloudWatch` + custom metrics, auto‑scaling on CPU/queue depth.

3. **Scalability & Availability**  
   * Auto‑scaling in all compute layers; multi‑AZ S3 replication.  
   * Circuit breaker pattern around transcoding services to avoid cascading failures.

4. **Cost & Trade‑offs**  
   * Chose `S3 Intelligent-Tiering` to balance hot vs cold data, saving ~25 % over standard storage.  
   * Offloaded heavy processing to spot‑EC2 instances where possible (≈ 15 % savings).

**Result**  
* Latency dropped from 320 ms to 210 ms (+34 %).  
* Cost decreased by 18 %, freeing $0.8M annually for new features.  
* Uptime remained > 99.95 %.

**Reflection – Amazon Leadership Principles**  
- **Ownership & Bias for Action**: Took full ownership of the pipeline, iterated quickly with A/B tests.  
- **Dive Deep**: Analyzed cold‑start times and S3 request patterns to identify bottlenecks.  

Bar‑raiser cues: I quantified impact (latency %, cost savings), showed deep dive into metrics, and described lessons learned—e.g., the importance of edge caching for mobile users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
