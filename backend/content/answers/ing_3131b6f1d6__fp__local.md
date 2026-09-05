---
qid: ing_3131b6f1d6__fp__local
question: 'Explain: What Subagents Are — Tools vs. Subagents: Building Effective AI
  Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 476
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:49:24-05:00'
sources: []
---

**Subagents vs. Tools – a principled view**

The *fundamental* challenge in building an AI agent is **sequential decision‑making under uncertainty**: at each step the agent must decide what action to take so that cumulative expected reward is maximised. When the task is complex, we decompose it into subtasks.  
A **tool** is a black‑box function \(f_\theta\) trained once (e.g., a language model or image recogniser). It accepts an input and returns an output; the agent treats it as a *fixed* component whose behaviour is opaque to the higher‑level planner.

A **subagent**, by contrast, is itself a *policy* \(\pi_{\phi}\) that maps its own observations (which may include the main agent’s state, intermediate goals, or world dynamics) into actions. It can be trained end‑to‑end with the master policy and adapts its behaviour during interaction. Thus subagents are **differentiable modules** in the overall optimisation problem, not just lookup tables.

Why must we use subagents?  
1. **Differentiability & credit assignment**: The loss on the final objective back‑propagates through all subagents, allowing each to learn precisely what is needed for global success.  
2. **Dynamic adaptation**: Subagents can react to stochasticity or changing goals, whereas static tools cannot be fine‑tuned online without retraining.  
3. **Compositional generalisation**: Policies that are themselves optimised tend to compose more robustly; a tool’s fixed mapping often overfits to the training distribution.

A non‑obvious insight is that *subagents act as implicit regularisers*: because each learns under its own reward signal (often derived from the main objective), they naturally discover hierarchical abstractions—e.g., a “navigation” subagent learns to produce waypoints that are useful for any downstream task. This emergent structure would be lost if we merely chained static tools.  

In short, subagents provide the *optimisation‑friendly* scaffolding needed to build complex AI agents without over‑engineering monolithic models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
