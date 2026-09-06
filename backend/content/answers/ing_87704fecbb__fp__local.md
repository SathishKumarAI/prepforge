---
qid: ing_87704fecbb__fp__local
question: 'Explain: The eval taxonomy — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 564
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:52:29-05:00'
sources: []
---

**Why an evaluation taxonomy is essential**

In any AI system the *fundamental problem* is that we have a black‑box function \(f\) mapping inputs \(\mathcal{X}\) to outputs \(\mathcal{Y}\). We wish to know two things:

1. **How well does it perform?**  
2. **What aspects of its internal state drive that performance?**

Without a principled framework, we risk conflating *accuracy* with *reliability*, or mistaking an artifact of the data for genuine capability.

---

### 1. Evaluation (Performance)

This axis is rooted in **optimization theory**: we seek to minimize a loss \(L(f(x),y)\) over a distribution \(p(\mathcal{X},\mathcal{Y})\). The taxonomy splits evaluation into:

- **Intrinsic vs. Extrinsic** – does the metric reflect the task itself or an auxiliary proxy?  
- **Quantitative vs. Qualitative** – numerical scores (accuracy, F1) versus human judgments.  
- **Static vs. Dynamic** – single‑shot tests versus continual learning benchmarks.

Each dimension addresses a different *bias–variance* trade‑off: too narrow a metric overfits to a particular dataset; too broad dilutes interpretability.

### 2. Observability (Explainability)

Observability is grounded in **information geometry**. We model the latent representation \(z = g(x)\) and examine how changes in \(z\) influence \(f(z)\). The taxonomy distinguishes:

- **Local vs. Global explanations** – perturbation of a single instance versus global feature importance.  
- **Feature‑level vs. Decision‑level** – which inputs matter, and why a particular decision was made.  
- **Faithfulness vs. Simplicity** – an explanation must be both accurate to the model and comprehensible.

A non‑obvious insight: *Observability can itself be evaluated*. By treating explanations as outputs of a secondary model \(h\), we apply the same intrinsic/extrinsic split, ensuring that interpretability is not merely a post‑hoc add‑on but an objective optimized alongside performance.

---

**Connecting both axes**

The taxonomy forces us to treat **performance** and **explainability** as coupled objectives in a multi‑objective optimization problem. A model with high accuracy but no observability may be acceptable only for low‑stakes tasks; for safety‑critical domains, the trade‑off is inverted. Thus, an AI system’s credibility hinges on *simultaneously* satisfying both dimensions of the taxonomy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
