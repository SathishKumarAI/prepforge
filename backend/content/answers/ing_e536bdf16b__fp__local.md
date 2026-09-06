---
qid: ing_e536bdf16b__fp__local
question: 'Explain: Pattern Selection Guide — Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 425
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:01-05:00'
sources: []
---

**Pattern Selection Guide – Why and How**

When a problem is *solved by a recurring, reusable fragment* of code, we call that fragment a **pattern**.  
The core question is: *Which pattern best captures the constraints and objectives of this particular instance?*  

1. **Identify the constraint set**  
   - Is it about *state management*, *asynchronous flow*, *data consistency*, or *resource sharing*?  
   - Formalize each constraint as a predicate (e.g., `isSingleton = true`, `needsEventBus = false`).  

2. **Map constraints to pattern axioms**  
   Each pattern embodies a minimal set of axioms (theorems). For instance, the *Observer* axiom is “when a subject changes, all dependents must be notified in O(1) time”.  
   - Construct a boolean vector for your problem and compare it against the vectors of candidate patterns.  

3. **Optimization over the pattern space**  
   Treat the selection as a small combinatorial optimization: minimize *cost* (runtime, memory, complexity) subject to satisfying all axioms.  
   - This is analogous to solving a linear program where each pattern contributes a set of constraints.

4. **Non‑obvious insight**  
   Many developers treat patterns as “pick one and stick”. In reality, *hybridization* often yields the best solution: combine the *Singleton*’s global access with the *Factory*’s lazy instantiation to avoid premature allocation while still ensuring a single instance.

5. **Validate via invariants**  
   After selection, prove that all problem constraints remain invariant under the pattern’s operations; otherwise you’ve made a wrong choice.

By formalizing constraints and treating patterns as axiom sets, the guide turns intuition into a lightweight decision procedure—essential for scalable AI system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
