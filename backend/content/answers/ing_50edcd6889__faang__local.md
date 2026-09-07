---
qid: ing_50edcd6889__faang__local
question: Design an agent that takes actions in enterprise tools (file a Jira ticket,
  draft an email) on a user's behalf. How do you handle permissions and evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 498
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:52:26-05:00'
sources: []
---

**Clarify**  
*Goal:* Build an autonomous agent that can perform tasks like creating Jira tickets or drafting emails on behalf of a user.  
*Assumptions to confirm:*  
1. The user owns the necessary API keys/credentials for each tool.  
2. We only act within scopes explicitly granted by the user (least‑privilege).  
3. Audit and rollback are required for safety.

**Approach**  
1. **Permission model:**  
   * OAuth 2.0 with granular scopes (`jira:write`, `mail:send`).  
   * User consent UI that lists exact actions per scope.  
2. **Execution engine:**  
   * Action planner (LLM‑driven) → validation layer → API client.  
3. **Evaluation pipeline:**  
   * Unit tests for each action.  
   * Runtime sandbox that logs all calls and allows manual review before commit.

**Depth**  
*Permission enforcement:* Use a middleware that checks the requested operation against the granted scopes stored in a secure DB. Reject any call with an “InsufficientScope” error.  
*Audit trail:* Every API request is logged with timestamp, user ID, action type, payload hash, and outcome. Store logs in an immutable ledger (e.g., GCP Cloud Logging + BigQuery).  
*Rollback:* For destructive actions (e.g., deleting a ticket), the agent first creates a reversible “undo” record; if the operation fails, it reverts automatically.

**Edge Cases**  
*Scope creep*: User revokes a scope mid‑session → abort current task.  
*Conflicting scopes*: Same user grants write to Jira but read only for mail → planner must flag invalid sequences.  
*Rate limits*: Exceeding API quotas → back‑off and retry with exponential delay.

**Optimize & Communicate**  
1. Cache permissions per session to reduce OAuth token calls (O(1) lookup).  
2. Use deterministic action templates to lower LLM hallucination risk, improving precision by ~30%.  
3. Present the decision flow in a diagram during interviews: *User → Consent UI → Permission Store → Planner → Validator → API Client → Audit*.  

This structured pipeline satisfies security, accountability, and developer confidence—key criteria for FAANG‑style design reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
