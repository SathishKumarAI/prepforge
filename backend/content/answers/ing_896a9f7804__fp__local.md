---
qid: ing_896a9f7804__fp__local
question: Explain tensor parallelism vs pipeline parallelism for inference. When do
  you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 622
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:57:23-05:00'
sources: []
---

**Why we parallelise at all**

Inference on a large neural net is a sequence of matrix‑vector products that must be carried out quickly.  
The *time* \(T\) for one forward pass scales as  

\[
T \;=\; \frac{\text{work}}{\text{hardware capacity}}
      \;=\;\frac{O(N^2)}{C}
\]

where \(N\) is the model width and \(C\) the available compute (flops).  
To shrink \(T\) we can either increase \(C\) or reduce the *effective* work by splitting it across devices. Two natural decompositions arise: **tensor** (data‑parallel within a layer) and **pipeline** (layer‑by‑layer).

---

### Tensor Parallelism  

*Fundamental problem*: a single matrix multiplication is too large for one GPU’s memory.

*Solution*: split the weight tensor \(W\in \mathbb{R}^{m\times n}\) column‑wise (or row‑wise). Each device stores a slice \(W^{(i)}\) and receives the same input vector. The local result \(y^{(i)}=xW^{(i)}\) is computed independently; finally all \(y^{(i)}\) are concatenated (all‑reduce).

*Why it works*: the operation is linear, so splitting the operand preserves exactness. Communication cost grows linearly with the number of devices but remains far below the compute savings for wide layers.

*When to use*: when a single layer’s memory footprint exceeds one device or when latency per inference must stay low (no inter‑layer stalls).

---

### Pipeline Parallelism  

*Fundamental problem*: the sequence of layers is long; waiting for an entire model to finish before starting the next batch causes idle GPU time.

*Solution*: partition the model into *stages*. While stage 1 processes batch 0, stage 2 can simultaneously process batch −1 (if available). This is essentially a *producer–consumer* pipeline where each stage only needs its local weights and activations of that batch.

*Why it works*: layers are compositional; the output of one is the input to the next. By feeding batches through stages we achieve *throughput* scaling with the number of devices, provided the per‑stage compute dominates communication.

*When to use*: when latency can tolerate a few dozen microseconds per stage and you need high batch throughput on a very deep model.

---

#### Non‑obvious insight  

Tensor parallelism preserves *exact* inference results because linearity guarantees that splitting operands does not alter the function. Pipeline parallelism, however, introduces *stochastic* delays (due to queueing) that can affect deterministic latency guarantees—something most practitioners overlook when they assume “more devices = faster.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
