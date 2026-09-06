---
qid: ing_9864cae37e__think__local
question: 'Explain: When (and when not) to use agents — Building Effective AI Agents
  \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 485
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:10:50-05:00'
sources: []
---

**1. Clarify the goal and context first**  
   - *Assumptions*: We’re discussing Anthropic’s “Building Effective AI Agents” framework, not just any agent system.  
   - Ask: Do we need autonomy? What level of user control is required? Is the task deterministic or open‑ended?

**2. Adopt a “Scope–Capability–Trade‑off” mental model**  
   - **Scope**: Define the problem domain (e.g., single‑step response vs multi‑step planning).  
   - **Capability**: What skills does the agent need (memory, reasoning, API calls)?  
   - **Trade‑offs**: More capability → higher cost and complexity; less capability → simpler but potentially brittle.

**3. Reason step‑by‑step**  
   1. *Identify autonomy level*: If the task is static or user‑driven, a simple prompt might suffice.  
   2. *Check for recursive needs*: Does the problem require the model to generate intermediate steps? That signals an agent.  
   3. *Evaluate external interactions*: Need to call APIs, read files, or update state → agent architecture needed.  
   4. *Consider safety & interpretability*: Agents that decide on their own actions can introduce unpredictability; weigh against user trust.

**4. Common traps to avoid**  
   - **Over‑engineering**: Adding an agent layer when a single prompt would work leads to unnecessary latency and cost.  
   - **Ignoring state management**: Forgetting to persist memory across turns can make the agent appear “non‑intelligent.”  
   - **Underestimating safety checks**: Agents that self‑direct may produce unsafe outputs if not constrained.

**5. Sanity‑check & communicate clearly**  
   - *Ask*: “Could a stateless prompt solve this?” If yes, start simple.  
   - *Explain the trade‑off*: “We’ll use an agent because it needs to plan over multiple steps and interact with external tools.”  
   - *Outline fallback*: If the agent fails, revert to manual intervention or a simpler pipeline.

By following this structured approach, you can decide when an AI agent is warranted and design it effectively within Anthropic’s framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
