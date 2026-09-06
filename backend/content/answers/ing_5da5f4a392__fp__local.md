---
qid: ing_5da5f4a392__fp__local
question: Define supervised, unsupervised, and self-supervised learning. Where does
  each stage of modern LLM training fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 541
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:23:47-05:00'
sources: []
---

**From the perspective of an objective‑oriented optimizer**

At its core a learning system solves: *Given data \(x\), find parameters \(\theta\) that minimize a loss function \(\mathcal{L}(\theta;x)\).*  
The nature of the loss hinges on what we know about the desired output.

| Stage | What is known? | Loss construction | Where it appears in LLM training |
|-------|----------------|--------------------|----------------------------------|
| **Supervised** | Explicit label \(y\) per sample | \(\mathcal{L} = -\log p_\theta(y|x)\) (cross‑entropy) | Final fine‑tuning on task‑specific corpora (e.g., QA, summarisation). |
| **Unsupervised** | No labels, only raw data | Reconstruction or density loss: \(\mathcal{L} = -\log p_\theta(x)\) via autoencoders or contrastive objectives. | Pre‑training on a large monologue corpus with masked‑language modelling (MLM). |
| **Self‑supervised** | Labels are generated from the data itself | Predict a part of \(x\) from another part: \(\mathcal{L} = -\log p_\theta(x_{\text{masked}}|x_{\text{visible}})\). | The *core* of modern LLMs: masked or causal language modelling where the “label” is a future token derived from the same text. |

**Why it must work this way**

- **Optimization**: Each loss is convex in the sense that gradients can be computed; unsupervised/self‑supervised losses are *self‑contained* and avoid annotation costs.
- **Information theory**: Maximising \(\log p_\theta(x)\) (or a conditional variant) aligns with minimizing description length of the data, ensuring the model captures statistical regularities.
- **Geometry**: Self‑supervision imposes a manifold constraint—tokens lie on a low‑dimensional surface inferred from context, which regularises the parameter space.

**Non‑obvious insight**

Self‑supervised learning *implicitly* performs a form of curriculum learning: by masking tokens randomly, the model experiences an ever‑changing “task” (predicting different positions), thereby exploring diverse local optima before converging to a global representation useful for downstream tasks. This dynamic sampling is what gives LLMs their versatility without explicit task signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
