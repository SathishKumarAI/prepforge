---
qid: ing_e72be07f80__faang__local
question: 'Explain: Build web applications — Serverless Computing \u2013 Amazon Web
  Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 452
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:37:16-05:00'
sources: []
---

**Clarify**  
You’re asked how to build a web app using AWS serverless services.  
Assumptions: stateless request/response, dynamic content, moderate traffic, no long‑running background jobs, and cost‑efficiency is a priority.

**Approach**  
1. **Front‑end** – static assets (HTML/CSS/JS) on Amazon S3 + CloudFront CDN.  
2. **API layer** – Amazon API Gateway exposing REST/GraphQL endpoints.  
3. **Compute** – AWS Lambda functions (Python/Node.js).  
4. **Data store** – DynamoDB for NoSQL or Aurora Serverless for relational needs.  
5. **Auth** – Cognito user pools + federated identities.  
6. **CI/CD** – CodePipeline + SAM/Serverless‑Application‑Model templates.  
7. **Monitoring** – CloudWatch Logs, X-Ray traces, and GuardDuty alerts.

**Depth**  
- Lambda scales automatically; pay per 100 ms invocation.  
- API Gateway handles throttling, caching (cache TTL), and request validation.  
- DynamoDB offers single‑digit ms latency with on‑demand scaling; provisioned mode can be auto‑scaled via CloudWatch alarms.  
- Cognito gives token‑based auth; fine‑grained IAM roles restrict Lambda access to DB tables.

**Edge Cases**  
- Cold starts: use Provisioned Concurrency for latency‑sensitive endpoints.  
- Transactional consistency: DynamoDB Global Secondary Indexes or DynamoDB Streams with Lambda for eventual consistency.  
- Long uploads: multipart upload directly to S3 via pre‑signed URLs, bypassing Lambda.

**Optimize & Communicate**  
Explain cost trade‑offs (Lambda vs. Fargate), how auto‑scaling reduces over‑provisioning, and the importance of monitoring metrics to trigger alarms. Conclude that this stack delivers rapid deployment, elastic scaling, and minimal ops overhead—exactly what a FAANG team values for high‑traffic web services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
