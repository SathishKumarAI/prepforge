---
qid: ing_50edcd6889__aws__local
question: Design an agent that takes actions in enterprise tools (file a Jira ticket,
  draft an email) on a user's behalf. How do you handle permissions and evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 437
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:56-05:00'
sources: []
---

**Situation & Task**  
I led the “Smart Agent” project at a SaaS firm where users wanted an AI assistant that could create Jira tickets and draft emails on their behalf while respecting corporate security. The goal was to launch by Q4 with zero data leakage.

**Approach (Technical)**  
1. **Permission Model** – Implement OAuth 2.0 + AWS Cognito for delegated access, storing scopes in DynamoDB (`user_id`, `service`, `allowed_actions`).  
2. **Evaluation Engine** – Lambda “Policy Validator” runs before each action; it pulls the user’s scope, checks a fine‑grained IAM policy stored in SSM Parameter Store, and returns approval or a refusal.  
3. **Action Layer** – EventBridge routes approved actions to microservices:  
   * `JiraLambda` (calls Jira REST API)  
   * `SESEmailLambda` (drafts & sends via Amazon SES).  
4. **Audit & Monitoring** – CloudWatch Logs + Athena queries for compliance; metrics in CloudWatch Dashboards (`actions_success`, `denied_actions`).  

**Result**  
- 99.9 % of actions succeeded with zero security incidents.  
- User satisfaction rose from 78 % to 94 % (NPS).  
- Cost stayed under $0.05/action thanks to serverless scaling.

**Leadership Principles Reflected**  
* **Ownership** – I owned the entire flow, from OAuth to audit, and drove cross‑team alignment.  
* **Dive Deep** – Built a granular permission store, logged every decision, and iterated on policy rules after initial denial spikes.  

**Bar‑raiser Takeaway**  
They’ll look for evidence of end‑to‑end ownership, a data‑driven impact metric (NPS lift), and how I learned from early denials to tighten the policy model—showing true *Customer Obsession* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
