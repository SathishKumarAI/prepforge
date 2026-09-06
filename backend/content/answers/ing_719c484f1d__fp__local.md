---
qid: ing_719c484f1d__fp__local
question: 'Explain: Don’t Validate Design — Design System Newsletter - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 330
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:06:00-05:00'
sources: []
---

**Don’t Validate Design – The “Design System Newsletter” principle (Neo Kim)**  

At its core, the rule says *don’t waste time proving that a design system works before you actually build it*. In practice this means: start by **building** the components, tokens and documentation, then let real users test them in production.  

Why?  
1. **Design systems are a form of software**—they evolve through usage data, not static user interviews.  
2. The *cost of validation* (UX research, A/B tests) is high; if you validate first you may iterate on the wrong problem.  
3. By shipping early, you create an observable artifact that developers can experiment with, yielding real‑world feedback loops.  

This approach aligns with **information bottleneck theory**: a design system compresses UI knowledge into reusable tokens (the “bottleneck”), and only after deployment do we observe the *mutual information* between those tokens and user outcomes. Validating early would force us to guess that mutual information, which rarely matches reality.

**Non‑obvious insight:**  
A well‑designed system is *self‑validating*. Its very structure (e.g., consistent token naming, component contracts) encourages developers to surface bugs as they arise. Thus the act of using the system becomes a distributed validation mechanism—developers, not researchers, become the validators.

In short: ship fast, let usage be your test; the design system will prove itself through real‑world application rather than pre‑emptive research.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
