---
qid: ing_39595896aa__fp__local
question: 'Explain: Week 3: LLM Judge — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 461
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:08-05:00'
sources: []
---

### Week 3: *LLM Judge* – A Deep Dive into AI‑Eval Design

The **LLM Judge** module tackles a core problem in large‑language‑model (LLM) evaluation: *how to turn raw model outputs into reliable, comparable scores when the ground truth is uncertain or multi‑modal*. The solution hinges on three intertwined principles:

1. **Self‑Consistency as an Approximation of Calibration**  
   By prompting the same LLM multiple times with slight variations (e.g., different phrasings), we obtain a distribution over answers. The mode of this distribution reflects the model’s internal confidence and, empirically, correlates strongly with human judgment. This self‑consistency trick is essentially an online Bayesian update: each repetition refines the posterior over possible outputs.

2. **Prompt‑Tuning as a Geometry of Task Space**  
   We embed the evaluation prompt into a low‑dimensional *prompt‑space* where small perturbations correspond to different “views” of the same question (e.g., explicit scoring rubric vs. narrative critique). By sampling points on this manifold, we explore the model’s sensitivity to framing—capturing the geometry of how LLMs map language to scores.

3. **Aggregation via Information‑Theoretic Loss**  
   Final scores are not a simple average; instead we minimize a *cross‑entropy* loss between the distribution of self‑consistent answers and a target distribution derived from human benchmarks. This aligns with the principle that evaluation should be an information‑theoretic measure of how much the model’s output reduces uncertainty about correctness.

**Non‑obvious Insight:**  
The *variance* of the self‑consistent outputs is itself a predictive feature for downstream performance. Models that produce highly consistent answers tend to generalize better, suggesting that consistency acts as a proxy for internal representation quality—something most evaluation pipelines ignore.

By weaving these ideas together, the LLM Judge module transforms noisy, ambiguous model responses into principled, reproducible metrics—an essential step toward trustworthy AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
