---
qid: ing_2566134412__aws__local
question: 'Explain: Authentication — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 339
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:37-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of our public ML‑model service, which required a secure API gateway for thousands of customers calling inference endpoints every minute.

**Action**  
I **owned** the solution by first *dive‑deep* into customer traffic patterns (≈ 3 M requests/day) and security needs. I chose **Amazon API Gateway + Lambda Authorizer** to expose REST/GraphQL APIs, using **JWT tokens** issued via Cognito for fine‑grained access. For scalability I deployed the gateway in a *regional* endpoint with *Edge caching* (CloudFront) to reduce latency for global users. To keep costs low I leveraged **Lambda@Edge** only for auth checks and routed the heavy inference traffic directly to **Amazon SageMaker endpoints** behind an **Application Load Balancer** that auto‑scales based on CPU usage.

**Result**  
The new architecture cut API response times by 40 % (from 120 ms to 72 ms) and reduced monthly spend by $12k while maintaining 99.99 % availability. Customer support tickets related to auth dropped by 85 %.  

**Learning & Bar‑raiser cues**  
I documented every trade‑off—Lambda vs. EC2, regional vs. edge—and presented the cost/latency model to stakeholders, showing true ownership and a data‑driven impact that aligns with Amazon’s *Customer Obsession* and *Ownership* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
