---
qid: ing_9f4ebd079c__aws__local
question: Budget the compute and latency for the onboard stack. What breaks when a
  model gets bigger?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 480
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:50-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑onboard team for a next‑gen autonomous drone, we were asked to budget compute and latency for an on‑device inference stack that could scale from a 10 M‑parameter model (current baseline) up to 200 M parameters (future roadmap). The goal was to keep <30 ms end‑to‑end latency while staying under $5 W power.

**Action – Design & Trade‑offs**  
* **Model partitioning**: split the model into a lightweight feature extractor on an NVIDIA Jetson Xavier NX and a heavier head on a custom RISC‑V accelerator (AWS Nitro Enclave for secure ops).  
* **Quantization & pruning**: 8‑bit dynamic quantization reduced memory from 40 MB to 12 MB, cutting inference time by ~2×.  
* **Batching & pipelining**: use TensorRT with async streams; latency stays constant while throughput scales linearly up to 10 frames/s.  
* **Cost/availability**: Jetson (AWS IoT Greengrass) + Nitro cost < $30/month per device; high availability via dual‑boot firmware and OTA updates.

**Result**  
For the 200 M‑parameter model, we achieved 28 ms latency at 5 W, a 40 % reduction in power vs. baseline and a 60 % lower cost than an edge TPU solution. The system survived a 15 % drop in GPU memory due to a firmware bug—thanks to our rollback policy and continuous integration testing.

**Leadership Principles Highlighted**  
* **Customer Obsession / Ownership** – We built a resilient, low‑cost stack that meets real‑world flight constraints.  
* **Dive Deep & Deliver Results** – Quantitative metrics (latency, power, cost) drove every design choice; we iterated until thresholds were met.

**Bar‑raiser cues**  
The interviewers will look for: deep technical justification of the architecture, clear ownership of failure modes, and data‑driven proof that the solution scales.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
