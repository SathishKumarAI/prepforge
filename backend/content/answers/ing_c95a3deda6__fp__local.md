---
qid: ing_c95a3deda6__fp__local
question: What are Agent Skills, and when do you package knowledge as a skill rather
  than a tool, an MCP server, or retrieval?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 485
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:56-05:00'
sources: []
---

**Agent Skills – the distilled “what‑to‑do” modules**

At its core an agent is a decision maker that maps *states* (the world it perceives) to *actions*.  
A **skill** is the minimal, reusable sub‑policy that accomplishes a specific sub‑task—e.g., “translate a sentence into French”, “navigate from A to B in a maze”.  

Why must we isolate skills instead of treating them as monolithic tools or raw data?

1. **Modular optimization** – The agent can learn a high‑level policy over *skill activations* (a small action space) while each skill is pre‑trained or fine‑tuned separately. This separates the *control* problem from the *execution* problem, reducing sample complexity.
2. **Probabilistic compositionality** – If skills are probabilistically conditioned on context (e.g., success probability, cost), the agent can reason about sequences using Bayes’ rule, enabling principled risk‑aware planning.
3. **Transferability** – Skills capture *invariant structure* across environments; a navigation skill learned in one maze generalizes to any maze with similar geometry. Tools or raw retrieval cannot exploit such invariance.

**When to package as a skill**

| Condition | Reason |
|-----------|--------|
| The operation has a well‑defined success criterion and can be repeated across tasks | It becomes reusable, reducing the learning burden on higher layers. |
| There is an internal state (memory) that needs to persist beyond a single call | A skill encapsulates its own recurrent dynamics. |
| The cost or latency of invoking it is non‑trivial compared to simple function calls | Abstracting it as a discrete action keeps the policy space small. |

**Non‑obvious insight:**  
A *skill* is not merely an executable snippet; it is a **probabilistic latent variable model** that maps high‑level intentions to low‑level trajectories. Treating it as such allows agents to perform *latent planning*: they can plan over sequences of skills by reasoning about the distribution of outcomes, rather than enumerating every low‑level action—a dramatic reduction in combinatorial explosion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
