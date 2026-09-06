---
qid: ing_fe25a8b89c__fp__local
question: 'Explain: Summary — Tools vs. Subagents: Building Effective AI Agents Without
  Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 396
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:00:24-05:00'
sources: []
---

**Why split an agent into *tools* rather than *sub‑agents*?**

Start with the core problem: an AI must decide *what action to take* given a state and a goal, while staying computationally tractable.  
The natural abstraction is a **policy function** π(s) → a.  If we hand this policy an arbitrary sub‑agent that itself runs inference, we double‑count the cost of reasoning: every time the outer agent asks for an action it spawns another decision loop.  This leads to *over‑engineering*: nested loops, duplicated state representations, and hard‑to‑debug interactions.

Instead, treat a tool as a **deterministic or probabilistic mapping** f(x) → y that can be called like a function.  The outer policy learns when to invoke the tool (a discrete decision), but the heavy computation is isolated in the tool’s implementation.  This matches the *separation of concerns* principle from software engineering and the *divide‑and‑conquer* strategy in optimization: solve a large problem by delegating subproblems to black boxes that are pre‑optimized.

**Non‑obvious insight:**  
Because tools can be memoized or cached, repeated calls with identical inputs become constant‑time.  Sub‑agents, however, recompute every time because they re‑instantiate their own state.  Thus, using tools not only reduces runtime but also improves sample efficiency: the outer agent learns a policy that leverages pre‑computed results rather than relearning the same inference from scratch.

In short, keep the high‑level decision loop simple and delegate heavy, reusable computation to stateless tools—this is the essence of building *effective* AI agents without over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
