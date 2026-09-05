---
qid: ing_95ff97d67c__eli5__local
question: What security problems appear in a multi-agent system that do not exist
  with a single agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 240
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:35:31-05:00'
sources: []
---

Imagine each AI agent as a person in a shared apartment building. With one tenant, the landlord (the system) only needs to worry about that single person’s keys and locks. But when many tenants move in—each with their own key, habits, and roommates—the security landscape changes dramatically.

**Shared resources become attack points:** If two agents share data or a network channel, one could slip malicious code into the shared space, letting another agent unknowingly execute it (a *data poisoning* attack).  
**Collusion is possible:** Two agents might coordinate to bypass a safety check that only looks at individual behavior.  
**Identity confusion:** A rogue agent can masquerade as a legitimate one by mimicking its communication pattern, tricking other agents into trusting it.  
**Resource starvation:** One agent could hog bandwidth or compute time, starving others and causing denial of service.

In short, the more agents you have, the more ways they can interfere with each other’s safety—like multiple tenants creating new doors, windows, and hidden passages that a single‑tenant apartment never had to guard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
