---
qid: ing_7131807ebf__star__local
question: 'Explain: Uploading and storing large videos — Transcoding: How We Serve
  Videos at Scale - Egnyte Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 390
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:51-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with launching a video‑on‑demand feature for a streaming startup that expected to host over 10,000 hours of user‑generated content each month. The existing upload pipeline could only handle a few hundred MB files and had no automated transcoding or CDN integration.

**Task**  
I needed to build an end‑to‑end system that accepted raw uploads, stored them reliably in the cloud, automatically generated multiple bitrate streams, and served them with minimal latency while keeping costs under $0.02 per minute of playback.

**Action**  
First, I set up a multipart upload workflow on S3 using presigned URLs so users could stream directly from their browsers without hitting our servers. Once an object hit the bucket, an EventBridge rule triggered an AWS Lambda that queued a Step Functions state machine. The state machine orchestrated two parallel Fargate tasks: one ran FFmpeg to transcode into HLS and DASH at 1080p, 720p, and 480p; the other generated thumbnails for the UI. I stored all intermediate files in Glacier Deep Archive for cost efficiency and used CloudFront with signed URLs for secure delivery. To monitor quality, I added a post‑transcoding validation step that checked bitrate consistency before publishing to the CDN.

**Result**  
Within three months we handled 12,000 hours of uploads daily with an average transcoding time of 45 seconds per file. User complaints dropped by 70 % and our hosting cost stayed below $30k/month, a 35 % reduction from the previous architecture. I learned how to balance real‑time processing with cost‑effective storage, and the importance of automated validation for media pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
