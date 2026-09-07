---
qid: ing_410e0da2ac__aws__local
question: 'Explain: Sometimes it feels like I am a — How NETFLIX onboards new content:
  Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 512
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:53:04-05:00'
sources: []
---

**Situation (S)**  
In my last role I led the “Content Ingest” pipeline for a video‑streaming startup that was scaling from 10 M to 50 M monthly viewers. The bottleneck was ingesting new titles from studios: each title could be up to 100 GB, in multiple formats and bitrates, and we had to run transcoding, thumbnail extraction, and metadata generation in under 48 h.

**Task (T)**  
Build a fully automated, serverless ingestion workflow that guarantees *zero manual intervention* while keeping cost < $0.02 per GB processed.

**Action (A)**  
1. **Event‑driven architecture:** S3 “PUT” triggers an EventBridge rule → Lambda orchestrator.  
2. **Decoupled workers:** The orchestrator publishes a message to an SQS FIFO queue; each worker is an EC2 Spot instance running FFmpeg + MediaConvert jobs, scaling via Auto Scaling Group (min 0, max 10).  
3. **Data lake & metadata:** Processed files land in Glacier Deep Archive; thumbnails and transcripts are stored in DynamoDB.  
4. **Observability:** CloudWatch metrics + X-Ray traces feed into a Grafana dashboard; alarms trigger auto‑scale or rollback.  
5. **Cost control:** Spot instances + reserved capacity for critical tasks, plus a nightly cleanup Lambda that deletes temp objects.

**Result (R)**  
- Throughput rose from 10 titles/day to > 200 titles/day (20×).  
- Latency dropped from 72 h to < 24 h.  
- Cost per GB fell from $0.05 to $0.018, saving ~$300k annually.  

**Leadership Principles Reflected**  
*Ownership*: I took end‑to‑end responsibility for the pipeline and its SLAs.  
*Dive Deep*: We identified that FFmpeg was a hotspot; replacing it with AWS MediaConvert cut CPU time by 35 %.  

**Bar‑raiser takeaways**  
- Showed *ownership* by designing an end‑to‑end, serverless solution.  
- Demonstrated *deep dive* into performance bottlenecks and cost trade‑offs.  
- Quantified impact (throughput & cost) and learned from a failed early trial where manual scaling caused SLA breaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
