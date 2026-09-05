---
qid: ing_527a9b14d9__star__local
question: 'Explain: What an API Contract Defines — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 352
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:22-05:00'
sources: []
---

**Situation:**  
While leading a data‑science team at my previous company, we were building a recommendation engine that had to serve predictions to both the web app and a mobile app. The front‑end developers complained that our model’s output format kept changing, causing integration failures and blocking releases.

**Task:**  
I needed to create a stable API contract so every consumer—web, mobile, or third‑party partners—could rely on consistent request/response schemas, versioning rules, and error handling. This would reduce friction, enable automated testing, and allow us to iterate the model without breaking downstream services.

**Action:**  
1. Drafted an OpenAPI (Swagger) specification that defined every endpoint, payload structure, HTTP status codes, and authentication scheme.  
2. Added a semantic versioning strategy: `v1` for stable features, `v2` for experimental changes, with deprecation notices.  
3. Implemented contract‑based testing using Pact to verify that the server met the consumer expectations.  
4. Established an API gateway (Kong) to enforce rate limits and perform schema validation at entry point, so any malformed request was rejected before reaching the model inference layer.

**Result:**  
The new contract cut integration bugs by 75 % and shortened release cycles from two weeks to three days. The gateway logged all traffic, giving us visibility into usage patterns; we later used those metrics to auto‑scale the inference service during peak hours. I learned that a well‑defined API contract is as critical for ML deployments as it is for traditional services—clear boundaries prevent “model drift” from breaking downstream applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
