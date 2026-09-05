---
qid: ing_10c912d098__fp__local
question: 'Explain: It just becomes large and you can''t — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 490
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:41:32-05:00'
sources: []
---

**Why “just becomes large” is the real bottleneck for modern ML**

At its core, training a neural network is an *optimization* problem: we minimize a loss function \(L(\theta)\) over parameters \(\theta\). The gradient \(\nabla L(\theta)\) is a sum of contributions from every data point. When the dataset or model explodes—think billions of images and 10‑billion parameter models—the *gradient computation* becomes the dominant cost.

1. **Compute vs. Communication**  
   In a distributed setting, each worker computes partial gradients on its shard. These partials must be aggregated (e.g., All‑Reduce). The communication time grows with the gradient size: \(\mathcal{O}(|\theta|)\). Even if GPUs are fast enough locally, the network becomes the bottleneck; latency and bandwidth limit how many nodes can participate before the wall clock stops decreasing.

2. **Memory Footprint**  
   Backpropagation requires storing activations for every layer to compute gradients. For a model with \(10^{10}\) parameters, this alone exceeds GPU memory by orders of magnitude. Techniques like *model parallelism* or *gradient checkpointing* trade compute for memory, but they introduce additional passes and complexity.

3. **Statistical Efficiency**  
   More data does not always mean better gradients. If the dataset contains redundant or noisy samples, the variance of \(\nabla L\) does not shrink proportionally to size. Hence, beyond a point, extra data yields diminishing returns while inflating compute cost.

**Non‑obvious insight:**  
The bottleneck is *not* just raw computation; it is the *communication‑compute imbalance*. As models grow, the ratio of gradient update time to communication time worsens exponentially. Thus, scalability hinges on algorithms that **compress gradients**, **asynchronously update parameters**, or **reshape the problem** (e.g., federated learning) so that each node works on a disjoint subproblem with minimal cross‑communication. This shift—from “scale up” to “architect for communication”—is what conferences like the Seattle Scalability Forum are now prioritizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
