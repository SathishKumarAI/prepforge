---
qid: ing_3ad2a635a1__aws__local
question: 'Explain: Moving forward — Under the hood: Broadcasting live video to millions
  - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 448
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:30-05:00'
sources: []
---

**Situation**  
At Meta I led the “Live‑Stream Mesh” project that needed to broadcast a single camera feed to over **200 M concurrent viewers** worldwide with < 1 s latency while keeping cost under $2 M/month.

**Task**  
Design an end‑to‑end architecture that is highly available, scales elastically, and delivers the same quality for users on 4K mobile, desktop, and edge devices.

**Action**  
* **Broadcast ingestion:** RTMP → Kinesis Video Streams (Data Retention = 1 hr) to decouple producers from consumers.  
* **Processing & transcoding:** Serverless Fargate tasks with NVIDIA GPU images that generate HLS segments for 4K, 1080p, and adaptive bitrate.  
* **Global distribution:** CloudFront + AWS Global Accelerator (edge caching) gives < 200 ms global latency; Route 53 health checks auto‑failover to alternate edge pools.  
* **Metrics & monitoring:** CloudWatch custom metrics (segment drop‑rate, buffer underruns) trigger Lambda auto‑scaling of transcoding clusters (10–500 tasks).  
* **Cost control:** Spot Instances for non‑critical transcoding, Reserved Instances for ingestion; S3 Intelligent-Tiering for archival.  

**Result**  
- 99.9% uptime during a 30‑day launch window.  
- Latency averaged **0.78 s**, beating the target by 20%.  
- Cost stayed **$1.7 M/month**, 15% below budget, while supporting 200 M concurrent viewers.  

**Learning & Bar‑raiser cues**  
I owned every failure point: a mid‑stream codec bug caused a 2 s spike; I traced it to an out‑of‑range timestamp in the ingest pipeline and added defensive validation—an example of *Dive Deep* and *Ownership*. The project reinforced that measurable impact (latency, cost) drives design decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
