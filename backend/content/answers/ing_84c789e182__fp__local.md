---
qid: ing_84c789e182__fp__local
question: Here are ~120 lines of working but messy code with passing tests. Improve
  the architecture without breaking them. What do you change first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 373
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:29-05:00'
sources: []
---

**First‑principle rule: keep the *contract* while decoupling the *implementation*.**  
Your tests guarantee that the public API works; they are your formal specification. The goal is to make the internal code easier to reason about, extend, and test in isolation.  

1. **Extract a clear layer boundary** – separate “domain” (business logic) from “infrastructure” (I/O, third‑party services).  
   *Why?* In the information‑theoretic sense you’re reducing entropy: each module has a single responsibility, so its state changes are predictable and measurable.  

2. **Introduce interfaces (protocols)** for every dependency that interacts with external systems or global state.  
   *Non‑obvious insight:* a protocol is not just a compile‑time contract; it also gives you a concrete place to inject mocks that capture *behaviour* rather than data, allowing you to test the domain logic without side effects.  

3. **Refactor the “messy” file into small, pure functions** or classes that are trivially unit‑testable.  
   *Why?* Purity gives you a deterministic mapping from inputs to outputs; you can now use formal verification (e.g., quickcheck) to guarantee properties like idempotence or composability.  

4. **Run the test suite, then add type hints and incremental refactorings**.  
   The tests act as a safety net while your architecture moves toward an *information‑flow* design: data enters one boundary, flows through pure logic, and exits through another. This preserves behaviour but dramatically improves maintainability and extensibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
