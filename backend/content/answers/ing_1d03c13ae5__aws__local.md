---
qid: ing_1d03c13ae5__aws__local
question: 'Explain: Um and here''s one of the reasons — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 571
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:58-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team at a large media company, we had to redesign the recommendation pipeline that served **10 M daily active users on YouTube’s mobile app**. The existing monolithic model was hitting 99th‑percentile latency of 650 ms and could not scale past 3 M concurrent requests.

**Task (T)**  
Build a *fully managed* ML inference platform that reduces latency to <200 ms, scales to 20 M requests per second, and cuts operational costs by 30 % while maintaining recommendation accuracy (+1.8 % CTR).

**Action (A)**  
- **Dive Deep & Ownership:** I mapped the data flow: raw click logs → feature store → model training → inference service. Identified bottlenecks in feature retrieval and GPU utilization.  
- **AWS Design:**  
  - *Feature Store:* Amazon SageMaker Feature Store + DynamoDB Global Tables for low‑latency read/write.  
  - *Training:* SageMaker Training Jobs on spot instances (p3.2xlarge) with hyperparameter tuning; model versioning in S3 and ECR.  
  - *Inference:* SageMaker Real‑Time Endpoint behind an Application Load Balancer, autoscaled to 200 endpoint replicas using Lambda-driven scaling based on CloudWatch metrics.  
  - *Caching:* Amazon ElastiCache Redis for hot feature vectors (50 % hit rate).  
  - *Monitoring:* CloudWatch + AWS X-Ray for latency tracing; SageMaker Model Monitor for drift detection.  
- **Bias for Action:** Deployed a pilot in the US West region, then rolled out globally using blue/green deployments via CodePipeline.

**Result (R)**  
- Latency dropped from 650 ms to **180 ms** (99th percentile).  
- Throughput increased from 3 M to **20 M requests/sec**, meeting peak traffic during live events.  
- Operational cost reduced by **32 %** due to spot usage and caching.  
- CTR improved by **1.8 %**, translating to an estimated $12 M incremental revenue per quarter.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered faster, more accurate recommendations that directly boosted user engagement.  
- **Ownership & Dive Deep** – Took full responsibility for the end‑to‑end pipeline and engineered a scalable solution from ground up.  

Bar‑raisers will note my clear ownership, deep technical dive into performance bottlenecks, measurable impact, and iterative learning (e.g., shifting to spot instances after initial pilot).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
