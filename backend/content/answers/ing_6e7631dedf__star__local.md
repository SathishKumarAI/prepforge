---
qid: ing_6e7631dedf__star__local
question: 'Explain: Transcoding: How We Serve Videos at Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 379
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:08:29-05:00'
sources: []
---

**Situation:**  
When I joined a video‑on‑demand startup, the platform was serving over 4 M monthly users, but our CDN cache hit rate dropped to 42% during peak hours because we were only delivering a handful of pre‑encoded resolutions. Our engineers were stuck re‑encoding every upload manually in a slow batch pipeline that clogged the GPU cluster.

**Task:**  
I needed to build an automated, scalable transcoding service that could ingest raw uploads, intelligently pick target formats based on device profiles, and push them to the CDN with minimal latency—ideally under 10 minutes per video while keeping GPU usage below 70% of capacity.

**Action:**  
I designed a microservice architecture using Kubernetes with GPU‑enabled pods. The service first runs a lightweight ML classifier (a tiny CNN) on the first few seconds of each clip to predict optimal bitrate and resolution for common device classes. It then queues jobs in Kafka, where a pool of Docker containers pulls from an AWS S3 bucket, uses FFmpeg with preset “veryfast” plus our custom quantization tables, and streams the output directly to the CDN edge cache via Amazon CloudFront. I added an autoscaler that spins up new pods when queue depth exceeds 200 jobs, ensuring we never exceed our GPU budget.

**Result:**  
Within three months, cache hit rate rose from 42% to 68%, reducing bandwidth costs by ~30%. Average transcoding time dropped from 45 minutes to 7 minutes per video. The system also handled a 150% traffic spike during a product launch without any manual intervention, and I documented the ML model and pipeline for future maintenance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
