---
qid: ing_24852000e3__fp__local
question: 'Explain: Dynamic Discovery (Tool Search) — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 342
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:23:21-05:00'
sources: []
---

**Dynamic Discovery (Tool Search) – Building Tool Agents**

When an LLM is asked to solve a complex task, the *fundamental problem* is that its internal knowledge is static and limited in size. The *solution* is to treat external software as first‑class “tools” whose capabilities can be queried at run time.  
1. **Why it must work this way** – An agent needs *expressive power* beyond a fixed prompt: the world changes, APIs evolve, data sources appear. By dynamically discovering available tools (via registry lookups or introspection), the agent adapts without retraining.  
2. **Underlying principle** – This is an instance of *meta‑optimization*: the policy π learns not only actions in the environment but also a *policy over policies*—which tool to invoke next. The search space is combinatorial, yet tractable because each tool encapsulates a sub‑objective that can be verified locally (e.g., API return schema).  
3. **Deep insight** – Most overlook that dynamic discovery turns the agent into an *information aggregator*: every tool invocation yields a small, verifiable information chunk; composing these chunks is essentially Bayesian inference over the task state. Thus, the agent’s success hinges on the *granularity* of tools—too coarse and it can’t reason finely; too fine and exploration explodes. Balancing this granularity is what makes dynamic discovery powerful yet efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
