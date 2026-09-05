---
qid: ing_204e4be9c9__fp__local
question: 'Explain: Run judgy correction — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 673
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:34-05:00'
sources: []
---

**Why “judgy correction” matters**

When an LLM produces a free‑form answer, the *only* thing that guarantees its usefulness is that the model’s internal representation of the task matches what we actually care about. That is a **mapping problem**:  
\(f_{\text{model}} : \text{prompt} \rightarrow \text{response}\).  
If the evaluator’s scoring function \(g\) is mis‑aligned, the gradient signal that would normally push the model toward better behaviour vanishes or even reverses. “Judgy correction” closes this gap by **re‑labeling** raw outputs with a *human‑like* rubric before they reach the loss function.

---

### From first principles

1. **Goal** – Maximize expected reward \(E[g(y)]\) over model outputs \(y\).  
2. **Challenge** – Human ratings are sparse and noisy; the model can’t learn directly from them.  
3. **Solution** – Train a *judgment network* \(h_\theta\) that predicts \(g(y)\) given only \(y\) (and optionally the prompt).  
4. **Correction step** – Replace the raw reward with \(\hat{g}(y)=h_\theta(y)\) during policy updates.

This is just supervised learning on a *derived* label set, but the key insight is that we are learning a **policy over policies**: the judgment network learns to imitate how humans would score, and the main model learns to optimize against that imitation. The two networks co‑evolve until \(h_\theta\) converges to a stable approximation of human preference.

---

### Toolchain integration

| Component | Role |
|-----------|------|
| **Langwatch** | Monitors evaluation runs in real time, collecting raw outputs and their associated judgment scores. |
| **Langfuse**  | Stores traces, metrics, and the trained \(h_\theta\) model; provides APIs to inject corrected rewards back into training pipelines. |

The pipeline is: prompt → LLM → Langwatch capture → Langfuse scoring → \(h_\theta(y)\) correction → loss update.

---

### Non‑obvious insight

Most practitioners treat judgment networks as a *post‑hoc* labeler, but they can be **jointly fine‑tuned** with the main model. By sharing embeddings (e.g., via a shared transformer backbone), the two models implicitly regularize each other: the judgment network learns to focus on semantic differences that actually matter for reward, while the LLM adapts to produce outputs that are *more easily* judged correct. This mutual bootstrapping dramatically reduces sample complexity compared to training them independently.

In short, judgy correction is not just a safety layer; it’s an optimization principle that turns noisy human feedback into a clean gradient signal by learning a surrogate reward function that respects the same geometry as the task itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
