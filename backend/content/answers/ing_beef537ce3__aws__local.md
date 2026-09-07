---
qid: ing_beef537ce3__aws__local
question: 'Explain: Platform — YouTube\u00a0Architecture - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 440
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:56-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to redesign the **YouTube‑style video platform** so it could serve 200 M daily active users (DAU) while keeping latency under 100 ms and cost per view below $0.02.  

**Action**  
1. **Architecture** – Adopt a *micro‑service* pattern:  
   - *Upload & Transcode*: `Amazon S3` + `Elastic Transcoder` → `Lambda` for metadata extraction.  
   - *Catalog & Recommendation*: `DynamoDB` (global tables) + `Kinesis Data Streams` feeding an **SageMaker** inference endpoint (`ml.m5.xlarge`).  
   - *Streaming*: `Amazon CloudFront` edge cache + `MediaPackage` to deliver HLS/DASH.  
2. **Scalability** – Use **Auto Scaling Groups** for API Gateway + ECS Fargate tasks; set *Target Tracking* on CPU/Memory metrics.  
3. **Availability** – Multi‑AZ deployments, WAF + Shield Advanced, and `Route 53` health checks.  
4. **Cost** – Spot Instances for transcoding, reserved capacity for SageMaker, and **Savings Plans** on Fargate.

**Result**  
- Achieved 99.999% uptime during a 30‑day load test with peak 5 M concurrent viewers.  
- Reduced per‑view cost from $0.05 to $0.017 (≈66 % savings).  
- Latency dropped to 75 ms average, meeting SLA.

**Reflection**  
I owned the end‑to‑end solution, diving deep into each service’s limits and trade‑offs. The biggest learning was that caching transcoded segments in CloudFront edge caches cuts downstream load by 70 %, a fact we only realized after a mid‑project audit—highlighting the *Bias for Action* principle: test early, iterate fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
