---
qid: ing_dec7efa69a__fp__local
question: 'Explain: API Design — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 449
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:53:40-05:00'
sources: []
---

### Why an ML API Must Be *Composable, Idempotent, and Self‑Documenting*

At the heart of any machine‑learning service is **statistical inference**: given input \(x\), produce output \(y = f_{\theta}(x)\). The API must expose this inference while hiding the stochastic training loop that produced \(\theta\).  

1. **Composable endpoints** – Treat each model as a *pure function*; compose them (e.g., feature extractor → classifier) without side effects. This follows functional‑programming’s referential transparency: callers can reason about results from the same inputs, essential for reproducibility in ML pipelines.

2. **Idempotency** – A request that changes state (training or model upload) must be safe to retry. In distributed training you may hit a transient failure; idempotent semantics prevent duplicate weight updates and ensure consistency across replicas—an application of *CAP* in the context of learning systems.

3. **Self‑documenting, typed contracts** – Use OpenAPI/GraphQL schemas that encode input shapes, data types, and expected output distributions. This is a direct manifestation of *information theory*: the schema is a minimal description of the statistical model’s interface, reducing ambiguity for downstream consumers.

#### Non‑obvious insight  
Most designers treat inference as “just another REST call.” The deeper principle is **semantic versioning of probability distributions**: every API upgrade should preserve the *support* and *smoothness* of \(f_{\theta}\). If a new model changes its output distribution’s support (e.g., adding a new class), all downstream services must adapt. Thus, versioned schemas become contracts on *probability mass functions*, not just JSON shapes.

By grounding API design in these principles—compositionality, idempotency, and statistical contract enforcement—you build ML systems that scale, are auditable, and remain robust to the inherent uncertainty of learning algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
