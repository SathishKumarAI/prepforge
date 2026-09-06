---
qid: ing_62f132c6cb__fp__local
question: 'Explain: Traces — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 357
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:35:23-05:00'
sources: []
---

**Traces** is a *TypeScript*‑first AI framework that turns any web or Node app into a “smart agent” without rewriting the business logic.  
At its core it solves **state‑to‑action inference**: given a user request, an internal state machine, and a set of possible API calls, it must pick the next action that maximises eventual success. The framework models this as a *Markov Decision Process* (MDP) over *traces*—ordered sequences of typed events (`UserInput`, `APIResponse`, `UIUpdate`).  

Why traces?  
1. **Typed observability** – every event is a first‑class TypeScript type, giving the LLM a concrete schema to reason about.  
2. **Replayable execution** – the same trace can be re‑executed deterministically, enabling debugging and audit trails.  
3. **Modular policy learning** – the framework trains an internal policy network on logged traces, turning arbitrary code into a *policy graph* that predicts the next step from any state.

The deeper principle is **information bottleneck**: by compressing all past interactions into a minimal trace representation, Traces forces the model to discard irrelevant noise and focus on causally useful data.  
A non‑obvious insight: because traces are typed, the LLM can *prove* that a proposed action will satisfy type constraints before execution, turning runtime safety from a hope into a guarantee. This eliminates “hallucinated” API calls common in vanilla prompt‑engineering approaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
