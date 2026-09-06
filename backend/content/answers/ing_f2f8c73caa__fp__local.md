---
qid: ing_f2f8c73caa__fp__local
question: 'Explain: More partitions may increase end-to-end latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 420
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:35:34-05:00'
sources: []
---

In distributed training each *partition* (worker) processes a slice of data and periodically exchanges gradients or parameters.  
The **fundamental problem** is to keep all workers synchronized while minimizing the time spent on communication versus computation.  

When you add more partitions, the computational load per worker shrinks, so in isolation each worker finishes faster.  However, the *end‑to‑end latency*—the total wall‑clock time for one training step—is bounded by the slowest partition plus all inter‑worker coordination.  
Mathematically, if \(t_{\text{comp}}\) is per‑partition compute and \(t_{\text{comm}}\) is the cost of exchanging updates (including queuing, contention, and serialization), then

\[
T_{\text{step}} = \max_i(t_{\text{comp},i}) + t_{\text{comm}} .
\]

Adding partitions reduces \(\max_i(t_{\text{comp},i})\) but often inflates \(t_{\text{comm}}\): more messages, higher bandwidth demand, and longer barrier waits.  Stragglers become more likely; a single slow worker can dominate the latency, while faster workers sit idle.

**Non‑obvious insight:**  
Even when each worker’s data shard is tiny, *network congestion* can create queueing delays that grow superlinearly with partitions. This “contention bottleneck” means that beyond an optimal point, every extra partition actually lengthens the step time, turning a throughput‑driven design into a latency trap.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
