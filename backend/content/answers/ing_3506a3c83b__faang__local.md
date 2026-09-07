---
qid: ing_3506a3c83b__faang__local
question: 'Explain: When to Use a Subagent — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 442
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:23-05:00'
sources: []
---

**Clarify**  
The question asks when a *subagent*—an autonomous sub‑module inside a larger AI agent—is preferable to simply calling an external tool or API. We assume the main agent already handles high‑level planning, state management, and policy learning, while tools are deterministic services (e.g., calculators, databases) that return data instantly.

**Approach**  
1. Identify *control granularity*: does the subproblem need its own decision loop?  
2. Evaluate *state coupling*: can the subagent maintain independent internal state or must it share tightly with the parent?  
3. Consider *latency & reliability*: tools are fast but brittle; subagents can tolerate failures and retry logic.  
4. Assess *complexity vs. reusability*: a reusable subagent (e.g., dialog manager) justifies extra overhead.

**Depth**  
- **Tools**: best for stateless, deterministic queries—low overhead, easy to update.  
- **Subagents**: used when the subtask requires its own policy, learning signal, or iterative refinement (e.g., multi‑step reasoning, continuous control). They encapsulate internal state, can backtrack, and expose a clear interface (`request`, `response`). Complexity grows with additional training data, but modularity improves maintainability.  
- **Hybrid**: combine both—subagent orchestrates calls to tools when needed.

**Edge Cases**  
- If the subproblem is *highly dynamic* (e.g., real‑time sensor fusion), a tool may be insufficient; a subagent with recurrent memory is required.  
- Over‑engineering occurs if a simple lookup becomes a full RL loop—avoid unnecessary training cycles.

**Optimize & Communicate**  
Explain trade‑offs: subagents add latency and training cost but yield robustness; tools offer speed but limited adaptability. Emphasize that the decision hinges on *control granularity* and *state independence*. This structured reasoning demonstrates clear problem framing, technical depth, and pragmatic judgment—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
