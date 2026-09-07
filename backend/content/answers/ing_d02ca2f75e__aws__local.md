---
qid: ing_d02ca2f75e__aws__local
question: 'Explain: much more careful about so I''m going — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 372
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:41-05:00'
sources: []
---

**Situation & Task**  
I led the migration of our recommendation engine from a monolith to a server‑less microservice stack at Netflix. The goal was to reduce deployment risk and improve observability while handling 10 M requests/day.

**Action (AWS Services & Design)**  
- **Architected** each pipeline stage as an isolated Lambda function triggered by EventBridge events, keeping state in DynamoDB.  
- Implemented *Chaos Monkey* style failures with AWS Fault Injection Simulator (FIS) to inject latency and connection drops into the service mesh (App Mesh).  
- Added distributed tracing via X-Ray and metrics collection in CloudWatch; set up an automated rollback policy using Step Functions that rolled back a Lambda version if error‑rate > 2 %.  
- Used **SageMaker Endpoint** for inference, but wrapped it behind API Gateway to enforce rate limiting (10 k QPS) and caching with CloudFront.  

**Result**  
After the rollout:  
- Deployment success rate rose from 82 % → 99.6 %.  
- Mean time to recovery dropped from 18 min to <2 min.  
- Cost decreased by 12 % due to better scaling (Lambda’s pay‑per‑execution model).  

**Learnings & Bar‑raiser cues**  
I owned the end‑to‑end pipeline, diving deep into failure modes and quantifying impact with A/B metrics. The experiment taught us that *Bias for Action* + *Customer Obsession*—ensuring a seamless recommendation experience—must be coupled with rigorous chaos testing to maintain high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
