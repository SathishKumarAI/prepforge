---
qid: ing_7c31f3a537__fp__local
question: 'Explain: Thinking Machines Inkling - July 2026 NEW'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 343
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:46-05:00'
sources: []
---

**Thinking Machines Inkling – July 2026**

At its core, the Inkling project tackles *structured uncertainty*: how can a machine infer high‑dimensional latent causes from noisy observations when the causal graph itself is only partially known? The solution hinges on **probabilistic program induction**—a meta‑learning framework that treats each hypothesis about the world as a probabilistic program and evaluates it by amortized inference.  

Why this works:  
1. **Bayesian compositionality** lets the system recursively compose primitive causal modules (e.g., “motion”, “lighting”) into richer explanations, automatically trading off complexity against fit via an evidence‑lower bound.  
2. **Variational message passing** over a *graph of programs* ensures that updates propagate efficiently even when the graph is dynamic—capturing the fact that real agents constantly revise their own causal models.  
3. The approach embeds **information geometry**: the posterior over program structures lives on a statistical manifold whose curvature informs exploration strategies, preventing the myopic over‑fitting common in deep nets.

A non‑obvious insight: *program length is not merely a regularizer but an explicit resource constraint.* By penalizing the Kolmogorov complexity of inferred programs, Inkling aligns learning with the principle that the simplest explanation—Occam’s razor—is statistically optimal under model misspecification. This yields models that generalize to unseen scenarios without exhaustive retraining, embodying a truly “thinking” machine rather than a black‑box predictor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
