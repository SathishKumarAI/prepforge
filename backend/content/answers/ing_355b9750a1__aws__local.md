---
qid: ing_355b9750a1__aws__local
question: 'Explain: RESTful API Requests — Top 6 Cases to Apply Idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 464
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:16-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led a micro‑service that exposed a public REST API for customer data updates. We saw an alarming spike in duplicate writes during network retries, causing inconsistent billing records and a 12 % increase in downstream reconciliation effort.

**Action (A)**  
I introduced *idempotency* on the six most critical endpoints:  
1. `POST /orders` – create order  
2. `PUT /orders/{id}` – update order status  
3. `DELETE /orders/{id}` – cancel order  
4. `POST /payments` – record payment  
5. `PATCH /users/{id}` – update profile  
6. `GET /orders/{id}/status` – idempotent read  

Implementation details:  
- **AWS API Gateway** added a custom header (`X‑Idempotency‑Key`).  
- A **DynamoDB table** (partition key = operation, sort key = timestamp) stored request metadata and responses for 24 h.  
- Lambda authorizer verified the key; if present, it fetched the cached response and returned it immediately.  
- For writes, the Lambda checked the table before persisting to RDS/PostgreSQL, guaranteeing one‑time execution.  

**Result (R)**  
Duplicate writes dropped from 3.7 % to <0.1 %. Billing reconciliation time fell by **28 %**, and our SLA improved from 99.9 % to 99.999 %. Costs stayed flat; DynamoDB’s on‑demand mode handled peak traffic with no overprovisioning.

**Leadership Principles Reflected**  
- *Ownership* – I identified the root cause and drove a full‑stack fix.  
- *Dive Deep* – I profiled retry patterns, measured idempotency hit rates, and tuned DynamoDB capacity.  

**Bar‑raiser takeaway**  
Show ownership by solving a cross‑service pain point, dive deep into metrics to justify design choices, quantify impact, and reflect on how the approach scales with traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
