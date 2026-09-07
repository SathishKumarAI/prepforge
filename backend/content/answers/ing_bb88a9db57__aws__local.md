---
qid: ing_bb88a9db57__aws__local
question: 'Explain: Memory Bound'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 437
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:53-05:00'
sources: []
---

**Memory‑Bound Machine‑Learning Systems**

**Situation (S)** – At my last role I led a team that deployed a real‑time recommendation model for a streaming platform with 50 M daily active users. The inference pipeline was GPU‑accelerated, but we hit a *memory‑bound* bottleneck: the model’s embedding table (~1.2 GB) exceeded the device memory of our 8‑GPU nodes, causing frequent out‑of‑core paging and a 35 % latency spike.

**Task (T)** – Reduce inference latency to <50 ms per request while keeping cost under $10K/month and preserving model accuracy (>0.85 AUC).

**Action (A)**  
1. **Ownership & Dive Deep** – I profiled the GPU memory graph, identified that 80 % of usage came from static embedding lookups.  
2. **Invent & Simplify** – Switched to *partitioned sharding* with *TensorRT’s FP16* precision and *dynamic tensor cores*.  
3. **AWS Services** – Deployed on *Amazon SageMaker Neo* for model compilation, used *Elastic Inference* to attach 4 GB memory per inference instance, and leveraged *S3 Object Lambda* to stream rarely‑used embeddings on demand.  
4. **Bias for Action** – Rolled out a canary with 20% traffic; latency dropped from 120 ms to 48 ms, cost fell by 18 %.  

**Result (R)** – Achieved 45 ms average latency, maintained AUC of 0.86, and cut inference spend to $8.3K/month—up a 25 % throughput gain with no accuracy loss.

> **Bar‑raiser notes:** The candidate shows clear ownership, dives into low‑level memory profiling, quantifies impact (latency & cost), and learns from failure by iterating on precision and sharding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
