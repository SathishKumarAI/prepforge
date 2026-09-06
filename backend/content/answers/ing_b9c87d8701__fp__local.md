---
qid: ing_b9c87d8701__fp__local
question: 'Explain: Context engineering for long-horizon tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 409
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:38:55-05:00'
sources: []
---

**Context Engineering for Long‑Horizon Tasks**

The core problem is that a language model (LM) only “sees” a fixed token window—its *context*. For a task that unfolds over many steps (e.g., multi‑stage planning, dialogue, or code generation), the true state of the world changes repeatedly. If we simply feed the LM with the latest prompt, it forgets earlier constraints and goals; its predictions drift.

From an **information‑theoretic** view, each token carries a limited mutual information \(I(X;Y)\) about future states. To preserve long‑range dependencies, we must *re‑encode* past information into a compact representation that the LM can condition on at every step. This is analogous to a *memory kernel* in dynamical systems: it compresses history while preserving predictive power.

**Why the engineered context must be explicit**  
The LM’s internal attention has an exponential decay; without explicit cues, relevant facts fade. By embedding “state summaries” (e.g., a short vector of key variables) into every prompt, we force the model to treat them as constants over time, effectively turning a stochastic process into a deterministic one conditioned on the summary.

**Non‑obvious insight**  
Most people assume that simply appending previous outputs suffices. In reality, *interleaving* state summaries with new observations is crucial: the LM must see both the updated world and the invariant goals together. This mirrors **control theory’s separation principle**, where estimation (state summary) and control (action generation) are decoupled but jointly optimized.

Thus, context engineering for long horizons is a principled method of *continuous state conditioning*, ensuring that an LM can act coherently across arbitrarily many steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
