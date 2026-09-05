---
qid: ing_77303dc9f6__star__local
question: 'Explain: Client error responses — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 386
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:24-05:00'
sources: []
---

**Situation** – While leading the API migration for a fintech startup, our new service started returning a high volume of 400‑level errors after customers upgraded from legacy endpoints. The incident reports indicated “Bad Request” and “Not Found” codes spiking to 35% of traffic.

**Task** – I had to diagnose why clients were hitting client‑error responses, map each status code to its root cause, and redesign the contract so that downstream services could handle or reject requests gracefully.

**Action** – First, I set up a middleware logger in Node.js (Express) to capture request payloads and headers. Using Postman collections, I replayed failing requests against a sandbox environment, then matched each 400‑series code:  
- **400 Bad Request** → missing required fields or schema violations; fixed by tightening JSON Schema validation with AJV and returning detailed error messages.  
- **401 Unauthorized** → expired JWT tokens; added token introspection middleware and refreshed logic.  
- **403 Forbidden** → role‑based access checks; refactored ACLs in our policy engine.  
- **404 Not Found** → invalid resource IDs; introduced a “resource existence” guard that returns 410 if the ID is permanently deleted.  
I also added OpenAPI documentation for each error scenario and automated unit tests with Jest to assert correct status codes.

**Result** – After deployment, client‑error traffic dropped from 35% to <3%, reducing support tickets by 80%. The API’s reliability improved, and we gained a clearer contract that developers could trust. I learned the importance of systematic logging, schema validation, and proactive error documentation in preventing cascading failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
