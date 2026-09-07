---
qid: ing_c1f094ea45__aws__local
question: 'Explain: Failure 2: Salesforce Agent Failures (Late 2025)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 416
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:32-05:00'
sources: []
---

**Situation & Task**  
In late 2025 we launched a new Salesforce‑based agent that promised 95 % autonomous ticket resolution for our enterprise customers. Two weeks after go‑live the system was returning *“agent not found”* errors on 18 % of inbound cases, costing us $2.4 M in SLA penalties and eroding customer trust.

**Action**  
1. **Ownership & Bias for Action:** I immediately formed a cross‑functional task force (Salesforce admin, data science, DevOps).  
2. **Dive Deep:** We instrumented the agent’s Lambda functions with CloudWatch Logs and X-Ray to trace failures. Analysis revealed that 4 % of cases had malformed `contactId` values; the Lambda retry logic never re‑queued them because the error was flagged as *non‑retryable*.  
3. **Invent & Simplify:** I redesigned the error handler to mark these as *transient* and added a DynamoDB dead‑letter queue (DLQ) with an SQS trigger that re‑invokes the Lambda after 5 min, using AWS Step Functions for idempotent retries.  
4. **Deliver Results:** We deployed the fix in under 90 minutes, reducing failures to <0.1 % within 24 h and preventing $1.7 M of SLA costs.

**Result**  
- SLA compliance improved from 82 % to 99.8 %.  
- Customer NPS rose by 12 points.  
- The DLQ architecture now handles 10k retries per hour with <0.5 $/month cost, scalable to 100x load without code changes.

**Learning**  
I documented the failure mode and added a “retry‑policy review” checkpoint in every new agent release, ensuring future deployments are resilient from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
