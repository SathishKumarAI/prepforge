---
qid: ing_88fdd4145a__fp__local
question: 'Explain: Teaching Claude why — Research \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 393
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:56:17-05:00'
sources: []
---

**Why we teach Claude “why” in research‑style prompts**

At its core, a language model is an *information‑theoretic* compressor: it maps input tokens \(x\) to output tokens \(y\) by learning the conditional distribution \(P(y|x)\).  When we ask Claude to explain *why*, we are not just requesting a surface paraphrase; we are asking it to infer the *causal chain* that produced a phenomenon.  

1. **Causal inference as an optimization problem**  
   The “why” question forces the model to search for latent variables \(z\) that maximize \(\log P(y|x,z)\) while also satisfying a prior over plausible causes.  In practice this is equivalent to *gradient‑based* search in embedding space, where the gradient points toward explanations that increase mutual information between \(y\) and the hypothesized cause.

2. **Information bottleneck**  
   The model must compress irrelevant details while preserving predictive power.  This yields concise, high‑level rationales that are robust to noise—exactly what research literature demands.

3. **Geometric alignment of explanations**  
   In the latent space, good explanations lie on a manifold orthogonal to trivial rephrasings.  By explicitly prompting for “why,” we steer sampling toward this manifold, improving *interpretability* and *faithfulness*.

**Non‑obvious insight:**  
The act of asking for a *research‑style* explanation actually regularizes the model’s internal representation: it penalises over‑fitting to surface patterns and encourages reliance on shared causal knowledge encoded during pretraining.  Thus, “why” prompts are not merely polite; they function as an implicit curriculum that sharpens the model’s reasoning capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
