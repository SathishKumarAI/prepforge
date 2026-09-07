---
qid: ing_16fd978cf3__aws__local
question: 'Explain: High Level Design — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 426
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:44-05:00'
sources: []
---

**Designing a Scalable Instagram‑like Feed Service**

*Situation & Task (S)*  
At my previous company we had to build a public photo feed that could serve 100 M daily active users with sub‑second latency. The goal was to replace the monolithic “timeline” service with a microservice that could scale horizontally and cost‑effectively.

*Approach (T & A)*  
I led an ownership‑driven effort, first diving deep into user behavior: we logged 1 billion feed requests per day. I proposed a **partitioned timeline store** using Amazon DynamoDB (sharded by user ID) with a **write‑through cache** in Amazon ElastiCache Redis for hot followers. For ingestion, an AWS Kinesis Data Stream fed to an AWS Lambda pipeline that updated the follower graph in DynamoDB and pushed change events to SNS topics.

The feed API was built as a containerized service on ECS Fargate, auto‑scaling based on CloudWatch metrics (CPU > 70% → +1 task). I added **content‑based ranking** using Amazon SageMaker endpoints that returned relevance scores; the top 200 items were stored in Redis for quick retrieval.

*Result (R)*  
The new architecture reduced feed latency from 800 ms to 150 ms, handled a 4× traffic surge during product launch, and cut hosting costs by **35 %** thanks to serverless components. Post‑mortems on a mid‑launch outage taught us to add circuit breakers around external APIs—an important lesson in resilience.

*Key Leadership Principles*  
- **Ownership & Bias for Action**: I took end‑to‑end responsibility and delivered the solution in 6 weeks.  
- **Dive Deep**: Detailed analysis of request patterns guided our data model choice.  

This design balances scalability, availability, and cost while keeping a sharp focus on customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
