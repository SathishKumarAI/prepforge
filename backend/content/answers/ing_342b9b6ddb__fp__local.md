---
qid: ing_342b9b6ddb__fp__local
question: 'Explain: Make Delegation Work in Python — fast.ai\u2014Making neural nets
  uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 446
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:55:36-05:00'
sources: []
---

**Why fast.ai uses delegation for model training**

Fast.ai’s `Learner` is a thin façade that delegates the heavy lifting (back‑propagation, optimizer updates, learning‑rate scheduling) to *handler* objects.  
The core problem: *we want a single API that can flexibly plug in any architecture, loss, optimiser, or metric without rewriting training loops.*  

Delegation solves this by treating each “stage” of the training pipeline as an independent strategy object:

1. **DataHandler** – transforms batches.  
2. **LossHandler** – computes gradients.  
3. **OptHandler** – applies optimisers.  
4. **CallbackHandler** – manages hooks (LR‑schedulers, early stopping).

The `Learner` simply iterates over the dataset and calls `handler.step()` for each stage. Because every handler implements a common interface (`forward`, `backward`, `step`), swapping one out is O(1) in code complexity.

**Connection to deeper principles**

This mirrors *strategy* design in algorithmic optimisation: by decoupling the *policy* (e.g., SGD vs Adam) from the *context* (the model), we achieve **modularity** and **compositionality**, akin to functional programming’s first‑class functions. It also aligns with information‑theoretic modularity—each handler passes only the necessary data, reducing coupling entropy.

**Non‑obvious insight**

The real power lies in *lazy evaluation*: callbacks are executed only when a particular event (e.g., `after_loss`) fires. This avoids unnecessary recomputation and lets users write custom behaviour that can **short‑circuit** the training loop (early stopping) without touching core logic—a feature many frameworks miss because they eagerly compute every step.

In short, delegation turns fast.ai’s training pipeline into a *plug‑and‑play* system where each component is an independently testable optimisation strategy, yielding both speed and elegance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
