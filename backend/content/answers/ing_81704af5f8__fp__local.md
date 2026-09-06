---
qid: ing_81704af5f8__fp__local
question: 'Explain: Instead of exposing 130 tools as function definitions, you expose
  them as a code API the agent writes scripts against. Walk me through the tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 440
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:40:29-05:00'
sources: []
---

**Why not just hand‑write 130 function signatures?**  
When an LLM is given a *function definition* it can treat each call as a discrete “action” and plan around the exact input schema. This turns the problem into a deterministic decision tree: *pick tool → supply arguments → get result*. The planner’s search space shrinks dramatically, and type‑checked responses guarantee correct payloads.  

**But what if the tools are heterogeneous or evolve?**  
A *code API* forces the LLM to generate scripts that invoke arbitrary functions, libraries, or shell commands. Here the agent must reason about syntax, control flow, and side effects—an optimization problem over program space rather than action space. The planner’s search becomes larger but gains flexibility: a single script can orchestrate several tools, loop until a condition is met, or recover from errors without re‑invoking the LLM.

**Tradeoffs**

| Aspect | Function API | Code API |
|--------|--------------|----------|
| **Expressiveness** | Limited to pre‑declared signatures | Unlimited; can compose, loop, branch |
| **Search complexity** | Low (discrete actions) | High (program synthesis) |
| **Robustness to change** | Requires re‑definition per tool update | Native adaptation if the API surface changes |
| **Debuggability** | Easy: single call trace | Harder: need to parse script execution logs |
| **Safety & sandboxing** | Tight control over inputs/outputs | Risk of arbitrary code; needs stricter isolation |

A non‑obvious insight: *the “code API” essentially turns the agent into a tiny compiler.* The LLM’s prompt becomes a high‑level specification, and the generated script is its compilation output. Optimizing that compilation (e.g., minimizing runtime calls or batching) can yield performance gains comparable to hand‑tuning function calls—something most designers overlook when choosing between the two paradigms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
