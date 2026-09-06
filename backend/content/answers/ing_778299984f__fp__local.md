---
qid: ing_778299984f__fp__local
question: 'Explain: RIBs — Uber Engineering \u2014 Where the Digital World Meets the
  Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 414
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:18:49-05:00'
sources: []
---

**RIBs (Reusable Interface Blocks) – Uber’s bridge between code and reality**

At its core, a RIB is an *interface contract* that guarantees a component can be swapped in or out without breaking the surrounding system. In Uber’s mobile stack, each screen or feature lives inside a “RIB” that declares:

1. **Inputs** – data and events it consumes  
2. **Outputs** – actions it emits (navigation, analytics)  
3. **Dependencies** – services it needs (e.g., location, payment)

Why this structure? It solves the *state‑coupling* problem: when a feature evolves, its internal state should not leak into other parts of the app. By encapsulating state inside the RIB and exposing only a deterministic interface, you get:

- **Deterministic composition** – two RIBs can be composed like a function pipeline; their combined behavior is simply the concatenation of their contracts.
- **Testability** – since dependencies are injected, unit tests can replace them with stubs that produce reproducible outputs.

Mathematically, a RIB implements a *monoid* over screen states: `state ⊕ state = new_state`, with an identity element (the empty screen). This guarantees associative composition, enabling Uber to assemble complex journeys from reusable blocks without recomputing the whole UI graph.

**Non‑obvious insight:**  
RIBs are not just for UI; they encode *domain knowledge* about physical constraints. For example, a “RideRequest” RIB knows how to handle GPS drift and throttles API calls based on network conditions—essentially turning probabilistic inference (is the user still at this location?) into deterministic outputs. Thus, RIBs turn the stochastic real world into a predictable software contract, allowing Uber’s digital platform to react fluidly to the physical one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
