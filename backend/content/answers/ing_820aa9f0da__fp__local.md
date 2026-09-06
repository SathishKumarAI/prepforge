---
qid: ing_820aa9f0da__fp__local
question: 'Explain: The Dependency Rule — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 309
total_tokens: 479
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:41:39-05:00'
sources: []
---

**The Dependency Rule (Clean Coder)**  
At its core the rule says: *“A module should depend only on modules that are **closer to the application’s boundary**.”*  

Why? Imagine you’re building a deep neural network. Each layer is a black‑box transformation; if a lower‑level layer suddenly pulls in an unrelated, high‑level service (e.g., a UI component), any change there forces a cascade of recompiles and tests. The Dependency Rule formalises this intuition as a *directional acyclic graph*: data flows outward from the core to the shell, never backward.  

From an **optimization** perspective it guarantees that the cost of changing a high‑level requirement is bounded: only modules along the path to the boundary need touch. In terms of **information theory**, each layer must preserve the *minimal sufficient statistic* of its inputs; leaking higher‑level concerns corrupts this representation, inflating entropy and making inference harder.  

A non‑obvious insight: the rule also protects **testability**. By ensuring lower layers don’t import high‑level abstractions, you can replace them with pure mocks that are cheap to instantiate, keeping unit tests fast and deterministic. Skipping this guard often leads to integration tests that dominate build time, eroding developer velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
