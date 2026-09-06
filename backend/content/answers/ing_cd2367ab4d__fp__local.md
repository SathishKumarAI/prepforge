---
qid: ing_cd2367ab4d__fp__local
question: 'Explain: The PEFT Revolution — Lora Qlora Peft'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 481
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:16:24-05:00'
sources: []
---

**The PEFT revolution is a principled shortcut to fine‑tuning large language models (LLMs).**  
Large models are trained on billions of tokens; re‑optimising all weights for every downstream task would be prohibitively expensive in time and memory. PEFT sidesteps this by *injecting* low‑rank, trainable adapters into the pre‑trained network while keeping the original weights frozen.  

- **LoRA (Low‑Rank Adaptation)**  
  LoRA decomposes each weight matrix \(W\) into a fixed part \(W_0\) and a learnable perturbation \(\Delta W = A B^\top\), where \(A, B\) have small rank \(r\). This is equivalent to projecting the gradient onto a subspace that captures the most salient directions for the task. Mathematically, it solves a constrained optimisation problem: minimise loss subject to \(\|\Delta W\|_F^2 \le \lambda r\), yielding a cheap update that preserves generalisation.

- **qLoRA (Quantised LoRA)**  
  qLoRA further compresses \(A\) and \(B\) using low‑bit quantisation. By treating the adapters as *embeddings* in a discrete codebook, it reduces memory from tens of megabytes to kilobytes while maintaining accuracy—an instance of **information bottleneck**: only task‑relevant signal is retained.

- **PEFT (Parameter‑Efficient Fine‑Tuning)**  
  PEFT generalises this idea beyond LoRA: adapters can be added at various network depths, share parameters across layers, or use sparsity patterns. The underlying principle is that *most of the knowledge* resides in the frozen backbone; only a small, well‑structured perturbation is needed to adapt to new data.

**Non‑obvious insight:**  
Because adapters are low‑rank, they act like *implicit regularisers*: they restrict the hypothesis space to a manifold aligned with the pre‑trained distribution. This explains why PEFT often outperforms full fine‑tuning on small datasets—full updates can overfit, whereas LoRA stays close to the original model’s inductive bias.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
