---
qid: ing_5d52ba9a52__aws__local
question: 'Explain: Storing and Delivering your Content with Speed and Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 380
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:51-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When launching a global video‑on‑demand platform, we had ~10 M users watching 2 TB of new content daily. The goal was to reduce end‑to‑end latency from ingestion to playback below 200 ms while keeping cost per GB < $0.02.

**Approach (Dive Deep + Ownership)**  
1. **Ingestion:** Use Kinesis Video Streams → Lambda → S3 Glacier Instant Retrieval for raw footage.  
2. **Processing:** Step Functions orchestrate FFmpeg jobs on ECS Fargate, outputting multiple HLS/MP4 variants stored in an S3 Intelligent‑Tiering bucket (hot tier for recent 48 h).  
3. **Delivery:** CloudFront with edge caching; origin pulls from the “hot” tier; older versions served from Glacier via Lambda@Edge to generate signed URLs on demand.  
4. **Monitoring:** CloudWatch metrics + SageMaker anomaly detection flagging latency spikes.

**Result (Deliver Results)**  
- Latency dropped from 650 ms to 180 ms (30% below target).  
- Cost per GB reduced from $0.04 to $0.015, saving ~$1M annually.  
- 99.9% request success rate across 3 regions.

**Learning & Trade‑offs**  
We initially overprovisioned Fargate clusters; post‑analysis we moved to spot instances, cutting compute spend by 35% without affecting SLA. This iteration reinforced the “Bias for Action” principle—rapid experimentation, data‑driven pivots, and ownership of cost/quality trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
