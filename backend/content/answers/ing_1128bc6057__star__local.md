---
qid: ing_1128bc6057__star__local
question: 'Explain: API Gateway — Apigateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 397
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:12-05:00'
sources: []
---

**Situation:**  
At my last company we built a recommendation engine that served personalized product suggestions to our mobile app. The model was deployed as a container on Kubernetes, but the internal REST API exposed raw JSON and required each client to handle authentication and rate‑limiting manually.

**Task:**  
I needed to expose the model inference endpoint securely and scalably so that the iOS/Android teams could call it with minimal friction, while ensuring we could enforce per‑user quotas and collect usage metrics for billing.

**Action:**  
I set up Amazon API Gateway as a front door. I created a REST API with a single `/predict` resource, attached an AWS Lambda authorizer that validated JWTs issued by Cognito, and mapped the incoming request body to the model’s expected schema using Velocity Template Language (VTL). For throttling, I configured usage plans tied to each client ID and set burst/Rate limits of 1000/500 requests per second. To capture analytics, I enabled CloudWatch Logs and added a custom header that forwarded a request ID to the backend. Finally, I deployed the API via a stage with Canary routing so we could test new inference logic without affecting all traffic.

**Result:**  
The mobile teams were able to hit the endpoint with a single HTTPS call; latency dropped from 450 ms (direct container) to 120 ms (through API Gateway). We enforced quotas, preventing any user from exceeding 10k requests per day and reduced accidental over‑usage by 35%. The logs also gave us real‑time usage dashboards, helping the finance team forecast costs accurately. I learned how API Gateway’s request mapping and throttling features can turn a raw ML model into a production‑grade service with minimal code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
