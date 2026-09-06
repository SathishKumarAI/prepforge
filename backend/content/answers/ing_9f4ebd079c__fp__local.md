---
qid: ing_9f4ebd079c__fp__local
question: Budget the compute and latency for the onboard stack. What breaks when a
  model gets bigger?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 364
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:44:02-05:00'
sources: []
---

**Why compute and latency explode as models grow**

At the core of any on‑board AI stack is *information propagation*: every input token must be transformed through a sequence of linear+non‑linear operations that ultimately produce an output.  
The cost per layer scales with the number of parameters \(P\) and the dimensionality of intermediate activations \(d\). For a transformer block, a single self‑attention step requires \(\mathcal{O}(n^2 d)\) multiplies (where \(n\) is sequence length), while feed‑forward sub‑layers cost \(\mathcal{O}(n d^2)\). When the model doubles in width or depth, both \(P\) and \(d\) increase, so compute grows *quadratically* with respect to parameter count.  

Latency follows from the same principle: each additional layer adds a fixed number of clock cycles; deeper models therefore suffer a linear rise in inference time. Moreover, larger tensors demand more memory bandwidth. On constrained hardware (e.g., mobile SoC), this bandwidth becomes the bottleneck—latency spikes not because arithmetic is slower but because data must be fetched and written repeatedly.

**Non‑obvious insight**

Most people focus on raw FLOPs, yet *memory locality* dominates real‑world performance for large models. A 10× increase in parameters can keep compute per token constant if the model is reshaped into a more cache‑friendly architecture (e.g., grouped convolutions or low‑rank factorizations). Thus, the true limit isn’t parameter count but how well the computation fits the memory hierarchy; optimizing for locality can break the quadratic latency wall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
