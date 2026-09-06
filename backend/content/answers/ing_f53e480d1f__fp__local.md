---
qid: ing_f53e480d1f__fp__local
question: 'Explain: 138: Break into AI Engineering — AI Concepts - by Neo Kim and
  Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 415
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:40:48-05:00'
sources: []
---

**Why the book must be split into “AI Engineering” and “AI Concepts”**

At its core, *building* an AI system is a constrained optimization problem: we want to maximize predictive performance while respecting computational budgets, data availability, and deployment constraints. The two chapters mirror the two sides of this trade‑off.

1. **AI Engineering** tackles the *constraint side*.  
   - It formalises how to translate a theoretical model into a production pipeline: data ingestion, feature engineering, distributed training, hyper‑parameter search, versioning, monitoring, and continuous delivery.  
   - Each step is framed as an algorithmic sub‑problem (e.g., *data‑centric* versus *model‑centric* optimisation), showing why naïve “train‑and‑deploy” fails: the curse of dimensionality in feature space, data drift, or model over‑fitting manifest only when you actually ship code.  
   - The engineering lens reveals a non‑obvious insight: **metadata is often the bottleneck**. Even if your model is mathematically optimal, without a robust metadata pipeline (schema versioning, lineage tracking) the system collapses under reproducibility attacks.

2. **AI Concepts** addresses the *objective side*.  
   - It starts from first principles—probability theory, information geometry, and statistical learning theory—to derive why neural nets learn representations, how Bayesian inference quantifies uncertainty, and why reinforcement signals shape policy gradients.  
   - The chapter then shows how these abstractions collapse into concrete algorithms (e.g., back‑propagation as gradient descent on a manifold of probability distributions).

By separating the *why* (concepts) from the *how* (engineering), Neo Kim and Thorneloe ensure readers grasp both the theoretical guarantees that make AI possible **and** the practical constraints that turn theory into scalable, trustworthy systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
