---
qid: ing_50edcd6889__fp__local
question: Design an agent that takes actions in enterprise tools (file a Jira ticket,
  draft an email) on a user's behalf. How do you handle permissions and evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 507
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:57:09-05:00'
sources: []
---

**Why the problem matters**

An enterprise agent that drafts tickets or emails must *respect* two hard constraints:  
1. **Privacy‑policy compliance** – it may only act on data the user has explicitly authorised.  
2. **Least‑privilege execution** – it should never elevate privileges beyond what is needed for a single task.

If we ignore either, the agent becomes a vector for leaks or privilege escalation; if we enforce both too strictly, the system stalls.

---

### Permission as *conditional access*  

Treat every API call as a function `f(x) → y` guarded by a *policy* `π`.  
The policy is a tuple `(role, scope, intent)` derived from the user’s current context:

```
π = (role=“project‑manager”, 
     scope={JiraTickets:write, Email:send}, 
     intent="create ticket")
```

The agent evaluates `π` by:

1. **Static analysis** of the action plan to enumerate required scopes.  
2. **Dynamic attestation** that the user’s session token carries those scopes (via OAuth 2.0 or SAML).  

If any scope is missing, the agent halts and asks for consent or delegates to a human.

---

### Evaluation as *privacy‑budget accounting*

Borrow differential privacy’s budget `ε` concept: each action consumes a *permission‑cost*.  
Maintain a ledger per user:

```
budget_total = 1.0
budget_used  += cost(action)
```

When `budget_used > budget_total`, the agent must request re‑authorization or refuse.  
This ensures cumulative leakage is bounded, turning permission checks into an explicit resource.

---

#### Non‑obvious insight

**The “intent” field is the missing link.**  
Two users may have identical scopes, yet the same scope used for a bug report versus a feature request carries different sensitivity. By encoding intent and verifying it against a *policy graph* (e.g., “create ticket → requires project context”), we can disallow privilege abuse even when tokens are over‑privileged.

---

**Bottom line:** Model permissions as policy‑guarded functions, enforce them with dynamic attestation, and treat cumulative access as an accountable budget. This guarantees the agent acts only within its authorized envelope while remaining flexible enough to be useful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
