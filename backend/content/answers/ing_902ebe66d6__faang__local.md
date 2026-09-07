---
qid: ing_902ebe66d6__faang__local
question: 'Explain: Action whitelist over action blocklist — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 492
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:34-05:00'
sources: []
---

**Clarify**  
The question asks why an organization would prefer an *action‑whitelist* (allow only known good actions) rather than an *action‑blocklist* (deny only known bad actions) when controlling a Computer Use Agent in production. I’ll assume the agent runs on user workstations, performs automated tasks, and is exposed to networked resources.

**Approach**  
1. List trade‑offs of whitelist vs blocklist.  
2. Map those to security, compliance, maintainability, and operational risk for a production agent.  
3. Conclude with the recommendation.

**Depth**  

| Aspect | Whitelist | Blocklist |
|--------|-----------|-----------|
| **Security posture** | Only explicitly allowed commands run → minimal attack surface; any new or unexpected behavior is blocked. | Anything not listed as bad runs; a missing entry opens a hole. |
| **Compliance & audit** | Easier to prove “only approved actions” because the list is explicit and small. | Requires exhaustive enumeration of all malicious patterns, hard to guarantee completeness. |
| **Operational risk** | Adding new legitimate functionality requires deliberate inclusion → slower but intentional change management. | New features can inadvertently introduce a gap if not vetted; more frequent false positives. |
| **Performance** | Simple lookup in a small set (O(1)). | Potentially larger list, higher chance of mis‑classification, and need for pattern matching. |

In production, the agent must be *predictable* and *hard to subvert*. A whitelist guarantees that any deviation from the approved script is immediately halted, reducing the attack surface and simplifying compliance audits.  

**Edge cases**  
- If the agent needs dynamic behavior (e.g., downloading a new module), the whitelist must accommodate a “trusted source” rule or a signed‑payload mechanism.  
- False negatives: legitimate but unforeseen actions are blocked until the whitelist is updated.

**Optimize & communicate**  
Implement a *signed, versioned policy file* that can be rolled out automatically; use an external monitoring service to flag any attempted non‑whitelisted action for rapid review. Communicate the change by highlighting how the whitelist reduces risk and aligns with least‑privilege principles—key points interviewers look for in structured, security‑centric reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
