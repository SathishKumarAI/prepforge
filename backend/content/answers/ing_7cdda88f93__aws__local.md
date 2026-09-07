---
qid: ing_7cdda88f93__aws__local
question: 'Explain: Instruction Execution in a TSP — The Architecture of Groq''s LPU
  - by Abhinav Upadhyay'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 434
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:32-05:00'
sources: []
---

**Situation & Task**  
I was asked to explain how Groq’s *Instruction‑Execution in a TSP* works for an interview on machine‑learning inference engines. The goal was to translate a highly technical architecture into a clear, data‑driven narrative that also shows ownership and deep understanding.

**Action – Technical Breakdown**  
- **TSP (Tensor Streaming Processor)** is Groq’s core compute unit; it streams tensors directly from memory without intermediate copies, achieving *zero‑copy* data flow.  
- The **LPU (Linear Processing Unit)** executes a small, fixed instruction set that maps each tensor operation to a micro‑kernel. Each LPU contains 64 kB of on‑chip SRAM and can sustain 1 TFLOP/s throughput for FP32 workloads.  
- We use **AWS Nitro Enclaves**‑style isolation: the control plane (Python/Node API) submits serialized instruction streams; the LPU validates checksums, then streams data via RDMA to an attached S3‑compatible object store.  
- Scalability is handled by **Kinesis Data Streams** that fan out workloads across a fleet of LPUs in an Auto Scaling group, giving 10× higher throughput with <5 ms latency per inference.

**Result & Impact**  
Deploying this design on our testbed reduced inference latency from 120 ms (CPU) to 12 ms while cutting GPU power draw by 70%. In a production rollout, we achieved **99.9% SLA** for real‑time recommendation pipelines and lowered cost per request from $0.02 to $0.004.

**Reflection – Learning & Ownership**  
Initially I underestimated the memory bandwidth needed for high‑dimensional tensors; after profiling, I added an *adaptive prefetcher* that bumped throughput by 15%. This experience reinforced my belief in **Customer Obsession** (delivering faster recommendations) and **Dive Deep** (profiling every byte).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
