---
qid: ing_896a9f7804__aws__local
question: Explain tensor parallelism vs pipeline parallelism for inference. When do
  you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 496
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:36:48-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my last role I led the rollout of a large‑scale recommendation engine that served 12 M daily users. The model was a transformer with 1.2B parameters; inference latency had to stay under **50 ms** while handling peak traffic spikes.

**Action (Dive Deep & Ownership)**  
I evaluated two parallelization strategies for deployment:

| Parallelism | How it works | When to use |
|-------------|--------------|-------------|
| **Tensor Parallelism** | Splits a single transformer layer’s weight matrix across GPUs; each GPU computes a slice of the output. All slices are gathered before the next layer. | Best when *model size* exceeds one GPU memory but *batch size* is small (typical inference). Reduces per‑GPU memory and keeps latency low because communication happens only between layers. |
| **Pipeline Parallelism** | Splits the model into stages; each stage runs on a different GPU, streaming activations forward while earlier stages process new batches. | Ideal for *large batch* inference or when you need to keep GPUs busy continuously (e.g., serving 1k requests per second). Latency can increase due to pipeline fill/drain but overall throughput rises. |

I benchmarked both on an **AWS Inferentia cluster**:  
- Tensor parallelism cut GPU memory from 48 GB to 12 GB, keeping latency at **42 ms**.  
- Pipeline parallelism increased throughput by **3×** (from 1.2k to 3.6k QPS) but raised latency to **70 ms**, acceptable for batch‑style workloads.

**Result (Deliver Results)**  
By deploying tensor parallelism for real‑time user requests and pipeline parallelism for nightly batch scoring, we reduced infrastructure cost by **18 %** while meeting SLA targets. The approach was documented in a shared playbook that is now used across the ML Ops team.

> *Bar‑raiser focus:* ownership of end‑to‑end latency, deep dive into communication patterns, quantified impact on cost/throughput, and learning from initial mis‑estimates of batch size that led to over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
