---
qid: ing_771b5e01ef__faang__local
question: 'Explain: Latency vs. Throughput — System Design: Top 15 Trade-Offs - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 579
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:20:57-05:00'
sources: []
---

**Latency vs. Throughput – 15 Core Trade‑offs (Ashish Pratap Singh)**  

| # | Trade‑off | What it means | Why it matters |
|---|-----------|---------------|----------------|
|1| **Cache size ↔ Memory latency** | Bigger cache → lower miss rate but higher access time | Balances speed vs. cost |
|2| **Batch size ↔ Latency** | Larger batches amortize overhead, raising throughput but increasing per‑sample delay | Real‑time inference vs. batch jobs |
|3| **Model depth ↔ Inference latency** | Deeper nets → richer features, slower forward pass | Accuracy vs. speed |
|4| **Precision (FP32→FP16/INT8)** | Lower precision → faster ops, potential accuracy loss | Hardware acceleration vs. fidelity |
|5| **Parallelism (CPU⇄GPU⇄TPU)** | More parallel units ↑ throughput, ↑ power & cost | Scaling vs. energy budget |
|6| **Data pipeline concurrency** | Parallel I/O + preprocessing ↑ throughput, ↑ memory footprint | Throughput‑heavy workloads |
|7| **Model quantization ↔ Accuracy** | Quantized models run faster, may degrade performance | Deployment on edge devices |
|8| **Feature selection complexity** | Fewer features → faster inference, possible accuracy drop | Model simplicity vs. expressiveness |
|9| **Distributed inference (sharding)** | Shard across nodes ↑ throughput, ↑ communication latency | Scale‑out strategy |
|10| **Model compression (pruning, distillation)** | Smaller models run quicker, may lose nuance | Deployment constraints |
|11| **Latency budgeting (SLA) vs. Batch window** | Tight SLA → smaller batches, lower latency | Service level guarantees |
|12| **Network bandwidth ↔ Latency** | Limited bandwidth → serialization delays; high bandwidth ↑ throughput | Edge‑to‑cloud inference |
|13| **Hardware accelerators’ memory hierarchy** | Accelerator DRAM latency vs. host CPU RAM latency | Optimizing data placement |
|14| **Algorithmic complexity (e.g., attention heads)** | More complex ops ↑ compute, ↓ throughput | Model design choices |
|15| **Checkpoint I/O ↔ Training speed** | Frequent checkpoints → lower risk but higher I/O latency | Fault tolerance vs. speed |

**Key Insight:**  
Designing ML systems is a *resource allocation game*: every gain in throughput usually inflates latency or resource consumption, and vice‑versa. The art lies in quantifying each trade‑off against business SLAs, hardware budgets, and model performance targets—then iteratively profiling, benchmarking, and refining until the sweet spot is found.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
