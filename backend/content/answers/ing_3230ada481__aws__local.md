---
qid: ing_3230ada481__aws__local
question: 'Explain: Encrypted Data — Generative AI for Clinical Conversations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 429
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:38-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a HIPAA‑compliant pilot for an AI‑driven clinical assistant that generated real‑time patient‑doctor dialogues while keeping all PHI encrypted end‑to‑end. The goal was to reduce physician note time by 30 % without compromising data privacy.

**Action**  
1. **Ownership & Design** – I scoped the solution as a serverless microservice: API Gateway → Lambda (Python) → SageMaker endpoint for GPT‑4 fine‑tuned on de‑identified EHR snippets.  
2. **Encrypt Everywhere** – All payloads were encrypted with AWS KMS keys; data at rest in S3 used SSE‑KMS, and the Lambda environment leveraged IAM roles for least privilege.  
3. **Dive Deep into Compliance** – Integrated Amazon Comprehend Medical to auto‑mask PHI before sending text to the model, ensuring only de‑identified tokens reach GPT.  
4. **Scalability & Cost** – Leveraged SageMaker’s on‑demand instances with Spot pricing; achieved 99.9 % availability via Multi‑AZ deployment and Auto Scaling.  
5. **Bias for Action** – Built an A/B test harness in CloudWatch to iterate model prompts, reducing hallucinations by 25 % within two weeks.

**Result**  
- Physician note time dropped from 12 min to 8.4 min (30 % reduction).  
- Encrypted data throughput reached 10 k requests/day with < $0.02 per request.  
- Compliance audit passed on first attempt, no PHI exposure.  

**Learnings** – Early deep dives into KMS and Comprehend Medical saved a costly redesign; ownership of the end‑to‑end pipeline ensured rapid iteration and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
