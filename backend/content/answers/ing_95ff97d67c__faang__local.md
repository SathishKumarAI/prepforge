---
qid: ing_95ff97d67c__faang__local
question: What security problems appear in a multi-agent system that do not exist
  with a single agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 483
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:32:55-05:00'
sources: []
---

**Clarify**  
In a *multi‑agent* environment each autonomous entity (bot, service, or script) can act independently yet interact via shared resources or communication channels. I’ll assume the agents share data stores, APIs, and possibly networked services, and that we’re concerned with confidentiality, integrity, and availability of the system as a whole.

**Approach**  
1. Identify interactions that introduce new attack surfaces.  
2. List how these surfaces break traditional single‑agent defenses.  
3. Highlight mitigations that must be coordinated across agents.

**Depth**  

| Problem | Why it’s unique to multi‑agents | Typical impact |
|---------|---------------------------------|----------------|
| **Inter‑agent trust escalation** | A compromised agent can impersonate another via shared credentials or message passing, bypassing per‑agent isolation. | Privilege abuse, data leakage. |
| **Shared resource contention attacks** | Agents race for locks, caches, or DB connections; a malicious agent can starve others (Denial of Service). | Availability loss, degraded performance. |
| **Coordinated replay/forgery** | Multiple agents can collude to replay old messages or forge signatures that each alone couldn’t produce. | Integrity breach, double‑spending scenarios. |
| **Side‑channel leakage across agents** | Shared CPU caches or network stacks leak timing/opcode patterns; one agent infers another’s secrets. | Confidentiality compromise. |
| **Policy drift & inconsistent enforcement** | Different agents may apply divergent security policies if not centrally governed. | Inconsistent compliance, blind spots. |

**Edge cases**  
- *Zero‑trust communication* (e.g., encrypted channels) still vulnerable to key mismanagement.  
- *Dynamic agent onboarding* can introduce unvalidated trust relationships.  

**Optimize & communicate**  
Introduce a *security fabric*: centralized policy engine, mutual TLS for inter‑agent traffic, and fine‑grained access control lists per agent. Use rate‑limiting and lock‑free data structures to mitigate contention. Finally, audit logs should be tamper‑evident and correlated across agents so that any coordinated attack is quickly observable. Communicate this architecture in a concise diagram during the interview to demonstrate holistic threat modeling and mitigation planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
