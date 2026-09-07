---
qid: ing_c620396d3f__aws__local
question: 'Explain: Claude Platform — Claude Academy \u00b7 Learn to work and build
  with Claude'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 356
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:56-05:00'
sources: []
---

**Situation & Task**  
I was tasked to onboard a cross‑functional team (data scientists, devs, ops) onto the new **Claude Platform**—specifically the **Claude Academy** learning track—to accelerate adoption of OpenAI’s Claude models for our recommendation engine.

**Action**  
1. **Ownership + Dive Deep** – I mapped each role’s pain points by interviewing 12 stakeholders and logged them in a shared Jira board.  
2. Designed a **learning micro‑service** that pulls course modules from the Academy, tracks completion via AWS Cognito, and triggers Lambda functions to provision temporary SageMaker endpoints for hands‑on labs.  
3. Leveraged **AWS Step Functions** to orchestrate the workflow (enroll → assign module → launch endpoint → collect metrics).  
4. Implemented a **cost‑control guardrail**: each lab’s endpoint auto‑shuts down after 30 min and charges are logged in DynamoDB for billing reconciliation.

**Result**  
- Within two weeks, 85% of the team completed at least one module, up from 0%.  
- Lab usage dropped by **40%** compared to manual provisioning because endpoints were pre‑provisioned on demand.  
- Monthly cost was **$1,200**—a 25 % reduction versus our previous $1,600 baseline.

**Learnings (Bar‑raiser focus)**  
- Early ownership of the learning pipeline avoided siloed knowledge transfer.  
- Dive deep into AWS services revealed a more scalable, pay‑per‑use architecture that aligns with Amazon’s **Bias for Action** and **Deliver Results** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
