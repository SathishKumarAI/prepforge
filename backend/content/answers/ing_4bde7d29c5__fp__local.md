---
qid: ing_4bde7d29c5__fp__local
question: 'Explain: LoRA, QLoRA, and PEFT — Lora Qlora Peft'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 605
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:34-05:00'
sources: []
---

### From First Principles

At the heart of every large‑parameter language model is a **fixed linear map**  
\(W \in \mathbb{R}^{d\times d}\) that transforms hidden states.  
Fine‑tuning normally replaces \(W\) with a new matrix, but that requires
storing an extra \(O(d^2)\) parameters—impractical for billions of weights.

#### Low‑Rank Adaptation (LoRA)

Instead of learning a full update \(\Delta W\), LoRA constrains it to be
rank‑\(r\ll d\):
\[
W_{\text{new}} = W + A B^\top,\qquad A,B\in\mathbb{R}^{d\times r}.
\]
Why this works: the space of useful weight changes in a pre‑trained model is highly **low‑dimensional** (the model already captures most variance).  
The rank‑\(r\) factorization reduces storage to \(O(2dr)\) and preserves the
original weights, enabling *parameter‑efficient fine‑tuning*.

#### Quantized LoRA (QLoRA)

Fine‑tuned LoRA adapters are still large enough for many devices.  
QLoRA applies **post‑training quantisation** (e.g., 4‑bit) to \(A\) and \(B\),
leveraging the fact that rank‑\(r\) matrices are far more robust to
quantisation noise than full‑size weight updates.  
This yields a model whose *effective capacity* is unchanged while its memory
footprint shrinks dramatically.

#### Parameter‑Efficient Fine‑Tuning (PEFT)

LoRA and QLoRA are concrete instantiations of the broader **PEFT** paradigm:
freeze the backbone, learn only a tiny auxiliary parameter set that injects
task‑specific signal.  
Mathematically, PEFT solves an optimisation problem where the loss is
minimised over \(A,B\) (or other low‑dimensional masks), keeping the large
\(W\) fixed.  This aligns with **information bottleneck** principles: we
compress task information into a small subspace.

---

#### Non‑obvious Insight

Because LoRA inserts a *rank‑\(r\)* perturbation, the resulting model’s
effective rank increases by at most \(r\).  
Thus, even after fine‑tuning, the overall parameter manifold remains close to
the original pre‑trained manifold.  This explains why **LoRA‑adapted models
retain zero‑shot generalisation**: they cannot drift too far from the
pre‑trained distribution without increasing rank, which is penalised by the
small \(r\).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
