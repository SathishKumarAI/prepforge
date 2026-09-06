---
qid: ing_a3c682cbce__fp__local
question: When would you fine-tune a model instead of using RAG or prompt engineering
  - and if you do fine-tune, LoRA or full fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 420
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:40-05:00'
sources: []
---

**When to fine‑tune versus RAG or prompting**

Fine‑tuning is the *only* way to change a model’s *parameter distribution*, not just its input representation.  
If you need **invariant behaviour** (e.g., a domain‑specific terminology, strict safety constraints, or a new style that must appear in every output), you must shift the internal weights so the model learns those patterns from scratch. RAG can inject facts, but it cannot alter the way the network *interprets* and *generates* language; prompt engineering merely nudges inference time.

**Why this matters:**  
The LLM’s loss surface is a high‑dimensional manifold where each parameter encodes a probabilistic mapping \(p(y|x)\). Adjusting weights reshapes that manifold, enabling the model to assign higher probability mass to domain‑specific outputs. RAG merely appends evidence; it does not change the underlying distribution.

**LoRA vs. full fine‑tuning**

- **LoRA (Low‑Rank Adaptation)**: Adds a low‑rank update matrix \(A B^T\) to selected layers, keeping most weights frozen. This is ideal when you have limited data or compute and want to preserve the pre‑trained knowledge while learning a small subspace of domain features.
- **Full fine‑tuning**: Reoptimizes all parameters, useful when the target distribution diverges substantially from the source (e.g., new language family or highly specialized jargon). It risks catastrophic forgetting unless carefully regularized.

**Non‑obvious insight:**  
Even with LoRA, *the rank hyperparameter controls a trade‑off between expressivity and overfitting*. Setting it too low may prevent the model from capturing subtle domain nuances; setting it high can inadvertently re‑introduce generic priors. Thus, tuning the rank itself is an optimization problem that often receives less attention than learning rates or data size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
