---
qid: vq_26be7d7e40__fp__local
question: '34 Question 34: What types of foundation models exist?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 425
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:27:28-05:00'
sources: []
---

**Foundation models are the “large‑scale, multi‑purpose” building blocks that underpin modern AI systems.**  
At their core they solve a single, hard optimization problem: learn a function \(f_\theta\) from data \((x_i,y_i)\) that generalises far beyond its training set. Because this function must be reusable across many downstream tasks, the model is trained on massive, heterogeneous corpora and then *fine‑tuned* or *prompted* for specific problems.

From this principle emerge four canonical families:

| Family | Training objective | Typical modality | Representative models |
|--------|---------------------|------------------|-----------------------|
| **Autoregressive language** | Maximise \(\sum_i \log p_\theta(x_{i+1}\mid x_{\le i})\) | Text | GPT‑4, LLaMA |
| **Masked‑prediction (contrastive)** | Predict missing tokens or contrast pairs | Text/vision | BERT, CLIP |
| **Diffusion / generative diffusion** | Reverse a noise process to recover data | Vision/audio/text | DALL·E 3, Stable Diffusion |
| **Multimodal joint embedding** | Align representations across modalities | Text‑image‑audio | Flamingo, MLLM |

The distinction is not merely architectural but reflects the *information bottleneck* each family exploits: autoregressive models learn a chain rule decomposition; masked models enforce bidirectional context; diffusion models capture high‑order generative priors; joint embeddings solve a cross‑modal alignment problem.

**Non‑obvious insight:**  
Although these families differ in loss and architecture, they all converge to *invertible* or *pseudo‑inversible* transformations of the data manifold. This invertibility guarantees that fine‑tuning preserves the learned structure rather than overwriting it—a key reason why foundation models can be adapted with only a handful of task‑specific examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
