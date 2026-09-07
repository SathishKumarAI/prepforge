---
qid: ing_1074dacbe2__aws__local
question: 'Explain: Message Queue — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 546
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:28-05:00'
sources: []
---

**Situation** – I was tasked to redesign Instagram’s photo‑upload pipeline so that each image could be processed (resize, filter, watermark) without blocking the user’s experience.  
**Task** – Build a decoupled, highly available message queue system that can ingest millions of uploads per day and route them to multiple downstream workers.

**Action** – I chose **Amazon SQS FIFO + SNS** as the core messaging fabric.  

1. **Ingest API** posts each upload event to an *SQS FIFO* queue (`UploadEvents`).  
2. A small Lambda (or EC2 autoscaling group) polls `UploadEvents`, validates metadata, and publishes a *SNS* notification to topic `ProcessImage`.  
3. Multiple worker services (EC2 Spot + ECS Fargate tasks) subscribe to `ProcessImage` and pull messages from the dedicated processing queue (`ResizeTasks`).  
4. Each worker stores intermediate results in **Amazon S3** and emits a completion event back to another SQS queue (`ProcessingComplete`) for analytics.

*Why these services?*  
- **SQS FIFO** guarantees order per user, essential for sequential edits.  
- **SNS** decouples producers from many consumers without polling overhead.  
- **EC2 Spot + Fargate** keep costs low while scaling elastically; spot‑pricing drops compute cost by ~70 %.  
- **S3** provides 99.999999999 % durability for media files.

**Result** – After rollout, upload latency dropped from 4 s to <1 s (95th percentile), processing throughput increased to 5 M images/day, and infrastructure cost fell by 45 %.  

---

### Leadership Principles Highlighted  
- **Ownership**: I owned the end‑to‑end flow and negotiated spot‑pricing with finance.  
- **Dive Deep**: Probed SQS visibility timeouts and SNS fan‑out limits to avoid bottlenecks.  
- **Bias for Action**: Deployed a pilot in 3 days, iterated on queue depth within hours.  

### Bar‑raiser Takeaways  
- Demonstrated measurable impact (latency & cost).  
- Showed deep technical trade‑offs (FIFO vs Standard, spot vs On‑Demand).  
- Learned from early failures—initial SNS fan‑out caused duplicate processing; switched to DLQ + idempotent workers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
