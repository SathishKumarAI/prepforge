---
qid: ing_5f5534034e__star__local
question: 'Explain: System Design Videos (Upcoming) — Course Introduction | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:00-05:00'
sources: []
---

**Situation:**  
When I joined a new fintech startup, the product team was launching an online video analytics feature that would stream user‑generated content in real time and provide live sentiment scores. The engineering lead asked me to design the underlying system architecture for a demo video that would be part of our upcoming “System Design Videos” course.

**Task:**  
I had to create a scalable, low‑latency pipeline that could ingest raw video streams, transcode them on demand, run ML inference for sentiment analysis, and deliver the processed frames back to clients—all while keeping costs under $2 k/month and ensuring 99.9% uptime.

**Action:**  
First, I chose AWS MediaLive + Lambda for ingestion and transcoding, then built a stateless microservice in Go that pulled frames from S3, sent them to an NVIDIA‑GPU EC2 spot fleet running TensorFlow‑Lite models, and stored results in DynamoDB. To handle burst traffic I added API Gateway with throttling and a CloudFront CDN for edge delivery. I also integrated Prometheus/ Grafana dashboards for real‑time monitoring and set up auto‑scaling rules based on CPU usage.

**Result:**  
The prototype processed 4K video at <300 ms latency, reduced infrastructure spend by 35% compared to our baseline, and achieved 99.97% availability during a live test run. I learned how to balance compute cost with real‑time ML throughput and the importance of observability in a production system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
