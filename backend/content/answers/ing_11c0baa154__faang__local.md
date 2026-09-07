---
qid: ing_11c0baa154__faang__local
question: 'Explain: Common Mistakes and Anti-Patterns — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 531
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:25:02-05:00'
sources: []
---

**Common Mistakes & Anti‑Patterns in Building Tool Agents (AI)**  

| # | Problem | Why it hurts | Quick Fix |
|---|---------|--------------|-----------|
| **1** | *Over‑engineering the “agent”* | Treating every tool call as a separate microservice → latency, complexity. | Keep a lightweight orchestrator; let the LLM decide when to invoke tools. |
| **2** | *Blindly trusting tool output* | Tools may be buggy or mis‑configured; agents repeat errors. | Validate results (schema checks, sanity tests) before using them in downstream steps. |
| **3** | *Hard‑coding tool chains* | Rigid pipelines break when a new tool arrives. | Use a dynamic policy engine that selects tools based on intent & context. |
| **4** | *No rollback / state management* | Errors leave the system in an inconsistent state (e.g., partial DB writes). | Implement idempotent operations and transaction logs; provide undo actions. |
| **5** | *Ignoring user intent drift* | Agents chase outdated goals after a tool failure. | Re‑query or re‑confirm the goal after each major step. |

---

### Structured Solution Outline

1. **Clarify**  
   - What “tool” means (API, script, DB query).  
   - Success criteria & error handling expectations.  

2. **Approach**  
   - Build a *policy layer* that maps intents → tool sets.  
   - Wrap each tool call with validation and retry logic.  
   - Maintain an immutable execution log for audit/rollback.

3. **Depth**  
   - Use *type‑annotated schemas* (JSON Schema, Pydantic) to enforce output contracts.  
   - Leverage *LLM prompting* to ask “Are you sure?” before destructive actions.  
   - Complexity: O(n) per step for validation; constant extra latency (~10 ms/tool).

4. **Edge Cases**  
   - Tool returns `null` or malformed data → trigger fallback strategy.  
   - Network partition → exponential back‑off + eventual consistency.

5. **Optimize & Communicate**  
   - Profile tool call times; cache frequent results.  
   - Document policy decisions in a read‑me to aid future maintainers.  

By guarding against these anti‑patterns, you build robust, adaptable AI agents that scale with new tools and changing user goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
