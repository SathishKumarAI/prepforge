---
qid: ing_83f58702f4__aws__local
question: 'Explain: API Contracts — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 520
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:20-05:00'
sources: []
---

**Situation (S)**  
In my last role I led the migration of a legacy recommendation engine to a micro‑service architecture on AWS. The interview panel asked me to explain how I’d prepare for an API‑contract question in a system‑design interview.

**Task (T)**  
I had to demonstrate ownership, dive deep into contract design, and quantify impact: reduce API failure rate from 4 % to <0.5 %, cut latency by 30 %, and improve developer velocity.

**Action (A)**  

1. **Define the contract scope** – list all endpoints, payloads, auth flows, and error codes.  
2. **Versioning strategy** – use semantic versioning (`v1`, `v2`) stored in API Gateway’s *stage* variables; keep backward compatibility by deprecating old fields only after a 6‑month grace period.  
3. **Validation & Governance** – store OpenAPI specs in CodeCommit, run unit tests with AWS Lambda (Node.js) to auto‑validate against the spec on every PR.  
4. **Documentation & SDK generation** – use Swagger UI in an S3 static site and generate client SDKs via `openapi-generator` as part of CI/CD.  
5. **Monitoring & rollback** – enable CloudWatch metrics (`API_Invocation`, `ErrorRate`) and set alarms that trigger a Lambda rollback to the previous spec if error rate >1 %.  

**Result (R)**  
Post‑migration, API errors dropped from 4 % to 0.3 %, latency improved by 32 %, and new feature rollouts accelerated by 2× due to automated contract checks.

---

### AWS services used
- **Amazon API Gateway** – request routing & throttling  
- **AWS Lambda** – spec validation, SDK generation  
- **CodeCommit / CodePipeline** – source control & CI/CD  
- **CloudWatch** – metrics & alarms  
- **S3** – static hosting of Swagger UI  

### Bar‑raiser signals
- **Ownership**: full responsibility for contract lifecycle.  
- **Dive Deep**: versioning, validation pipelines, rollback logic.  
- **Quantified Impact**: concrete percentages on errors, latency, velocity.  
- **Learning from Failure**: previous outages drove the need for automated spec checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
