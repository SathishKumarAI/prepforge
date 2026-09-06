---
qid: ing_576dad563d__fp__local
question: How would you use synthetic data to build or extend an eval set, and what
  are the failure modes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 665
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:10:23-05:00'
sources: []
---

### From first principles

An evaluation set is a *distribution* that we hope mirrors the true test distribution \(P_{\text{true}}\).  
If our model’s performance on the held‑out data differs from its real‑world accuracy, the gap is
\[
\Delta = \mathbb{E}_{x\sim P_{\text{test}}}[\ell(f(x),y)]-\mathbb{E}_{x\sim P_{\text{true}}}[\ell(f(x),y)] .
\]
Synthetic data are generated from a *model distribution* \(P_{\text{syn}}\).  
We therefore aim to minimize \(\Delta\) by making \(P_{\text{syn}}\) as close as possible to the true test distribution.

#### Why synthetic data help

1. **Coverage** – We can inject rare or edge‑case scenarios (e.g., low‑light images, uncommon intents) that are underrepresented in real logs.
2. **Control** – By varying parameters (noise level, style, domain shift), we systematically probe robustness and identify failure modes that would be invisible otherwise.
3. **Scale** – Generating millions of labeled samples is cheaper than manual annotation, enabling fine‑tuned statistical tests (e.g., measuring calibration over sub‑populations).

#### Building the eval set

| Step | Rationale |
|------|-----------|
| 1. Fit a generative model \(G\) to the training data and to any auxiliary domain (e.g., user‑generated content). | Captures the underlying manifold; ensures realism. |
| 2. Sample from \(G\) while conditioning on *attributes* of interest (rare classes, high‑variance features). | Guarantees targeted coverage. |
| 3. Add controlled perturbations: noise, occlusion, style transfer. | Simulates domain shift and tests invariance. |
| 4. Validate realism via human inspection or a discriminator \(D\) trained to distinguish real vs synthetic. | Prevents degenerate generations that mislead the model. |

#### Failure modes

1. **Mode collapse** – The generator over‑replicates common patterns, leaving out critical rare cases.
2. **Distribution mismatch** – Synthetic data may differ in higher‑order statistics (e.g., texture) even if low‑level features match, leading to misleading robustness signals.
3. **Label noise** – Imperfect conditioning can mislabel samples; the model learns spurious correlations.
4. **Over‑optimism** – Models trained on synthetic data may overfit to artifacts of \(G\), inflating performance metrics that do not translate to real deployment.

#### Non‑obvious insight

*The most subtle pitfall is **semantic drift**:* when a generative model learns the *surface* distribution (pixel statistics) but fails to preserve underlying semantics. A synthetic image may look plausible, yet its label corresponds to an implausible concept (e.g., a “dog” with a human face). Models will then appear robust to visual noise while being blind to semantic errors. Detecting this requires auxiliary classifiers or latent‑space consistency checks—an often overlooked but critical safeguard.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
