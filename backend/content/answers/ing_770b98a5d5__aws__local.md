---
qid: ing_770b98a5d5__aws__local
question: 'Explain: HTTP API Codes — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 371
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:26-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our legacy SOAP service to a REST‑API that would power a new mobile app for 4 M monthly users. The goal was to expose the same business logic while reducing latency and operational cost.

**Action**  
*Customer Obsession & Ownership*: I mapped every SOAP operation to an HTTP verb, then designed a clean resource model (e.g., `/orders/{id}` → GET, POST, PUT).  
*Dive Deep*: Implemented status‑code semantics—`200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, `500 Internal Server Error`. I added HATEOAS links for discoverability.  
*Bias for Action & Deliver Results*: Deployed the API on **Amazon API Gateway** + **Lambda** (Node.js). Used **AWS WAF** for rate‑limiting, and **CloudWatch** for metrics (`4xx/5xx` rates, latency percentiles). The new API cut response time from 350 ms to 80 ms (75% faster) and reduced infrastructure cost by 40 %.

**Result**  
Within two weeks of launch, the mobile app’s user engagement rose by 18 %, while error‑rate dropped from 3.2 % to <0.1 %. The API scaled automatically to 10 k concurrent requests without throttling.

**Bar‑raiser Takeaway**  
I demonstrated end‑to‑end ownership, deep technical understanding of HTTP semantics, and a data‑driven impact that aligned with Amazon’s Customer Obsession and Deliver Results principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
