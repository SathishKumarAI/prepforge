---
qid: ing_f9256d8c90__fp__local
question: 'Explain: Mutable Infrastructure — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 388
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:49:10-05:00'
sources: []
---

**Mutable infrastructure – a hidden cost of “everything as code”**

In cloud‑native ML pipelines we usually treat the runtime (VM, container image, config files) as *mutable*: each deployment writes over the previous version, often in place or via an opaque CI/CD push.  
The fundamental problem is that a mutable state turns every training run into a *stateful* system whose history can be reconstructed only by replaying logs. Since ML models are stochastic and data‑driven, any nondeterminism (random seeds, shuffling, external services) will produce divergent outputs unless the entire environment snapshot is preserved.

Why must it work this way?  
1. **Reproducibility** is an optimization problem: we want to minimize the *distance* between a target model and every retraining run. Mutable infra maximizes that distance because it introduces hidden variables (runtime patches, OS updates).  
2. **Isolation** from probability theory: a mutable system behaves like a random variable with unknown distribution; a pure immutable image gives us a fixed distribution we can analytically bound.

The deeper principle is *immutability as information‑theoretic compression*. An immutable container is a single source of truth that compresses the entire training pipeline into a self‑contained, lossless artifact. Mutable deployments inflate entropy, making rollback and audit impossible.

**Non‑obvious insight:** Even if you version your code, mutable infra leaks *meta‑information* (e.g., which exact kernel patch was active). In ML competitions where “exact match” matters, this hidden metadata can be the difference between a winning and a losing model. Embrace immutable images to keep that entropy low and reproducibility high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
