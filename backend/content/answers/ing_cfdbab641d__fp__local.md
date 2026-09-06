---
qid: ing_cfdbab641d__fp__local
question: 'Explain: Output Formatting — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 373
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:16-05:00'
sources: []
---

**Why Output Formatting Matters for Tool‑Based Agents**

When an agent calls a tool, the *only* thing that can be interpreted by the next step is the textual reply.  The agent’s goal is to solve a high‑level problem; each sub‑step is a constrained optimization over a discrete set of actions.  
The optimal policy therefore depends on two facts:

1. **Information bottleneck** – the tool’s output must carry *all* relevant information about the intermediate state in a fixed‑length string.  By treating the reply as an encoding, we reduce the problem to maximizing mutual information \(I(\text{state};\text{reply})\) under a length constraint.  
2. **Deterministic parsing** – the next component must recover that state with probability one.  This is equivalent to designing a *bijective* mapping from states to replies, which in practice means using a canonical format (e.g., JSON schema).  

From an optimization viewpoint, we’re solving a constrained *rate‑distortion* problem: minimize distortion (loss of useful information) subject to a rate (output length) constraint.  The optimal solution is a *sufficient statistic* that captures exactly what the downstream component needs.

**Non‑obvious insight:**  
The format need not be human‑readable; it can be any compact, deterministic representation—e.g., a hash of the state paired with a lookup table.  This dramatically reduces parsing overhead and eliminates ambiguity, yet the agent still “understands” the content via the deterministic mapping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
