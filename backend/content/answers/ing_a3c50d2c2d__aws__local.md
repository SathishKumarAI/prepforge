---
qid: ing_a3c50d2c2d__aws__local
question: 'Explain: Q94: You''re building a computer-use agent (Claude Cowork, OpenAI
  Operator-class) that can fill forms, click buttons, and read screen content. Design
  the sandbox, network policy, and human-confirmation pattern.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 549
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:40-05:00'
sources: []
---

**Situation** – In a previous role I led the launch of an “AI‑CoPilot” that automated data entry for high‑volume client portals. We had to guarantee isolation, zero data leakage, and auditability while keeping latency < 200 ms for 10 k concurrent users.

**Task** – Design a secure sandbox, network policy, and human‑confirmation workflow for an agent like Claude Cowork that can read screens, click buttons, and fill forms.

**Action**  
1. **Sandbox & Runtime Isolation** – Spin each agent in a *dedicated EC2 instance* inside a *private subnet* of a VPC with *Security Group* rules allowing only outbound HTTPS to the target domain (via an NLB). Use *Amazon Macie* on the S3 bucket that stores session logs for automated data‑exposure detection.  
2. **Network Policy** – Implement *AWS WAF* and *GuardDuty* to block malicious traffic; enable *VPC Flow Logs* for audit trails. All agent–client communication goes through a *TLS‑terminated ALB* with strict cipher suites, ensuring end‑to‑end encryption.  
3. **Human‑Confirmation Pattern** – After every form submission the agent posts a *JSON payload* to an *Amazon SNS topic*. A Lambda function (invoked by SNS) writes the action to DynamoDB and triggers a *Step Functions* workflow that surfaces the step in a *SageMaker Studio* UI for human review. If approved, the Lambda publishes a message back to the agent via an SQS queue; if rejected, the agent rolls back changes.

**Result** – Deployed 12 agents across 30 clients with **99.999% availability**, reducing manual entry errors by **85%** and cutting processing time from 15 s to 3 s per form—cost savings of $120K/yr.  

**Bar‑raiser notes:**  
- Ownership: I owned the full security stack, not just the AI logic.  
- Dive Deep: Used Flow Logs & Macie metrics to prove zero data leaks.  
- Quantified Impact: Delivered measurable error reduction and cost saving.  
- Learning from Failure: Early prototype leaked credentials; we added IAM roles with least privilege, a hard lesson in “less is more.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
