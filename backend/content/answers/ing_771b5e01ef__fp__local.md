---
qid: ing_771b5e01ef__fp__local
question: 'Explain: Latency vs. Throughput — System Design: Top 15 Trade-Offs - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 408
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:17:50-05:00'
sources: []
---

**Latency vs. Throughput in ML system design**

The *fundamental problem* is that an inference engine must consume a finite compute budget (CPU/GPU cycles, memory bandwidth) and deliver predictions to clients.  
- **Latency** measures the time from request arrival to response delivery; it reflects the *worst‑case* or *per‑sample* cost of traversing the computational graph.  
- **Throughput** counts how many samples can be processed per unit time; it captures the *average* or *steady‑state* efficiency.

These two metrics are mathematically conjugate: for a fixed resource pool, \( \text{throughput} = \frac{\text{batch size}}{\text{latency}} \). Increasing batch size reduces per‑sample latency (due to parallelism) but raises the time until the first result is returned. Conversely, pipelining many independent requests (queueing) boosts throughput but inflates queue‑induced latency.

Design trade‑offs emerge from deeper principles:

1. **Queueing theory**: A M/M/1 queue shows that as utilization approaches 100 %, average waiting time diverges—high throughput forces high latency unless parallel servers are added.
2. **Hardware utilization**: GPUs thrive on large batches; CPUs favor small ones. The *compute‑bound* vs. *memory‑bound* regimes dictate whether to batch or stream.
3. **Statistical efficiency**: Larger batches reduce variance in gradient estimates (in training), improving convergence—an optimization perspective that ties latency/throughput to learning dynamics.

A non‑obvious insight is that *elastic batching*—dynamically adjusting batch size based on queue length and deadline constraints—can achieve a Pareto‑optimal frontier. It marries queueing models with real‑time scheduling, enabling systems to honor SLAs while keeping the GPU busy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
