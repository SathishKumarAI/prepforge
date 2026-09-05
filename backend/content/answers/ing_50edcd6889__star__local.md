---
qid: ing_50edcd6889__star__local
question: Design an agent that takes actions in enterprise tools (file a Jira ticket,
  draft an email) on a user's behalf. How do you handle permissions and evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 347
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:04-05:00'
sources: []
---

**Situation:**  
In my last role at a SaaS company, we built a chatbot that could create JIRA tickets and send status emails for our support team. The team was skeptical because the bot needed to act on their accounts across multiple tools.

**Task:**  
I had to design a permission framework that let users grant the bot just enough access to perform its tasks while keeping all credentials secure, and then devise a way to evaluate whether those permissions were used correctly without exposing sensitive data.

**Action:**  
First, I implemented OAuth2 with granular scopes: `jira.issue:create` for ticket creation and `mail.send` for email. Users authenticate via our single‑sign‑on portal; the bot receives short‑lived access tokens and a refresh token stored in an encrypted vault (AWS KMS). For audit, I added an event‑driven log stream to AWS CloudWatch that records every API call with its scope and user ID, but strips any PII. A periodic Lambda job runs a policy compliance check: it verifies that the bot never calls `jira.issue:update` or accesses private mail folders, and flags any anomalies. Finally, I built a self‑service dashboard where users can revoke scopes instantly.

**Result:**  
Within three weeks of rollout, we saw a 35 % reduction in ticket‑creation time for support agents, and no security incidents were reported. The audit logs also helped us pass an internal compliance review with zero findings. From this, I learned that giving people fine‑grained OAuth scopes combined with automated policy checks is the most transparent way to balance usability and security in enterprise AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
