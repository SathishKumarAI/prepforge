---
qid: ing_88c7ce19f6__star__local
question: 'Explain: Scaling to Count Billions — From Zero to 50 Million Uploads per
  Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 353
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:06:19-05:00'
sources: []
---

**Situation:**  
When I joined the media team at Canva, we were just handling a few thousand image uploads per day. The product roadmap promised a global launch with an expected user base of 100 million, so our infrastructure had to support up to 50 million uploads daily within a year.

**Task:**  
I was tasked with designing a scalable pipeline that could ingest, process, and store media at that scale while keeping latency under 200 ms for end‑users and costs below $0.02 per upload.

**Action:**  
I led a micro‑services redesign: each service (ingestion, transcoding, thumbnail generation) ran in Kubernetes with autoscaling based on request rate. We introduced serverless functions for bursty workloads and moved to a sharded S3‑compatible object store with consistent hashing to avoid hot spots. For cost control we added a tiered compression strategy—lossless for brand assets, lossy for user photos—and used spot instances for transcoding jobs. Monitoring was handled by Prometheus + Grafana; I set up alerting thresholds at 10 % variance from SLA.

**Result:**  
Within nine months the system processed 50 million uploads daily with a 98.7 % success rate and average latency of 180 ms. Costs dropped 35 % versus our previous monolithic setup, and we gained a 20 % reduction in storage usage due to smarter compression. I learned that combining container orchestration, smart caching, and dynamic scaling is key to handling explosive growth while staying within budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
