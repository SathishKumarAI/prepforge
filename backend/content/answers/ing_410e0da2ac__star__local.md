---
qid: ing_410e0da2ac__star__local
question: 'Explain: Sometimes it feels like I am a — How NETFLIX onboards new content:
  Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 356
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:37-05:00'
sources: []
---

**Situation**  
When I joined the Media Engineering team at a streaming startup, we were struggling to ingest and transcode thousands of new titles each week. Our pipeline was a monolith on a single server, causing queue times to spike during peak uploads and making it impossible to meet Netflix’s SLA of 2 hours from ingestion to availability.

**Task**  
I had to redesign the onboarding workflow so that we could process 10× more videos in parallel, reduce latency, and provide real‑time monitoring for quality and errors, all while keeping costs under our existing budget.

**Action**  
I broke the pipeline into micro‑services: an S3‑based ingestion queue, a Kubernetes cluster running Docker containers with FFmpeg + x265 for encoding, and a Spark job that generated thumbnails and metadata. I introduced a “video fingerprint” service to detect duplicates before processing. For scalability, I used autoscaling groups tied to CPU usage and implemented Prometheus/Grafana dashboards for live metrics. We also added a CI/CD pipeline with Terraform to provision infrastructure on demand.

**Result**  
Processing time dropped from 8 hours to under 90 minutes per title, and throughput increased from ~200 videos/week to over 2,500. The cost stayed within 12% of the original budget, and we reduced post‑release bugs by 35%. I learned that breaking monoliths into containerized micro‑services with robust observability is key for high‑scale media ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
