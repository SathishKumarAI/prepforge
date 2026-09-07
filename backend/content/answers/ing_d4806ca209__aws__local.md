---
qid: ing_d4806ca209__aws__local
question: 'Explain: 2.4. Example — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 427
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:39-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** At my last role I was tasked with exposing a recommendation engine to third‑party partners. The spec demanded a lightweight interface that could scale to millions of calls per day without a dedicated server farm.  
> 
> **Task:** Design a RESTful API that is *stateless*, *discoverable* and can be consumed by any HTTP client while staying cost‑effective on AWS.  
> 
> **Action:**  
> 1. **Define resources** (`/products`, `/recommendations`) using nouns, expose CRUD verbs (GET, POST).  
> 2. **Use API Gateway + Lambda** – gateway handles throttling, caching, and OAuth; each Lambda implements a single endpoint, ensuring idempotency and no session state.  
> 3. **Persist with DynamoDB** – schema‑free, auto‑scales to >10 k RCU/WCU, giving <5 ms latency for 99th percentile reads.  
> 4. **Implement HATEOAS links** so clients can navigate resources without hard‑coding URLs.  
> 5. **Add OpenAPI spec & Swagger UI** for self‑documentation (Customer Obsession).  
> 
> **Result:** Deployed in 3 weeks; API handled 1 M requests/day with <0.2 % error rate, cost <$200/month vs. a traditional EC2 fleet (>10× cheaper). The partner portal saw a 35 % lift in conversion due to instant recommendations (Deliver Results).  
> 
> **Lesson Learned:** Always start by *dive deep* into the problem domain—understanding the customer’s use‑case drives the right AWS services and keeps ownership clear.  

**Key Leadership Principles Highlighted:** Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
