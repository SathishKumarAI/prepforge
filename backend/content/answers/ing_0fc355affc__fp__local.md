---
qid: ing_0fc355affc__fp__local
question: 'Explain: Walk me through the taxonomy of evaluation methods for LLM systems
  and when you''d use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 535
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:39:09-05:00'
sources: []
---

## Why we evaluate large‑language models (LLMs)

An LLM is a stochastic function \(f_\theta: \mathcal{X}\rightarrow\mathcal{Y}\) that must generalise from a training corpus to unseen prompts.  
The *evaluation* problem is therefore one of **measuring the discrepancy** between
\(f_\theta(x)\) and an ideal target distribution \(p^*(y|x)\).  
Because we cannot access \(p^*\) directly, we approximate it with proxies that trade off
precision, scalability, interpretability, and cost.  

## Taxonomy of evaluation methods

| Category | Typical metrics | When to use | Underlying principle |
|----------|-----------------|-------------|----------------------|
| **Intrinsic (task‑agnostic)** | Perplexity, cross‑entropy, KL divergence | Quick sanity checks; early‑stage model selection | Measures likelihood under the training distribution – a proxy for language modeling quality. |
| **Extrinsic (downstream tasks)** | Accuracy, F1, BLEU, ROUGE, METEOR, task‑specific scores | When the LLM will be fine‑tuned or used as a component in an application | Aligns evaluation with real‑world utility; captures compositional reasoning and domain transfer. |
| **Human‑centric** | Human judgment (Likert scales), Turing‑style tests, user studies | Final product release, safety & fairness audits | Directly measures perceived quality, coherence, and alignment with human values. |
| **Adversarial / Robustness** | Failure rate on crafted prompts, distribution shift metrics | Security‑critical or open‑domain deployments | Quantifies resilience to out‑of‑distribution inputs; reveals brittleness not seen by standard benchmarks. |
| **Calibration & Uncertainty** | Expected calibration error (ECE), Brier score, entropy analysis | Probabilistic decision systems | Ensures confidence estimates reflect true accuracy—essential for risk‑aware applications. |

## Non‑obvious insight

Many practitioners equate *perplexity* with overall model quality, yet a low‑perplexity LLM can still produce incoherent or biased outputs on downstream tasks because perplexity only rewards fitting the training corpus, not aligning with human expectations or task constraints. Thus, **calibration and robustness metrics should always accompany intrinsic scores** to guard against deceptively good perplexities that mask practical failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
