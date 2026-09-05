---
qid: ing_2ca71a6e87__fp__local
question: 'Explain: APIs Are Boundaries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 390
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:21-05:00'
sources: []
---

## Why “APIs are boundaries” matters

In a distributed system the *only* way one component can influence another is by exchanging data.  
That exchange has two sides:

| side | what it offers | how it protects the other |
|------|----------------|---------------------------|
| **Provider** | a *contract* that lists inputs, outputs and guarantees (latency, idempotence, etc.) | shields internal state, hides implementation changes |
| **Consumer** | a *stable interface* to invoke the contract without knowing the provider’s internals | isolates from downstream effects of refactors |

An API is precisely this contract.  It is not a mere “function call” but a *boundary*: it enforces **information hiding**, **encapsulation**, and **decoupling**—the core principles of modular design.

### From first principles

1. **Information flow must be controlled** – otherwise any bug or change ripples through the system (cascading failures).  
2. **Boundaries create contracts** – they specify *what* can happen, not *how*.  
3. **Decoupling allows independent evolution** – each side can optimize internally while keeping the contract stable.

### Non‑obvious insight

Most designers think of an API as a set of endpoints; the deeper insight is that the *semantics* of those endpoints (the guarantees they promise) are what give the boundary its power.  
If an endpoint promises idempotence, the consumer can safely retry without side effects—this turns a simple network call into a reliable abstraction.  

In short: **APIs are boundaries because they formalize the minimal information exchange needed for two systems to cooperate while shielding each other from internal complexity and change.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
