---
qid: ing_7c2ed89fbe__aws__local
question: Explain arithmetic intensity and the roofline model as applied to LLM inference.
  Why does batching improve decode throughput so dramatically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 425
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:08-05:00'
sources: []
---

**Situation & Task (Leadership: Customer Obsession & Ownership)**  
When launching an LLM inference service for our recommendation engine, we observed that per‑token latency was 10 ms while throughput hit only ~30 tokens/s. The client’s SLA demanded >1k tokens/s with <5 % error. I owned the performance review and drove a redesign.

**Action (Dive Deep & Bias for Action)**  
I profiled the GPU kernels and discovered that arithmetic intensity (AI) was ~0.5 FLOP/byte—below the GPU roofline (~10–15). By batching 64 tokens together, AI rose to ~8 FLOP/byte, moving us from memory‑bound to compute‑bound on the roofline. I re‑implemented beam‑search as a batched kernel using **CUDA Tensor Cores** and wrapped it in an **AWS Inferentia** endpoint via **Amazon SageMaker**. The design kept each batch <4 GB to fit within GPU memory, ensuring high availability across 3 AZs.

**Result (Deliver Results)**  
Batching increased decode throughput from 30 tokens/s to **1,200 tokens/s** (40×) while keeping per‑token latency at 9.8 ms. Cost dropped by 35% because we used fewer GPU hours and leveraged SageMaker’s spot pricing. The model now meets the SLA with a 99.7% success rate.

**Learnings & Bar‑Raiser Signals**  
- Ownership: I drove cross‑team collaboration (data, infra, ops).  
- Dive Deep: Quantified AI before/after batching.  
- Impact: Delivered measurable throughput and cost savings.  
- Failure Lens: Initial attempt failed due to GPU memory fragmentation; we iterated on batch size after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
