---
qid: ing_8e2d248e1b__fp__local
question: 'Explain: Um, another refinement you can make in — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 349
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:07:26-05:00'
sources: []
---

### Refinement: **Decoupled Service Contracts (Explicit APIs)**

**Problem:**  
When a team modifies an internal library, downstream services may break silently, causing cascading failures that surface only during load spikes or at night.

**Why it must work this way:**  
A *contract* is the minimal set of observable behaviours a service guarantees. By treating every shared component as a black box with a strict interface (input types → output types + invariants), we transform an unbounded “shared code” into a bounded dependency graph. This is a direct application of **interface abstraction** from software engineering and **type theory**: the contract is a formal specification that any implementation must satisfy, independent of its internal state.

**Deeper principle:**  
The refinement enforces *information hiding*—the only information crossing module boundaries is what the contract exposes. In terms of probability, this reduces the uncertainty (entropy) about downstream behaviour; the system’s observable distribution becomes predictable and testable.

**Non‑obvious insight:**  
When contracts are versioned and evolution is governed by *semantic versioning*, teams can safely add new fields to a response without breaking older clients. The subtlety lies in treating “additive” changes as safe because they preserve backward compatibility, whereas any change that modifies or removes existing fields introduces a *type mismatch* detectable at compile time. This guarantees that even large‑scale refactors (e.g., moving from monolith to microservices) incur only controlled churn, not silent regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
