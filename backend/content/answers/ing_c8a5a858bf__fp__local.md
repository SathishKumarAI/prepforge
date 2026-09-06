---
qid: ing_c8a5a858bf__fp__local
question: 'Explain: In this network I chose two hidden — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 376
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:37-05:00'
sources: []
---

### What is a neural network?

At its core, a **neural network** is a *function approximator* built to solve the problem of mapping inputs \(x\) to outputs \(y\).  
The fundamental insight comes from **optimization**: we want to find parameters \(\theta\) that minimize a loss \(L(f_\theta(x), y)\).  A neural net defines \(f_\theta\) as a composition of simple, differentiable layers:

1. **Linear transformation** – weight matrix multiplies the input.
2. **Non‑linearity (activation)** – introduces curvature so we can approximate any continuous function (universal approximation theorem).
3. **Layer stacking** – depth allows hierarchical feature extraction; each layer learns a representation that is more abstract for the next.

Why must it work this way?  
- The linear part gives *affine flexibility*; without it, the network collapses to a constant.
- Activations break linearity; otherwise the composition of linear maps remains linear, incapable of capturing complex patterns.
- Stacking layers allows us to build expressive models with *parameter sharing* (each layer shares its weights across all neurons in that layer), which is essential for tractability.

**Non‑obvious insight:**  
A network’s *depth* is not just a matter of expressiveness; it also changes the geometry of the optimization landscape.  Deeper nets tend to have more “sharp” local minima but, paradoxically, they can be easier to escape from due to richer gradient paths—this explains why very deep models train effectively with modern optimizers.

In practice, we choose two hidden layers simply as a minimal architecture that balances expressive power and computational cost for many beginner tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
