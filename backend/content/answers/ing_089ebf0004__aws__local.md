---
qid: ing_089ebf0004__aws__local
question: 'Explain: What you''re actually expected to know — Qa Sdet Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 398
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:30-05:00'
sources: []
---

**Situation & Task**  
I was hired as a QA SDET for an AI‑powered recommendation service that served 10 M daily users on Amazon’s e‑commerce platform. The leadership principle that guided my work was **Customer Obsession** – we had to guarantee the model delivered relevant results without degrading performance.

**Action**  
1. **Requirements & Design** – Defined end‑to‑end test scenarios: unit tests for inference pipelines, integration tests for data drift detection, and load tests against SageMaker endpoints.  
2. **AWS Services** – Used **SageMaker Pipelines** for model training, **ECS/Fargate** for containerized test runners, **CloudWatch** & **XRay** for observability, and **Step Functions** to orchestrate a CI/CD workflow that automatically retrained models when drift exceeded 3 %.  
3. **Scalability/Availability** – Leveraged **Auto Scaling Groups** for the test clusters and **S3** for artifact storage; ensured 99.9 % availability by running tests in multiple AZs.  
4. **Cost Control** – Implemented spot‑instance usage for heavy load tests, reducing spend by 35 %.  

**Result**  
- Reduced model rollback incidents from 7 % to <1 % within six months.  
- Cut test cycle time from 48 h to 12 h, enabling a weekly deployment cadence.  
- Saved ~$120K annually on testing infrastructure.

**Bar‑raiser notes** – I demonstrated ownership by owning the entire test lifecycle, dove deep into performance metrics, quantified impact with real numbers, and learned from an initial drift‑false‑positive failure that led to tighter threshold tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
