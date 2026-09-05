---
qid: ing_2bb5a591eb__fp__local
question: 'Explain: Pattern 2 – Orchestrator agent (sub-agents as tools)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 392
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:26-05:00'
sources: []
---

**Pattern 2 – Orchestrator Agent (sub‑agents as tools)**  

When a goal is too large for a single model, the *fundamental problem* becomes “how do we combine many specialized behaviors without reinventing the wheel?”  
The solution is to treat each sub‑agent as a **black‑box tool**: it exposes a simple API (e.g., `input → output`) and can be invoked on demand. The orchestrator learns a *policy over tools*, deciding which sub‑agent to call, in what order, and how to stitch their outputs together.  

This is essentially hierarchical reinforcement learning with the hierarchy inverted: the high‑level controller chooses primitives rather than actions. From an optimization standpoint, the orchestrator minimizes total cost (time, computation, error) subject to task constraints. Information‑theoretically, it compresses a complex policy into a composition of reusable modules, reducing sample complexity because each sub‑agent is trained once and then reused.

**Non‑obvious insight:**  
Because tools are *context‑agnostic*, the orchestrator can *re‑use* them across completely different tasks. This modularity induces **transfer learning at the policy level**: a tool that solves “summarize text” can be plugged into an orchestrator for “write a marketing email”, dramatically reducing training data needed for the new composite task.

In short, the orchestrator pattern turns a monolithic AI problem into a *composable system* of reusable agents, mirroring how humans combine specialized skills to tackle complex projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
