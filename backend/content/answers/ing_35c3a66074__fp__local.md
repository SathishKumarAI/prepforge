---
qid: ing_35c3a66074__fp__local
question: 'Explain: BigLaw Bench: Hallucinations — BigLaw Bench: Hallucinations |
  Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 476
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:58:41-05:00'
sources: []
---

**Why LLMs “hallucinate” and how to curb it**

At its core, a language model is a *probabilistic density estimator* over token sequences:  
\(p(x_{1:n}) = \prod_{t=1}^n p(x_t|x_{<t})\).  
During generation the model samples from these conditional distributions. If the training data are sparse or biased, many plausible‑looking continuations receive high probability even though they contradict known facts. The *hallucination* problem arises because:

1. **Uncertainty is conflated with confidence** – the softmax output encodes *relative* likelihood, not absolute correctness.  
2. **Training objective (maximum likelihood) ignores external consistency** – it rewards any continuation that fits the corpus, not whether it aligns with real‑world knowledge.  
3. **Beam search amplifies spurious modes** – exploring multiple hypotheses can lock onto a high‑probability but factually wrong branch.

From an optimization viewpoint, we are minimizing cross‑entropy over a distribution that is *incomplete* (missing true labels). The solution is to augment the objective with a *consistency penalty*:  
\(\mathcal{L} = \text{MLE} + \lambda\, \mathbb{E}_{x}\big[ D_{\text{KL}}(p_\theta(x)\,\|\,q_{\text{truth}}(x)) \big]\),  
where \(q_{\text{truth}}\) is a knowledge‑aware distribution (e.g., from an external KB). This pushes the model toward hypotheses that are both probable under the data and aligned with verified facts.

**Non‑obvious insight:**  
Hallucinations are not merely “noise”; they expose *model confidence miscalibration*. By calibrating temperature or applying *temperature‑aware decoding* (e.g., nucleus sampling with a dynamic \(p_{\text{top}}\) that depends on external evidence), we can reduce the chance of committing to high‑probability but false tokens. Thus, controlling hallucinations is an exercise in *confidence regularization*, not just fact checking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
