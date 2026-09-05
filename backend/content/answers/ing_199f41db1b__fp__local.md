---
qid: ing_199f41db1b__fp__local
question: 'Explain: Pipeline Parallelism (PP) — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 409
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:42-05:00'
sources: []
---

**Pipeline Parallelism for AI Serving – From Problem to Principle**

When a model is split across *N* GPUs, each layer *i* must wait for its predecessor to finish before computing its output. In inference the bottleneck is not compute but **latency per request**, which grows linearly with *N*.  

The fundamental problem: *how can we keep every GPU busy while still serving one request at a time?*  
Solution: treat the model as a pipeline of stages, each stage running on its own device. Feed a stream of *M* requests into the first stage; after the first layer produces an output for request 1, that partial result is immediately passed to stage 2 while the first stage starts computing layer 3 on request 2. Thus every GPU processes data continuously—no idle waiting.

**Why it works:**  
- **Throughput ≈ (M / N) × (batch‑size / latency)** – by overlapping *M* requests we amortize the startup cost of each layer.  
- The system behaves like a **Markov chain** where each stage’s state depends only on its immediate predecessor; this guarantees stability once steady‑state is reached.

**Non‑obvious insight:**  
Even if individual layers are highly imbalanced in FLOPs, *pipeline depth* can be chosen adaptively: the slowest layer dictates the global cycle time. Thus, by inserting lightweight “buffer” stages (e.g., micro‑batching or fused operations), we align stage times and avoid a single straggler from throttling the entire pipeline.

In short, pipeline parallelism transforms a linear compute chain into a *steady‑state flow*, turning per‑request latency into a function of the slowest stage rather than the sum of all stages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
