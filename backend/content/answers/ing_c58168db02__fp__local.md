---
qid: ing_c58168db02__fp__local
question: 'Explain: Generic Programming — Top 8 Programming Paradigms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 878
total_tokens: 1050
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:52-05:00'
sources: []
---

**Generic Programming – the eight core paradigms that underpin modern ML code**

| # | Paradigm | Why it arises | Deeper principle | Non‑obvious insight |
|---|----------|---------------|------------------|---------------------|
| **1** | **Data‑centric (tensor) programming** | Models operate on *arrays* of numbers; vectorised operations reduce per‑sample overhead. | Linear algebra as a universal language: every computation is a matrix or tensor transform. | The “batch size” that maximises GPU utilisation isn’t always the largest—GPU stalls when tensors become too wide for cache, so an optimal batch balances occupancy and memory bandwidth. |
| **2** | **Declarative graph construction** | Training loops are *stateless*; we describe a computation graph once, then run it many times. | Functional composition: a graph is a pure function of inputs → outputs, enabling optimisers to reorder ops globally. | Graph nodes can be lazily evaluated; this means you can “freeze” a sub‑graph (e.g., a feature extractor) and reuse it without recomputing intermediate tensors. |
| **3** | **Lazy evaluation / pipelining** | Data pipelines often involve I/O, augmentation, and caching—doing all eagerly would blow memory. | Asynchronous streams: produce one element while consuming the next, keeping GPU busy. | A well‑tuned pipeline can hide 90 % of data loading latency even on SSDs; the key is to keep *prefetch depth* > 2× batch size. |
| **4** | **Object‑oriented module composition** | Models are built from reusable layers (Conv, BatchNorm, etc.). | Encapsulation + polymorphism: each layer implements a `forward` contract, allowing dynamic replacement without recompiling the whole graph. | In PyTorch, a `nn.Module` keeps its own parameters; this means you can freeze *any* sub‑module during fine‑tuning simply by setting `.requires_grad=False`, no need to rebuild optimisers. |
| **5** | **Functional programming for loss & metrics** | Losses are pure functions of predictions and targets, enabling automatic differentiation. | Chain rule as composition: gradients flow through a compositional stack of functions without explicit back‑prop code. | Many frameworks expose *higher‑order* losses (e.g., `KLDivLoss` that internally calls `softmax`). Understanding this lets you compose custom regularisers by wrapping existing ones. |
| **6** | **Parallelism & distributed training** | Single GPUs cannot hold huge models or datasets; we split work across devices/nodes. | Gradient‑descent as a consensus problem: each worker computes local gradients, then they’re averaged (AllReduce). | The *communication pattern* dominates scaling—using 1‑D ring AllReduce instead of naïve broadcast yields O(log N) communication cost, crucial for >8 GPUs. |
| **7** | **Meta‑learning / hyper‑parameter optimisation** | Training a model is just one instance of a larger optimisation over architecture and learning rate schedules. | Bayesian inference on the space of training recipes; each hyper‑parameter is treated as a random variable with its own posterior. | A single “one‑shot” meta‑learner can adapt to unseen tasks in < 10 iterations, because it learns *how* to update parameters rather than the final weights themselves. |
| **8** | **Explainability & introspection** | Models must be auditable; we need to probe internal states without perturbing training. | Information bottleneck: every layer compresses information—measuring mutual information reveals which features are useful. | The *gradient‑based saliency* maps derived from a model’s own loss surface often correlate better with human perception than heuristic heatmaps, because they respect the true decision boundary learned by optimisation. |

These paradigms are not isolated; they intertwine to form the “generic programming” toolkit that lets researchers prototype, scale, and interpret deep learning systems efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
