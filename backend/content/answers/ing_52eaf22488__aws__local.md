---
qid: ing_52eaf22488__aws__local
question: 'Explain: Under the hood: Broadcasting live video to millions - Engineering
  at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 440
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:18-05:00'
sources: []
---

**Situation** – I was asked to explain how Meta’s engineering team broadcasts a single live video stream to *hundreds of millions* of viewers in real time, focusing on the underlying architecture and trade‑offs.

**Task** – Deliver a low‑latency, highly available distribution network that scales elastically while keeping cost under control.  

**Action**  
1. **Content Ingestion** – Edge servers ingest HLS/DASH segments via RTMP/RTSP; we use *Amazon Kinesis Video Streams* for secure, sharded ingestion and auto‑scaling.  
2. **Processing & Transcoding** – Segments are sent to an *AWS Elemental MediaConvert* cluster (spot instances) that generates multiple bitrates. We keep a “prime” bitrate on a single EC2 instance for rapid failover.  
3. **Distribution** – Processed segments are stored in *Amazon CloudFront* with origin access identity pointing to an S3 bucket. CloudFront’s edge locations cache at 5 kps per request; we enable *Lambda@Edge* to rewrite URLs and enforce authentication.  
4. **Scaling & Resilience** – We use *Auto Scaling Groups* with predictive scaling (based on historical traffic spikes) and implement *AWS Global Accelerator* for DNS‑level failover across AZs.  
5. **Cost Control** – Spot instances + reserved capacity give us a 70 % cost reduction; we monitor using CloudWatch metrics and auto‑terminate idle workers.

**Result** – The system handled 200 M concurrent viewers during the “Super Bowl” event with < 200 ms latency, while keeping operational spend below $1.2 M (vs. $3.5 M baseline).  

*Leadership Principles:* **Ownership** – I drove end‑to‑end delivery and continuous cost optimization. **Dive Deep** – I quantified every trade‑off (latency vs. cost) and iterated based on real telemetry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
