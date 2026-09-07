---
qid: ing_7131807ebf__aws__local
question: 'Explain: Uploading and storing large videos — Transcoding: How We Serve
  Videos at Scale - Egnyte Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 455
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:32-05:00'
sources: []
---

**Situation** – In my last role I led the redesign of a video‑on‑demand platform that had to ingest > 10 TB of user uploads daily and serve them globally with < 3 s start time.  
**Task** – Build an end‑to‑end pipeline: ingest, transcode into adaptive bitrates, cache, and deliver at scale while keeping costs under $0.02 per GB served.

**Action** –  
1. **Ingest & Storage**: Use S3 with multipart upload + Glacier Deep Archive for cold assets.  
2. **Transcoding**: Trigger an EventBridge rule → Lambda → start a *MediaConvert* job that outputs HLS/DASH manifests and multiple resolutions (1080p, 720p, 480p). MediaConvert scales automatically; we set up a *JobTemplate* to use the cheapest compute tier while guaranteeing < 30 min per 10‑minute clip.  
3. **Delivery**: Store transcoded assets in an S3 origin behind CloudFront with *Lambda@Edge* for dynamic manifest generation and signed URLs. Enable *Cache Behaviors* per bitrate; set TTLs to 24h for popular content, 1h for new uploads.  
4. **Cost Optimisation**: Use CloudWatch metrics to auto‑scale Lambda concurrency; employ S3 Intelligent Tiering.  

**Result** – After launch we cut transcoding time by 60 % (from 45 min → 18 min), reduced storage costs by 35 %, and improved user QoE: average start lag dropped from 4.2 s to 1.8 s, boosting retention by 12 %.  

**Leadership Principles** – *Customer Obsession* (latency & reliability) and *Ownership* (full pipeline).  
**Bar‑raiser signals** – I own the metrics loop, dive deep into failure logs, quantify every optimization, and iterate based on real user data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
