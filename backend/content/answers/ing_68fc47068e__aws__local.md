---
qid: ing_68fc47068e__aws__local
question: 'Explain: Library APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 580
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:40-05:00'
sources: []
---

**What is an API? (Machine‑Learning Library Context)**  

> **Customer Obsession / Ownership** – I always start by asking: *“How will this make the user’s life easier?”*  
> **Dive Deep** – Then I break it down to the core concept and its impact on a ML workflow.

---

### Behavioral (STAR)

- **Situation:** In 2023, our team was migrating from an in‑house data‑prep script to a reusable ML library for the finance product.  
- **Task:** Design a public API that developers could call without understanding internal logic.  
- **Action:** I wrote a clear spec: `class Predictor { fit(X, y); predict(X); explain(instance) }`, added versioning and backward compatibility tags, and documented with Swagger‑style docstrings. I also created unit tests that validated 99 % of edge cases.  
- **Result:** Adoption jumped from 0 to 73 % of developers in the first month; model training time dropped by **32 %** due to cached preprocessing, and we reduced support tickets by **18 %**.

---

### Technical/System

| Requirement | Design Choice | AWS Services | Scalability / Availability | Cost |
|-------------|---------------|--------------|---------------------------|------|
| **Stateless inference** | RESTful endpoint + caching | API Gateway → Lambda (Python) → SageMaker Endpoint | Auto‑scaling, multi‑AZ, 99.9 % SLA | $0.20/1000 invocations + SageMaker hosting |
| **Versioning & rollback** | Semantic tags in Lambda layers | S3 for artifacts, CodePipeline CI/CD | Blue/Green deployments | Minimal extra cost |
| **Explainability** | Local SHAP wrapper | CloudWatch Logs, Athena for analytics | Asynchronous batch jobs on EMR | $0.05 per GB processed |

*Trade‑offs:* Using Lambda keeps cold starts low but limits long‑running jobs; moving to Fargate would reduce latency further at higher cost.

---

### What a Bar‑raiser Hears

- **Ownership:** I owned the spec, tests, and deployment pipeline.  
- **Dive Deep:** Detailed trade‑off matrix and cost estimates show depth.  
- **Quantified Impact:** Concrete metrics (usage %, time savings, ticket reduction).  
- **Learning from Failure:** After an initial spike in Lambda errors due to memory limits, I tuned the function size and added a retry policy—documented in post‑mortem.

> *“A great API is not just code; it’s a promise of reliability, performance, and developer delight.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
