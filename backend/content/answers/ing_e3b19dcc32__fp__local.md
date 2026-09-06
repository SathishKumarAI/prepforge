---
qid: ing_e3b19dcc32__fp__local
question: 'Explain: Functions, Tools and Agents with LangChain - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 367
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:03:43-05:00'
sources: []
---

### Why LangChain Needs *Functions*, *Tools*, and *Agents*

At its core, a language‑model‑driven system is an **optimization problem**: it must transform user intent into the best possible answer given limited compute and noisy knowledge.  
* Functions are deterministic “action blocks” that reduce this search space—think of them as pre‑compiled sub‑problems (e.g., math solvers, data fetchers). They expose a formal interface (inputs → outputs) so the model can reason about feasibility before calling them.  
* Tools are higher‑level abstractions built on top of functions or external APIs; they encapsulate domain logic and safety constraints. By treating each tool as an atomic operation with clear pre/post conditions, LangChain turns arbitrary text into a **plan graph** where nodes are tool calls and edges represent logical dependencies.  
* Agents sit atop this graph and decide *which* tool to invoke next. They learn or rule‑based policies that balance exploration (trying new tools) against exploitation (relying on known good ones), akin to reinforcement learning in continuous action spaces but with discrete, observable actions.

**Non‑obvious insight:**  
The true power emerges when agents treat the *function signature* as a **probabilistic hypothesis test**. If the model predicts that calling a function will reduce uncertainty by more than its cost (in tokens or latency), it will choose that path. This Bayesian view turns tool selection into an explicit trade‑off between *information gain* and *resource expenditure*, something most developers overlook when simply “calling APIs” without considering the downstream impact on inference budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
