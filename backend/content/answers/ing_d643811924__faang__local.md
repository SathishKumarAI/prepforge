---
qid: ing_d643811924__faang__local
question: 'Explain: Capacity Estimation — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 551
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:20-05:00'
sources: []
---

**Capacity Estimation – System‑Design Perspective**

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | *Restate the problem:* “We need to estimate how many model inferences per second (or training iterations) a production ML system can sustain given hardware, data, and latency constraints.”  Ask: *What is the target throughput?* *Which models/serving stacks are used?* *Are we bounded by CPU, GPU, memory, network or disk?” | Ensures you’re answering the right question and surface hidden assumptions. |
| **Approach** | 1️⃣ Profile a single inference on representative hardware (CPU/GPU). 2️⃣ Measure peak FLOPs, memory bandwidth, I/O latency. 3️⃣ Compute *theoretical* throughput = FLOPs per second / ops per inference. 4️⃣ Apply safety margin (e.g., ×0.8) for variability. 5️⃣ Scale to cluster: capacity = #nodes × throughput per node. | Gives a principled, repeatable pipeline that can be automated. |
| **Depth** | *CPU‑bound:* Use roofline model → min(peak FLOPs, memory bandwidth / bytes per op). <br>*GPU‑bound:* CUDA profiling (nvprof) → kernel occupancy, warp efficiency. <br>Include batch size effects: larger batches amortize kernel launch overhead but increase GPU memory usage. <br>For training, add gradient accumulation and communication costs (MPI or NCCL). | Shows you understand the underlying hardware constraints and can translate them into real numbers. |
| **Edge Cases** | • Sudden spike in request rate → queueing delay.  <br>• Model drift requiring larger batch sizes.  <br>• Multi‑tenant inference where one tenant’s load steals resources.  <br>• Disk‑bound pre‑processing (e.g., image decoding). | Highlights robustness of the estimation and readiness for production surprises. |
| **Optimize & Communicate** | • Cache frequently used embeddings to reduce compute.  <br>• Use mixed precision to cut FLOPs while keeping accuracy.  <br>• Deploy autoscaling: add nodes when queue depth > threshold.  <br>Explain trade‑offs (latency vs. throughput) clearly in diagrams and concise metrics. | Demonstrates end‑to‑end ownership from estimation to operational tuning, aligning with FAANG expectations. |

*Word count:* ~200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
