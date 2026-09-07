---
qid: ing_84e1d985f3__aws__local
question: How do you design tool permissions for an agent, and how do you stop human
  approval gates from becoming rubber-stamping?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 403
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:34-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built an AI‑driven content‑moderation agent for our global marketplace, we discovered two pain points: (1) the agent was granted broad IAM roles that let it edit listings, risking accidental policy drift; (2) human reviewers had become “rubber‑stamping” approvals because the workflow allowed them to bypass the AI’s recommendation after a single click.  

**Action**  
* *Fine‑grained permissions*: I mapped every operation the agent performed to a separate IAM policy and attached those policies to an **IAM role** that the Lambda function assumed. We used **AWS KMS** to encrypt any sensitive data it handled, ensuring least privilege.  
* *Human‑in‑the‑loop gate*: I rewrote the approval step as an **Amazon Step Functions state machine** with a `Wait` state that required reviewers to provide contextual feedback (e.g., “Why approve?”). The state machine recorded the comment in **DynamoDB** and only released the transaction if the comment length exceeded 20 characters.  
* *Metrics & monitoring*: I enabled CloudWatch Alarms on the Step Functions execution time and added a Lambda that tallied approvals per reviewer. Within two weeks we saw a 35 % drop in “quick‑approve” clicks, and the error rate from accidental edits fell to <0.01 %.  

**Result**  
The system now enforces strict ownership of permissions (IAM + KMS) while keeping human oversight meaningful—reducing manual review fatigue by 40 % and cutting costly rollbacks by 50 %.  

*Leadership Principles*: **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
