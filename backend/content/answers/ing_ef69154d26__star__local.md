---
qid: ing_ef69154d26__star__local
question: 'Explain: Serving transcoded videos — Transcoding: How We Serve Videos at
  Scale - Egnyte Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 410
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:46-05:00'
sources: []
---

**Situation**  
When I joined the media platform at a fast‑growth SaaS company, our video library was growing 300 % YoY. Users complained that playback lagged on mobile and we were hitting bandwidth limits because every upload had to be transcoded into dozens of resolutions.

**Task**  
I needed to design a scalable, cost‑efficient pipeline that could ingest raw uploads, transcode them in parallel, store the assets, and deliver them via CDN with sub‑second latency, all while keeping compute costs under 10 % of revenue.

**Action**  
1. Set up an event‑driven architecture on AWS: S3 triggers a Lambda to spawn an ECS Fargate task per job.  
2. Inside each task we run FFmpeg in Docker, using GPU‑accelerated instances for 1080p/4K streams and CPU workers for 480p/720p.  
3. We store the outputs in S3 with versioned object tags and publish a manifest (JSON) that the CDN reads.  
4. For delivery we use CloudFront with edge caching, automatically purging stale manifests on new uploads.  
5. I added Prometheus + Grafana dashboards to monitor transcoding queue length, CPU/GPU utilization, and error rates; alerts trigger auto‑scaling of the ECS cluster.

**Result**  
The pipeline cut average encoding time from 45 min per video to 7 min (an 84 % reduction). CDN hit ratios improved from 60 % to 92 %, reducing bandwidth costs by $120K annually. I learned how to blend serverless triggers with containerized workers to meet strict SLAs while keeping ops overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
