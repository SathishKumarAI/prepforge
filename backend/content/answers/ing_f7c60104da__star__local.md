---
qid: ing_f7c60104da__star__local
question: 'Explain: Request Transformation — What is an API Gateway? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 307
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:17-05:00'
sources: []
---

**Situation** – At my previous company we had a micro‑service that exposed a legacy REST API for customer data, but our new front‑end was built on GraphQL and required different payload shapes. The devs were pulling the same endpoint repeatedly and then rewriting JSON in client code, which increased latency and caused bugs.

**Task** – I needed to create a lightweight layer that could transform incoming requests into the legacy format and vice versa, without touching the micro‑service or front‑end code. It had to handle 10 k requests per second with <5 ms added latency.

**Action** – I set up an AWS API Gateway in “Lambda Proxy” mode, writing a small Node.js Lambda that performed request transformation: it mapped GraphQL query parameters into the legacy REST body, added required headers, and re‑formatted the JSON response. I used Swagger/OpenAPI to define the gateway schema, enabled caching for 60 s, and integrated CloudWatch metrics. For error handling I added fallback responses and circuit breaker logic in the Lambda.

**Result** – The transformation layer reduced client‑side code by 70 %, cut API latency from 45 ms to 30 ms, and eliminated two production bugs that were caused by inconsistent payloads. I learned how a well‑configured API Gateway can act as a clean contract layer between heterogeneous services while keeping performance high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
