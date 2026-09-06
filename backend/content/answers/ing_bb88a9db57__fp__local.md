---
qid: ing_bb88a9db57__fp__local
question: 'Explain: Memory Bound'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 394
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:42:38-05:00'
sources: []
---

**Memory‑bound learning**

When training a model we often write *“the algorithm is memory‑bound”*.  
From first principles this means that the **throughput of the entire pipeline is limited by the rate at which data can be read from or written to main memory, not by arithmetic speed or I/O latency**.

---

### Why it must happen

1. **Data‐access cost dominates compute** – modern GPUs/CPUs have teraflops of floating‑point power but only a few GB/s of DRAM bandwidth.  
2. **Gradient updates are tiny** – each training step touches a handful of parameters (∼10⁶–10⁸) relative to the size of the minibatch (∼10³ samples). The arithmetic per byte is minuscule, so moving data becomes the bottleneck.

### Deeper principle

This is an instance of **Amdahl’s law for memory access**:  
\[
T_{\text{total}} = \frac{N_{\text{ops}}}{P} + \frac{N_{\text{bytes}}}{B}
\]
where \(P\) is compute throughput and \(B\) is bandwidth. When \(N_{\text{bytes}}/B \gg N_{\text{ops}}/P\), the second term dominates, yielding a memory‑bound regime.

### Non‑obvious insight

Because gradients are *sparse* in many models (e.g., embeddings, sparse attention), one can **compress updates** (quantization, sparsification) to reduce \(N_{\text{bytes}}\). This trades off a negligible loss in accuracy for a dramatic bandwidth reduction—often the only way to escape memory‑bound performance on large‑scale systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
