---
qid: ing_d61c77d7be__fp__local
question: 'Explain: Scaling from TSP to LPU — The Architecture of Groq''s LPU - by
  Abhinav Upadhyay'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 345
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:18-05:00'
sources: []
---

**From TSP to LPU: why a “tensor‑sparse‑processor” is inevitable**

The Travelling Salesman Problem (TSP) is an archetypal NP‑hard combinatorial optimization. Its core operation—evaluating the cost of many candidate tours—is a sparse dot product over a huge, highly irregular graph. A conventional tensor‑processing unit (TPU) excels when all operands are dense and uniformly tiled; TSP’s sparsity breaks that regularity, forcing excessive zero‑padding and memory traffic.

Enter Groq’s Linear Processing Unit (LPU). It is engineered around *linear* algebraic primitives—vector–matrix products with an explicit “sparse support” flag—so that the accelerator can skip unneeded computations entirely. The LPU’s scheduler treats each sparse vector as a list of active indices, dispatching only the necessary multiplies to its SIMD lanes. This eliminates the padding penalty and keeps the memory bandwidth bounded by the *actual* number of non‑zeros.

The deeper principle is **information efficiency**: compute proportional to the entropy of the data. TSP’s solution space has low Shannon entropy; a dense tensor engine wastes cycles on irrelevant zeros, whereas an LPU allocates resources exactly where the problem’s combinatorial structure lives. The non‑obvious insight? By coupling *data layout* (sparse indices) with *compute fabric* (linear SIMD lanes), the LPU achieves both high throughput and minimal energy per operation—something a generic TPU can never match for TSP‑style workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
