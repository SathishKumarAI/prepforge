---
qid: ing_098eae072b__fp__local
question: Design the tool schema for a coding agent. How many tools, and how do you
  handle tool errors?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 489
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:26:01-05:00'
sources: []
---

**Design principle:**  
A coding agent must *translate* a user’s intent into executable code while managing uncertainty in the target environment. Treat each tool as an **optimization primitive** that reduces entropy over the space of possible programs.

1. **Tool count – “k‑cover” rule**  
   *Let \(N\) be the number of distinct language‑model interaction patterns (e.g., write, refactor, test, deploy). Empirically, a 3–5 tool set suffices to cover the Pareto frontier between expressiveness and computational cost.*  
   - **Write** – generate code from scratch.  
   - **Refactor** – modify existing snippets.  
   - **Test** – run unit/integration tests.  
   - **Deploy** – push to a runtime environment (optional).  

   Adding more tools dilutes the planner’s confidence and inflates the search tree; fewer tools risk missing crucial steps.

2. **Error handling as a Bayesian update**  
   Each tool returns a *confidence score* \(c \in [0,1]\) and an *error context* vector \(e\).  
   - If \(c < \tau\) (threshold), the planner updates its belief about the current state:  
     \[
     P(\text{state}) \propto P(\text{state}) \times e
     \]
   - The planner then selects a *fallback tool* from an ordered list (e.g., retry → Refactor → Write).  
   - Persistent failure triggers escalation to a higher‑level human review.

3. **Non‑obvious insight** – *semantic versioning of tools*.  
   Treat each tool as a function \(T_{v}(x)\) where \(v\) encodes its capability and bug‑fix history. The planner prefers the newest compatible \(v\); if an older \(v\) yields higher confidence, it signals that newer features introduce brittleness—an early warning about overfitting to recent data.

This schema balances coverage, efficiency, and robustness while grounding error handling in probabilistic reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
