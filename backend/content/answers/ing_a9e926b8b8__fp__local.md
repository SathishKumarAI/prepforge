---
qid: ing_a9e926b8b8__fp__local
question: 'Explain: Factory — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 460
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:06:26-05:00'
sources: []
---

### Why a “factory” is needed

When you build an *agent* or an *app*, you are really stitching together three orthogonal problems:

1. **State management** – where do I keep my knowledge?  
2. **Reasoning engine** – how do I decide what to say next?  
3. **Interaction layer** – how do I talk to the world (API calls, UI, etc.)?

A naïve implementation hard‑codes these concerns in every file, leading to duplicated logic and brittle pipelines. A *factory* is a higher‑order constructor that takes a declarative description of an agent’s capabilities and produces a fully wired object that satisfies all three problems at once.

### How the TypeScript AI Factory works

| Component | Role | Why it must be generic |
|-----------|------|------------------------|
| **Schema** | JSON schema for inputs/outputs | Guarantees type safety across the stack. |
| **Memory store** | In‑memory or external (Redis, DB) | Enables persistence and context sharing without changing business logic. |
| **Planner** | Prompt + LLM wrapper | Decouples reasoning from execution; you can swap models. |
| **Executor** | Action dispatcher (HTTP, CLI, database) | Keeps the planner pure; side‑effects are isolated. |

The factory composes these pieces via TypeScript’s *generic* and *mapped types*, yielding an agent that is both **type‑safe** and **plug‑in friendly**.

### One non‑obvious insight

Most people treat the LLM as a black box, but in this architecture it becomes a *stateless transformer*. By moving all mutable state into the memory store, the same prompt template can be reused across many contexts. This reduces hallucinations because the planner never “remembers” past mistakes; it only sees fresh inputs plus explicit context from the store.

In short, Mastra’s Factory turns an ad‑hoc LLM script into a **modular, testable, and composable AI system** that respects TypeScript’s compile‑time guarantees while keeping runtime flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
