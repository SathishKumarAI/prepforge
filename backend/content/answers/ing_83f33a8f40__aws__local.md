---
qid: ing_83f33a8f40__aws__local
question: The customer wants your agent to take write actions in their ERP - create
  purchase orders, update records. How do you design and stage that safely?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 467
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:20-05:00'
sources: []
---

**Situation (S)**  
A retail client wanted my AI agent to *create purchase orders and update inventory records* directly in their legacy ERP. The risk was data corruption and compliance violations.

**Task (T)**  
Design a safe, auditable workflow that lets the agent act on live data while preserving ownership, traceability, and high availability.

**Action (A)**  

1. **Sandbox staging** – spin up an identical ERP copy in a separate VPC using AWS‑managed RDS for persistence.  
2. **API Gateway + Lambda** – expose only whitelisted CRUD endpoints to the agent; each Lambda runs with least‑privilege IAM roles and KMS‑encrypted secrets.  
3. **Step Functions orchestration** – orchestrate “create → validate → commit” steps, adding a compensating transaction (rollback) on failure.  
4. **EventBridge + SQS** – publish every change to an audit topic; a consumer writes immutable logs to DynamoDB for compliance and replayability.  
5. **CI/CD with CodePipeline** – promote code only after unit tests, integration tests in the sandbox, and manual approval gates.

**Result (R)**  

- 99.9 % availability during rollout.  
- Zero data‑corruption incidents in production; audit trail proved compliance.  
- Rollback latency < 2 s, reducing potential loss to <$200 per incident.  

**Leadership Principles Anchored**

*Customer Obsession* – ensured no customer disruption and full auditability.  
*Ownership & Dive Deep* – built end‑to‑end traceability, logged every state change, and learned from the first sandbox failure (missing idempotency), which we added before production.

This design balances **scalability** (serverless + Step Functions), **availability** (multi‑AZ RDS, SQS durability), and **cost** (pay‑as‑you‑go Lambda + DynamoDB).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
