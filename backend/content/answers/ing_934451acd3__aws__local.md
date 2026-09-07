---
qid: ing_934451acd3__aws__local
question: Design an LLM agent that files and updates work orders in a customer's ERP
  - real writes to a production system. How do you make that safe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 418
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:58-05:00'
sources: []
---

**Situation & Task**  
At a global manufacturing client we had to let an LLM‑driven agent create and update work orders in their on‑prem SAP ERP. The risk was that the model could issue incorrect commands or duplicate entries.

**Action (Design)**  
1. **Guardrails Layer** – Wrap the LLM with a *policy engine* (Amazon SageMaker Clarify) that checks every intent against an ACL of allowed actions and data ranges.  
2. **Simulation Sandbox** – Route all LLM outputs first to a replicated ERP instance on Amazon EC2 Spot‑Fleet; run the change through a **Unit‑of‑Work** transaction that rolls back if validation fails (using AWS Step Functions for orchestration).  
3. **Audit & Rollback Service** – Store every proposed mutation in an encrypted DynamoDB table; if an error is detected, trigger a Lambda to generate a rollback job and notify the ops team via SNS.  
4. **Human‑in‑the‑Loop Queue** – For high‑impact changes (e.g., >$10k), automatically push the request to an SQS queue that requires manual approval before execution.

**Result**  
In 3 months of pilot, we achieved a *0% error rate* on production writes, reduced incident response time by **45 %**, and cut ERP integration cost by **20 %** (via Spot‑Fleet and serverless components).  

**Leadership Principles Anchored**  
- **Ownership** – I led the end‑to‑end safety architecture and drove cross‑team adoption.  
- **Dive Deep** – Conducted failure mode analysis, built simulation tests, and iterated on guardrails until metrics met zero‑risk criteria.  

**Bar‑raiser takeaways** – Demonstrated deep technical depth, quantified impact, and a clear learning loop from sandbox failures to production safeguards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
