---
qid: ing_d451ddfd85__fp__local
question: 'Explain: What Adding Subagents Actually Costs — Tools vs. Subagents: Building
  Effective AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 391
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:17-05:00'
sources: []
---

Adding a *subagent* is not just “plugging in another helper”; it injects an extra decision‑making layer that must be trained, validated, and orchestrated.  
At its core the problem is **optimization under uncertainty**: each subagent learns to choose actions that maximize expected reward given its local observations. When you chain several of them, the joint policy space explodes combinatorially—every combination of subagent outputs becomes a new state for the higher‑level controller. This induces:

1. **Parameter bloat** – more weights to learn, more data needed, and higher risk of overfitting.  
2. **Credit‑assignment difficulty** – gradients must propagate through multiple learning agents; signals become noisy and delayed.  
3. **Coordination overhead** – a central orchestrator must schedule, monitor, and resolve conflicts between subagents, effectively adding another optimization problem.

In contrast, *tools* (e.g., a pre‑trained language model or a search engine) are static, well‑understood modules that provide deterministic outputs conditioned on inputs. They do not learn new behaviors during deployment; instead, the main agent learns to **invoke** them appropriately. The learning signal is clean: success or failure of the overall task, with no intermediate subagent gradients to chase.

**Non‑obvious insight:** The true cost of a subagent is proportional to the *entropy* it introduces into the system’s policy space. A tool adds negligible entropy (its behavior is fixed), whereas each subagent doubles that space, magnifying exploration noise and making convergence exponentially harder. Thus, for many real‑world problems, building a single robust agent that calls out to well‑tested tools often yields higher returns than engineering a deep hierarchy of subagents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
