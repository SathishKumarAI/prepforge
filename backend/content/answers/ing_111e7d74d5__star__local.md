---
qid: ing_111e7d74d5__star__local
question: 'Q: When would you use a "Reasoning Loop" (ReAct) vs. a "Plan-and-Solve"
  architecture?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 326
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:56-05:00'
sources: []
---

**Situation**  
I was building an AI tutor that needed to explain math proofs step‑by‑step while also answering follow‑up questions about each step. The user could ask for clarification or request a different proof strategy.

**Task**  
Design the reasoning flow so the system can generate a coherent, correct solution and respond dynamically to user prompts without re‑computing everything from scratch.

**Action**  
I chose a **Plan‑and‑Solve** backbone: first, an LLM generated a high‑level plan (e.g., “use induction → prove base case → assume inductive step → conclude”). The planner produced a short list of sub‑tasks. Then a separate solver module executed each sub‑task in order, feeding the intermediate results back to the planner. For user clarifications, I integrated a **Reasoning Loop** (ReAct) around the solver: after each sub‑task, the system would reactively ask “do you need more detail on this step?” and either expand that step or move on. This hybrid kept planning overhead low while allowing real‑time interactivity.

**Result**  
The tutor answered 93 % of user queries within two turns, with a 27 % reduction in time to first correct answer compared to a pure ReAct approach. I learned that coupling a lightweight planner with an adaptive reasoning loop balances performance and flexibility—plan for the big picture, react for the details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
