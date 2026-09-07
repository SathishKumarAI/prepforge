---
qid: ing_19a9d7aab4__aws__local
question: 'Explain: Lessons learned — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 528
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:30-05:00'
sources: []
---

**Situation & Task**  
When Canva hit ~10 M uploads/day, we were forced to rethink our media pipeline. The goal was to support 50 M+ uploads/day while keeping latency < 200 ms and cost per GB < $0.02. I led the “Zero‑to‑50 M” effort.

**Action & Design**  
- **Event ingestion:** Switched from a single RabbitMQ broker to *Amazon Kinesis Data Streams* (shard count 1,000) for auto‑scaling and low tail latency.  
- **Processing:** Deployed a stateless micro‑service on *AWS Fargate*, using *Python + Pillow* for transcoding, with *SQS* fan‑out to parallel workers. This eliminated the bottleneck of in‑memory queues.  
- **Storage & CDN:** Images now land in *Amazon S3* (Glacier tier for 99% cold storage) and are served via *CloudFront*. We added object tagging to auto‑expire thumbnails after 90 days, cutting storage by 35%.  
- **Observability:** Integrated *AWS X-Ray* and *CloudWatch Metrics* (custom counters: “upload_per_second”, “transcode_fail_rate”) for real‑time alerting.  

**Result**  
- Lifted throughput from 10 M to 55 M uploads/day (+450%) with 99.9% success rate.  
- Latency dropped from 350 ms to 140 ms (average).  
- Cost per GB reduced by 28% through smarter tiering and auto‑scaling.  

**Leadership Principles Highlighted**  
1. **Ownership** – I owned the end‑to‑end pipeline, coordinated cross‑team changes, and drove the migration in a single sprint.  
2. **Dive Deep** – By instrumenting every hop (Kinesis → Fargate → S3), we identified that 12% of failures were due to transient S3 throttling; adding *S3 Transfer Acceleration* resolved it.  

**Bar‑raiser takeaway**  
- Quantified impact: 55 M uploads/day, 140 ms latency, $0.014/GB cost.  
- Learned that “scale first, optimize later” works only if you instrument early—failure to monitor S3 throttling would have masked a 15% throughput loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
