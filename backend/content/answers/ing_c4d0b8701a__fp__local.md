---
qid: ing_c4d0b8701a__fp__local
question: You're designing an MCP server. How do you decide whether something should
  be a tool, a resource, or a prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 559
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:25-05:00'
sources: []
---

**From the fundamental problem of *interaction economy* in an AI‑driven MCP**

When users ask for help, the system must decide whether to hand them a **tool** (a reusable function), a **resource** (data or knowledge that can be reused elsewhere), or a **prompt** (an immediate instruction that drives the model).  
The decision hinges on three axes:

| Axis | What it measures | Why it matters |
|------|------------------|---------------|
| *Reusability* | Can the item be invoked multiple times, by many users? | A high value favors a tool or resource; low reusability pushes toward a prompt. |
| *Statefulness* | Does the item depend on user context beyond the current turn? | State‑dependent items become resources (to persist context) or prompts that explicitly reference state. |
| *Model burden* | How much does the model need to generate versus look up? | Heavy generation → prompt; lightweight, deterministic logic → tool; data lookup → resource. |

**Derivation**

1. **Optimization principle**: minimize expected latency + compute cost while maximizing user satisfaction.  
   - If a task is *deterministic* and cheap to implement (e.g., arithmetic), a **tool** satisfies the objective: it is cached, stateless, and reusable.  
   - If the task requires *external knowledge* that should be shared across sessions, a **resource** (e.g., a vector‑store) offloads heavy inference from the model.  
   - When the user’s intent is ambiguous or context‑dependent, the safest path is to produce a **prompt** that guides the LLM in real time.

2. **Information‑theoretic insight**: the *entropy* of the desired output dictates the choice.  
   - Low entropy (few possible answers) → tool/resource.  
   - High entropy (many creative possibilities) → prompt, because the model must generate fresh content.

3. **Geometric view**: treat each option as a point in a three‑dimensional space *(reusability, statefulness, cost)*. The optimal choice lies on the Pareto frontier that balances all three.

**Non‑obvious insight:**  
Often users *don’t* want a prompt; they desire a **resource** that can be queried by multiple tools. For example, storing a user’s preference profile as a resource lets different tools (recommendation, scheduling) consume it without re‑generating the same context each time—substantially reducing inference overhead and improving consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
