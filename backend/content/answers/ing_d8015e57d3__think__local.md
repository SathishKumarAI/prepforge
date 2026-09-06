---
qid: ing_d8015e57d3__think__local
question: 'Explain: Design the serving stack for a Claude-scale LLM API. Maximise
  GPU utilisation without wrecking p99 latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 575
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:12:26-05:00'
sources: []
---

**1️⃣ Clarify Scope & Constraints**  
   - *What* you’re designing: a production‑grade serving stack for a Claude‑scale LLM API (≈10B–100B params).  
   - *Goals*: high GPU utilisation and bounded p99 latency (<~200 ms).  
   - *Assumptions*: multi‑GPU nodes, model sharded across GPUs, request rates vary from bursty to steady, inference is mostly deterministic token‑by‑token.

**2️⃣ Mental Model / Framework**  
   - Treat the system as a pipeline: **Load Balancer → Scheduler → GPU Workers → Post‑processor → Client**.  
   - View GPU utilisation as *compute throughput* vs *queue latency*.  
   - Use *rate‑control* and *dynamic batching* to keep GPUs busy while respecting latency budgets.

**3️⃣ Step‑by‑Step Reasoning**  
   1. **Batch Scheduler**: collect incoming requests, group them by token length & model shard; use a priority queue that caps batch size so the longest request in a batch stays below p99 bound.  
   2. **Dynamic Batching Engine**: run a lightweight “micro‑batch” algorithm (e.g., *GreedyBatched* or *TensorRT‑TRT‑Batching*) that merges requests up to a latency threshold.  
   3. **GPU Worker Design**: each GPU runs an async inference loop; use pinned memory, half‑precision FP16/INT8 quantisation, and stream parallelism to overlap compute with data transfer.  
   4. **Back‑pressure & Autoscaling**: monitor queue depth and GPU utilisation; spawn new worker pods or scale GPUs when utilisation dips below a target (e.g., 70 %) but keep the latency envelope intact.

**4️⃣ Common Traps to Avoid**  
   - Over‑batching → queue latency skyrockets.  
   - Ignoring token length variability → some requests starve.  
   - Tight coupling of scheduler and GPU workers → single point of failure.  
   - Forgetting to flush buffers after inference (leads to stale results).

**5️⃣ Sanity‑Check & Communicate**  
   - Run a latency/throughput simulation with synthetic traffic; verify p99 stays within target while utilisation > 80 %.  
   - Explain the trade‑off: “We batch up to X tokens or Y ms, whichever comes first, so GPUs stay busy but no request waits longer than our SLA.”  

This structured approach ensures you can iterate on batch sizing, scheduler policies, and GPU utilisation knobs without compromising end‑to‑end latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
