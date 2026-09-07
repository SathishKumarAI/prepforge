---
qid: ing_ee45854abf__aws__local
question: 'Explain: Requirement Clarification — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 466
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:48-05:00'
sources: []
---

**Situation & Task**  
I was asked to design an Instagram‑style photo‑sharing service for a startup that expects 10 M daily active users (DAUs) and 1 B uploads per year. The goal: deliver low latency, high availability, and cost efficiency while enabling future ML features.

**Action – Architecture & AWS Services**  
*Storage:* S3 + Glacier for raw media; use multipart upload with *S3 Transfer Acceleration* to keep >99.9% success within 200 ms (edge caching via CloudFront).  
*Processing Pipeline:* EventBridge → Lambda (Python) → Step Functions → SageMaker endpoint for image tagging/face detection, then store results in DynamoDB.  
*Serving Layer:* API Gateway + Lambda@Edge for dynamic resizing; CloudFront caches thumbnails.  
*Search & Recommendations:* OpenSearch with real‑time indexing of tags and likes; use KNN plugin for similarity search (ML model) and auto‑scale on CPU usage.  
*Scalability:* Serverless components auto‑scale to 10 k RPS; DynamoDB autoscaling keeps <1% throttling.  
*Cost Control:* Spot Instances for SageMaker training, reserved capacity for Lambda concurrency; use S3 Lifecycle policies to move old media to Glacier (≈ 70% savings).  

**Result**  
After launch, the platform handled 12 M DAUs with 99.95% request success and <250 ms average latency. Media costs dropped 35 % vs a monolithic EC2 design. ML pipelines processed 90 % of uploads in under 5 s, enabling real‑time recommendations.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, dove deep into cold‑start times for Lambda@Edge, and quantified latency savings from CloudFront edge caching. Failure point: initial SageMaker warm‑up caused >1 s delays; resolved by pre‑warming endpoints during low traffic windows. This iteration improved our SLA to 99.95% and reduced cost by an additional 5 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
