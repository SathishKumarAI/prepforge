---
qid: ing_527a9b14d9__aws__local
question: 'Explain: What an API Contract Defines — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 733
total_tokens: 969
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:38-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Behavioral STAR:** I led a cross‑functional team that delivered the first internal ML inference service for our recommendation engine. We defined an API contract to ensure data scientists, product managers, and ops could all “talk the same language.”  

**S (Situation)** – The ML model was deployed in production as a Lambda function behind ALB, but every new feature required us to hand‑craft request/response formats.  
**T (Task)** – Create a reusable API contract that guarantees backward compatibility and clear versioning for all consumers.  
**A (Action)** – I wrote a JSON Schema that captured the exact input fields (`user_id`, `item_ids[]`, `context: {timestamp, locale}`) and output (`scores[]`). The schema was stored in **AWS Glue Data Catalog** so data teams could validate against it with AWS Athena queries. I added an OpenAPI spec to our API Gateway stage variables for automatic Swagger UI generation. For versioning we used a semantic header (`X‑Api‑Version`) and deployed each major change via **CloudFormation stack sets**, ensuring a blue/green rollout.  
**R (Result)** – After the contract was in place, new feature rollouts dropped from 18 hrs of manual QA to 2 hrs, and we reduced API errors by **42%** over three months. The clear spec also cut onboarding time for new data scientists by **70%**.

---

### Technical/System Design

| Requirement | AWS Service(s) | Reasoning |
|-------------|----------------|-----------|
| **Scalable inference** | `AWS Lambda` + `Amazon API Gateway` | Serverless, auto‑scales to 10k RPS; cold starts mitigated with provisioned concurrency. |
| **Versioning & backward compatibility** | `API Gateway Stage Variables`, `OpenAPI Spec`, `Glue Data Catalog` | Keeps contract discoverable and enforceable across teams. |
| **Observability** | `CloudWatch Logs`, `X-Ray` | Trace request latency, error rates; 5‑second SLA met. |
| **Cost** | Lambda pay‑per‑execution + API Gateway $3.5/1M calls | Total cost < $200/month for 2 M requests. |

**Trade‑offs:**  
- *Latency vs. Cost*: Using Lambda provides lower cost but higher latency (~150 ms). If sub‑50 ms is required, we’d move to **Amazon SageMaker Endpoint** with a GPU instance, costing ~×5.  
- *Complexity of Schema Management*: Storing schema in Glue adds overhead; alternatively, use **AWS AppConfig** for dynamic schema updates.

---

### What a Bar‑Raiser Listens For

| Signal | Why It Matters |
|--------|----------------|
| **Ownership** – “I took the initiative to formalize the contract.” | Shows proactive problem solving. |
| **Dive Deep** – Citing specific metrics (42% error reduction). | Demonstrates analytical rigor. |
| **Quantified Impact** – 70% faster onboarding, $200/month savings. | Aligns with business outcomes. |
| **Learning from Failure** – Initial ad‑hoc schemas caused version drift; the new contract prevented regressions. | Indicates growth mindset. |

This answer blends a concrete behavioral story with a clear, AWS‑centric system design, satisfying Amazon’s interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
