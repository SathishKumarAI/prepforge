---
qid: ing_a7d91f702f__fp__local
question: 'Explain: Evals — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 389
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:22-05:00'
sources: []
---

**Evals – a TypeScript‑first approach to building autonomous agents**

The core problem any *agent* faces is **decision‑making under uncertainty**: it must perceive the world, reason about goals, and select actions that maximize expected utility. Traditional AI stacks (Python + PyTorch) treat inference as a black box; they lack a lightweight, type‑safe way to express the *policy* (what the agent does) and the *environment* (how it reacts).  

Evals fills this gap by treating an entire agent pipeline as a **typed function composition**.  
1. **Policy → Action**: A TypeScript `eval` is simply a function `state → action`. Because the state and action types are explicit, the compiler guarantees that every policy can only produce valid actions for its environment.  
2. **Environment → State**: The environment is another typed function that updates the world based on an action. By composing these two functions we obtain a *closed‑loop* system that is mathematically equivalent to a Markov Decision Process (MDP) but expressed in code.  

The deeper principle is *information flow*: every `eval` is a **channel** that carries information from perception to actuation while preserving type safety. This makes debugging, reasoning about side effects, and formal verification tractable—something Python’s dynamic nature obscures.

**Non‑obvious insight:** Because TypeScript’s structural typing allows *polymorphic* evals (e.g., `eval<T extends State>(state: T): Action`), you can write a single policy that works across multiple heterogeneous environments without code duplication. This mirrors the concept of *universality* in reinforcement learning but is enforced at compile time, eliminating runtime errors and enabling rapid prototyping of complex agent ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
