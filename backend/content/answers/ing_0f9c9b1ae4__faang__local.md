---
qid: ing_0f9c9b1ae4__faang__local
question: Design the human approval flow for an agent that files expense reports.
  Where do the gates go, and how do you stop people from clicking through them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 410
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:19:42-05:00'
sources: []
---

**Clarify**  
We’re building a workflow where an AI agent submits expense reports on behalf of users. The goal is to prevent fraud or erroneous entries while keeping the process painless for employees. Key assumptions:  
* Users can flag or approve automatically generated claims.  
* There’s a policy engine that knows limits per category, currency, and user role.  
* The system must audit every action for compliance.

**Approach**  
1. **Pre‑validation gate** – AI runs against the policy engine before submission.  
2. **Human review queue** – If any rule is violated or confidence < X%, the report lands in a reviewer’s inbox.  
3. **Final approval gate** – The manager or finance officer signs off, triggering audit logs and notifications.

**Depth**  
*Pre‑validation*: use a decision tree that checks amounts, dates, duplicates, and receipt OCR quality. Complexity O(1) per field; overall O(n).  
*Queueing*: implement a priority queue where high‑risk reports (e.g., > $10k or cross‑border) surface first.  
*Audit*: immutable logs stored in a tamper‑proof ledger; every click is time‑stamped and tied to a user ID.  

**Edge Cases**  
- Receipt OCR fails → auto‑flag for manual review.  
- User tries to bypass by re‑submitting the same report → deduplication hash blocks it.  
- Manager’s approval overridden by system policy → blocked and escalated.

**Optimize & Communicate**  
Add a “confidence score” bar in the UI; if below threshold, hide the submit button until reviewers approve. Use progressive disclosure: show only essential fields to reduce cognitive load. Explain to interviewers that this design balances automation with oversight while preventing click‑through by making the approval step mandatory for any deviation from policy and ensuring every action is auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
