---
qid: ing_d955354a1a__think__local
question: 'Explain: “Moving Computation is Cheaper than Moving Data”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 560
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:18:25-05:00'
sources: []
---

**1️⃣ Clarify & State Assumptions**  
   - *What is meant by “moving computation”?* Think of sending a model or inference code to where the data lives, instead of shuttling raw data elsewhere.  
   - Assume typical constraints: limited bandwidth, high‑latency links, regulatory privacy rules, and that models can be compressed/partitioned.

**2️⃣ Mental Model / Framework**  
   - *Cost Dimensions*: (a) **Network cost** – bytes × per‑byte price + latency overhead; (b) **Processing cost** – CPU/GPU cycles × energy/price; (c) **Storage & I/O** – local vs remote.  
   - Use a simple budget equation:  
     ```
     TotalCost = DataTransferCost + ComputeCost
     ```
   - Remember that data transfer is often the bottleneck in distributed ML pipelines.

**3️⃣ Step‑by‑Step Reasoning**  
   1. Quantify data size (e.g., 10 GB of sensor logs).  
   2. Estimate transfer cost: 10 GB × $0.05/GB ≈ $0.50 plus latency delays that can stall pipelines.  
   3. Contrast with sending a lightweight model (say 5 MB) to edge devices: 5 MB × $0.05/GB ≈ $0.00025, negligible.  
   4. Add compute cost on local hardware—often cheaper per operation than remote cloud VMs due to no network overhead.  
   5. Sum and compare: moving data > moving computation.

**4️⃣ Common Traps to Avoid**  
   - *Assuming compute is always cheap*: high‑performance GPUs or specialized ASICs still consume energy.  
   - *Ignoring model size growth*: very large models (e.g., GPT‑3) can rival data sizes; consider model pruning or distillation.  
   - *Overlooking legal constraints*: some regulations forbid moving certain data types regardless of cost.

**5️⃣ Sanity‑Check & Communicate**  
   - Verify numbers against real cloud pricing tables and local hardware benchmarks.  
   - Explain the trade‑off with a concrete example: “If we keep 100 TB of medical imaging on-premise, transferring it to the cloud would cost thousands of dollars per month; deploying a lightweight inference engine locally saves that money while meeting privacy mandates.”  

By following this structured approach—clarifying assumptions, applying a cost model, reasoning quantitatively, guarding against pitfalls, and validating with real figures—you can confidently explain why moving computation is often cheaper than moving data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
