---
qid: ing_77fc7752d2__aws__local
question: 'Explain: 2.3. Self-Descriptive — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 532
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:47-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“A RESTful service is an HTTP interface that exposes resources in a stateless, self‑descriptive way so clients can discover and manipulate them without tight coupling.”*  

### Behavioral (STAR)  
**Situation:** At my previous role I led the migration of a legacy SOAP endpoint to a modern API for our mobile app.  
**Task:** Deliver a fully documented, scalable interface that reduced developer onboarding time by 40 %.  
**Action:** Adopted *Customer Obsession*—I interviewed 12 developers to capture pain points, then applied *Dive Deep* to the existing schema, refactoring it into RESTful resources (e.g., `/orders/{id}`). I used OpenAPI v3 for self‑description and automated Swagger UI. For scalability I chose **Amazon API Gateway** + **Lambda**, enabling zero‑capacity pre‑warm, while **DynamoDB** provided 99.999 % availability.  
**Result:** API traffic grew from 5K to 200K requests/day with a 15 % cost reduction (from $12k to $10.2k/month). Developer onboarding time dropped from 3 weeks to 1 week, and error rates fell by 60 %.  

### Technical / System  
- **Requirements:** Statelessness, cache‑ability, clear URI semantics, self‑documentation.  
- **Design:** API Gateway → Lambda (Python) → DynamoDB; use API keys + Cognito for auth, CloudWatch for metrics.  
- **Scalability & Availability:** Lambda auto‑scales to 10k concurrent invocations; DynamoDB offers single‑digit millisecond latency with multi‑AZ replication.  
- **Cost Trade‑offs:** Pay‑per‑request model reduces idle capacity; however, cold starts can add ~200 ms latency—mitigated by provisioned concurrency for critical endpoints.  

### Bar‑raiser Lens  
- **Ownership:** Took end‑to‑end responsibility from design to production roll‑out.  
- **Dive Deep:** Analyzed legacy system performance bottlenecks and refactored data model.  
- **Quantified Impact:** 40 % faster onboarding, 15 % cost savings, 60 % error reduction.  
- **Learning from Failure:** Initial rollout caused a spike in 5xx errors; I introduced throttling policies and iterated on the schema to stabilize traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
