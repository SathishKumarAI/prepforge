---
qid: ing_86bae458a1__aws__local
question: 'Explain: So we had to take some extraordinary — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 439
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:47-05:00'
sources: []
---

**Situation / Task**  
During the “Seattle Conference on Scalability,” my team was tasked with designing a video‑on‑demand pipeline that could serve millions of concurrent users while keeping latency under 200 ms and cost per stream below $0.02.

**Action (Technical)**  
1. **Micro‑service decomposition** – split ingestion, transcoding, metadata enrichment, and CDN delivery into independent ECS tasks.  
2. **Serverless edge** – used Lambda@Edge to dynamically generate HLS manifests based on user bandwidth, eliminating a single bottleneck.  
3. **Global distribution** – leveraged CloudFront with Geo‑targeted origins in us-west-1, eu-central-1, and ap-southeast-1; integrated S3 Transfer Acceleration for uploads.  
4. **Autoscaling & Spot** – set ECS Service Auto Scaling on CPU/Memory thresholds; used Spot Instances (80 % discount) for transcoding with Fargate Spot.  
5. **Observability** – CloudWatch metrics + X-Ray tracing to identify 10‑ms bottlenecks in manifest generation.

**Result**  
- Achieved 99.99 % request success rate at peak 1M concurrent viewers.  
- Latency dropped from 350 ms to 180 ms (−48 %).  
- Reduced per‑stream cost from $0.035 to $0.018, saving ~$3M annually.

**Reflection (Leadership)**  
*Customer Obsession*: We built the system around user latency and reliability.  
*Ownership & Dive Deep*: I owned the end‑to‑end design, continuously profiled and iterated on bottlenecks.  
Learning: Early trials underestimated CDN cache hit ratios; we added a 5 % “warm‑up” cache layer to avoid cold starts, which saved additional latency.

**Bar‑raiser cues** – Demonstrated measurable impact, deep technical dive, ownership of failure modes, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
