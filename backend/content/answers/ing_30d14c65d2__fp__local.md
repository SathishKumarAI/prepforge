---
qid: ing_30d14c65d2__fp__local
question: 'Explain: Terminologies — Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 482
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:48:44-05:00'
sources: []
---

### Latency in Machine‑Learning Pipelines

At its core, a **latency** is the *time* required to transform an input \(x\) into an output \(\hat{y}\).  
In supervised inference it equals the sum of all deterministic delays:

1. **Pre‑processing delay** – feature extraction, normalization, tokenization.  
2. **Model evaluation delay** – forward pass through layers (matrix multiplications, activations, memory accesses).  
3. **Post‑processing delay** – decoding logits into class labels or probabilities.

Why does latency matter? From an *optimization* viewpoint, the inference process is a pipeline whose throughput \(T\) satisfies

\[
T = \frac{1}{L}\quad (L \text{ in seconds per sample}),
\]

so reducing \(L\) directly increases usable capacity. In real‑time systems (autonomous driving, voice assistants), bounded latency guarantees that the system’s state remains consistent with the world; otherwise decisions become stale and unsafe.

From an *information–theoretic* angle, each layer in a neural net is a channel that maps inputs to outputs. Latency reflects the **computational capacity** of that channel: higher dimensionality or complex operations (e.g., attention) increase the required number of clock cycles, thus inflating \(L\). The trade‑off between *accuracy* and *latency* can be framed as a Pareto frontier where every extra bit of model complexity pushes you along one axis while pulling you back on the other.

#### Non‑obvious insight  
Latency is not merely a function of raw FLOPs; it is dominated by **memory bandwidth and cache locality**. A 3× faster GPU may still suffer if the model’s weight matrices are too large to fit in on‑device memory, forcing costly host‑to‑device transfers. Therefore, architectural choices that reduce *parameter redundancy* (e.g., pruning, quantization) often yield larger latency gains than simply scaling compute resources.

In summary, latency is a holistic metric capturing how the geometry of computation and data movement coalesce to determine real‑time feasibility in ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
