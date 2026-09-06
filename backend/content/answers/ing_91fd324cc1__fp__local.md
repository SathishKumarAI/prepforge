---
qid: ing_91fd324cc1__fp__local
question: Design the parallelism strategy for serving a 405B-parameter dense model.
  TP, PP, EP - what goes where and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 697
total_tokens: 884
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:56-05:00'
sources: []
---

**Why we need three axes**

A 405 B‑parameter dense transformer cannot fit in any single GPU’s memory; the fundamental bottleneck is *model size* \(M\).  
The cost of a forward pass grows linearly with \(M\) (time and memory), while communication bandwidth per step is fixed. Thus we must partition the model such that each device holds only a fraction of \(M\) **and** the inter‑device traffic remains sub‑linear.

---

### 1. Tensor‑Parallelism (TP)

*Goal*: split the weight matrices horizontally so every GPU stores a *portion* of the parameters and performs its own matrix multiply.

- **Why TP first?**  
  The largest memory consumer is the linear projection \(W \in \mathbb{R}^{d_{\text{model}}\times d_{\text{out}}}\). By slicing it along the output dimension, each GPU handles only a slice of the hidden state. This keeps per‑GPU FLOPs roughly constant while halving the parameter footprint.

- **Why not vertical?**  
  Splitting columns would still require all‑to‑all communication on the input activations, which is expensive at scale.

---

### 2. Pipeline‑Parallelism (PP)

*Goal*: divide the model into *stages* so that each stage runs on a distinct set of GPUs.

- **Why PP after TP?**  
  Once each GPU holds a smaller slice, we can stack many such slices to form full layers. Staging them reduces memory per GPU further and allows overlapping communication with computation (deep‑pipeline). The “deep‑is‑better” principle from pipelined training shows that latency amortization grows linearly with the number of stages.

- **Non‑obvious insight**:  
  If we place *more* layers in a stage than the memory budget permits, we can still keep each GPU’s buffer small by interleaving micro‑batches (micro‑pipeline). This hybrid “micro‑staged” PP is often overlooked but yields higher throughput.

---

### 3. Expert‑Parallelism (EP) – Parameter‑Efficient Fine‑Tuning

*Goal*: freeze the bulk of parameters and only train a lightweight adapter per layer.

- **Why EP last?**  
  The other two axes already reduce memory; EP now reduces *compute* and *communication* during fine‑tuning. Since we only backpropagate through adapters, gradients never touch the massive weight matrices, so communication is negligible.

- **Deep principle**:  
  Fine‑tuning on a frozen backbone is an instance of *parameter‑efficient transfer learning*, which can be viewed as optimizing over a low‑dimensional subspace embedded in the full parameter space. This dramatically shrinks the effective search dimension while preserving expressivity.

---

**Summary**

- **TP** first to slice huge matrices, keeping FLOPs balanced.  
- **PP** next to stack slices into full layers and overlap communication.  
- **EP** finally for efficient fine‑tuning with minimal gradient traffic.

The combination ensures each GPU handles a tractable share of parameters, computation is pipelined, and downstream adaptation costs are negligible—exactly what the 405 B‑parameter dense model demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
