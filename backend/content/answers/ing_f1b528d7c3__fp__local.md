---
qid: ing_f1b528d7c3__fp__local
question: 'Explain: Redistributing capacity globally by shifting demand sources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 410
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:10-05:00'
sources: []
---

**Redistributing Capacity Globally by Shifting Demand Sources**

At the heart of distributed training lies a simple resource‑balance equation:

\[
\text{Total Compute} = \sum_{i=1}^{N}\!\bigl(\text{Model Size}_i + \text{Batch Size}_i\bigr)\times \text{Iterations}.
\]

When one data center saturates, the only way to keep the *global* throughput constant is to **reallocate work**—shift a portion of its batch or even an entire training job to another location.  
Why must this happen? Because the loss surface is *continuous* and stochastic gradients are exchangeable: any subset of samples contributes equally to the expectation of the gradient. Therefore, exchanging which node processes which mini‑batch does not alter convergence guarantees; it only changes where the compute load sits.

The deeper principle is **information locality vs. capacity**. In a networked system, communication latency dominates when data must travel long distances. By moving *demand* (the batch) closer to idle resources, we reduce the effective bandwidth requirement for that node while keeping the overall gradient variance unchanged. This is analogous to load‑balancing in queuing theory: if queues are uneven, the global waiting time increases; shifting jobs equalizes service rates.

**Non‑obvious insight:**  
Because gradients are additive, you can *split* a single large batch across multiple underutilized nodes and later aggregate their sub‑gradients. This is not just a trick to use idle GPUs; it fundamentally changes the *effective minibatch size*, enabling sharper convergence with fewer parameter updates per epoch.

In practice, this strategy translates into a dynamic scheduler that monitors node utilization and shuffles data shards on the fly—achieving near‑optimal global throughput without retraining or altering the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
