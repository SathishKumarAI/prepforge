---
qid: ing_d3a5640be0__fp__local
question: What's the difference between static and continuous batching, and why did
  continuous batching become universal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 421
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:31:07-05:00'
sources: []
---

**Why batch size matters**

Training a neural net is an iterative stochastic‑gradient descent (SGD) problem: we approximate the full loss gradient by averaging over a *mini‑batch* of samples.  
A **static batch** fixes that number for the entire run; a **continuous (dynamic) batch** adapts it as training proceeds.

---

### Static batching

- **Pros:** Simple implementation, deterministic memory usage.
- **Cons:** Suboptimal use of hardware: early epochs have very noisy gradients but still waste compute on tiny batches; later epochs require huge batches to stabilize learning, yet the same batch size is used, causing either under‑utilization (GPU idle) or overflow.

### Continuous batching

- **Principle:** The *variance* of a stochastic gradient decreases as \(1/b\). By letting the batch size grow with training iterations, we can keep the *effective step‑size* roughly constant while reducing noise.  
- Mathematically: choose \(b_t \propto t^\alpha\) (often \(\alpha=0.5\)) so that \(\eta_t b_t\) remains stable, preserving convergence guarantees of SGD.

---

### Why it became universal

1. **Hardware scaling:** Modern GPUs/TPUs have large, flexible memory; they can accommodate growing batches without penalty.
2. **Optimized kernels:** Libraries (e.g., cuBLAS, XLA) are tuned for larger matrix sizes, so throughput improves dramatically as \(b\) increases.
3. **Training stability:** Larger batches later in training reduce variance without needing to lower the learning rate abruptly.

---

**Non‑obvious insight**

The *real* benefit is not just speed; dynamic batching turns the *learning schedule* into a single hyperparameter—batch growth rate—making it easier to transfer models across devices. In contrast, static batch tuning requires separate adjustment for each hardware platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
