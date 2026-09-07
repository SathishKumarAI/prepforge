---
qid: ing_946ea3e414__aws__local
question: What is Spotify? — Design Spotify | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 419
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:35-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a music‑streaming platform like **Spotify** for an internal hackathon, aiming to support 10 M concurrent users and 1 B daily streams with < 200 ms latency.

**Action (Technical)**  
*Micro‑service architecture*:  
- **User Service** – Amazon Cognito + DynamoDB (global tables) for auth & profile.  
- **Catalog Service** – ElasticSearch on OpenSearch for full‑text search; S3 for media storage, CloudFront CDN for edge caching.  
- **Playback Service** – Lambda + API Gateway with step‑functions orchestrating transcoding via MediaConvert, storing MP4/MP3 in S3.  
- **Recommendation Engine** – SageMaker endpoints (online inference) powered by a pre‑trained collaborative filtering model; batch training on EMR nightly.  

*Scalability*: Auto‑scaling groups for stateless services, DynamoDB auto‑sharding, CloudFront global edge.  
*Availability*: Multi‑AZ deployments, S3 cross‑region replication, Route 53 latency routing.  
*Cost*: Spot instances for EMR jobs, reserved RDS for relational data, and using Lambda’s pay‑per‑invocation model.

**Result**  
The prototype handled 50k concurrent streams with < 150 ms average latency; projected scaling to 10 M users would cost ~$1.2 M/month vs $3.5 M for a monolith.  

**Reflection (Bar‑raiser)**  
I took full ownership of the architecture, dove deep into AWS pricing models, and quantified impact through performance & cost metrics. Failure analysis: initial design underestimated media cache hit rates; we switched to CloudFront + Lambda@Edge, reducing latency by 40 %. This shows bias for action and continuous learning—core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
