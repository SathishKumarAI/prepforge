---
qid: ing_2655452af4__fp__local
question: 'Explain: Template pattern — LLD-OOPs-Design-Patterns/DesignPatterns at
  main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 331
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:26:36-05:00'
sources: []
---

The **Template** pattern is a *behavioral* recipe that solves the problem of “common steps with variation”.  
In many algorithms (e.g., data‑serialization, file parsing, game AI) we have a fixed outer flow—initialise, process, cleanup—but certain sub‑steps differ per concrete subclass. If each class re‑implements the whole flow, duplicated code bloats and maintenance suffers.

The pattern formalises this by declaring an **abstract template method** in a base class that orchestrates the invariant steps. The variable parts are delegated to *hook* or *primitive* methods that subclasses override. This enforces the *“do‑not‑override”* rule for the skeleton, preserving correctness while allowing customization.

From an optimisation viewpoint, the template guarantees **O(n)** execution of the fixed phases once, irrespective of the concrete subclass, and keeps the overall complexity bounded by the most expensive hook. Information‑theoretically, it reduces entropy: the base class conveys the protocol, so subclasses only need to supply the missing information (the hooks).

**Non‑obvious insight:** The template is *not* a form of code reuse; it’s a *protocol enforcement*. By keeping the algorithm in one place, we avoid subtle bugs where a subclass accidentally omits a critical step. It also enables **runtime polymorphism without dynamic dispatch overhead** on the invariant steps—critical for high‑frequency loops (e.g., rendering pipelines).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
