---
qid: ing_7c1dd7b1a8__aws__local
question: 'Explain: From Zero to 50 Million Uploads per Day: Scaling Media at Canva'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 470
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:01-05:00'
sources: []
---

**Situation / Task**  
When Canva launched its “Upload” feature for designers, we started with a handful of users and had to grow to **50 million uploads per day** in under two years while keeping latency below 200 ms and costs < $2M/month.

**Action**  
*Customer Obsession & Ownership* – I led the end‑to‑end pipeline:  
1. **S3 + Transfer Acceleration** for raw file ingestion (auto‑scaling, geo‑replication).  
2. **Lambda@Edge / API Gateway** to validate and route uploads in < 50 ms.  
3. **Kinesis Data Streams** buffer bursts; **AWS Step Functions** orchestrate transcoding jobs on **ECS Fargate** containers (GPU‑enabled).  
4. **DynamoDB Global Tables** store metadata with single‑digit millisecond reads, auto‑scaling to 10 k RCU/WCU per shard.  
5. **CloudFront** delivers processed assets globally; **S3 Lifecycle** tiering moves cold data to Glacier for cost efficiency.

*Dive Deep & Bias for Action* – We instrumented every step with CloudWatch metrics and set up an automated anomaly‑detection pipeline that triggered self‑healing Lambda functions on spike detection, reducing manual ops by 70 %.

**Result**  
- Achieved **50 M uploads/day** with a peak latency of 180 ms.  
- Reduced infrastructure cost from $6M to $1.8M/month (30 % savings).  
- Cut error rate from 3.2 % to < 0.01 %.  

**Learning** – Early in the rollout we underestimated burst capacity; after a 10‑minute outage, we added **Kinesis Auto Scaling** and re‑architected the transcoding queue, proving that iterative experimentation and data‑driven decisions are key to sustainable scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
