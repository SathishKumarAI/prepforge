---
qid: ing_31968d7662__aws__local
question: 'Explain: Tensor-first compute and explicit data movement'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 455
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:18-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a team that had to re‑implement a legacy recommendation pipeline that was stuck on a CPU‑only inference loop and couldn’t scale past 5 k concurrent users. The goal was to cut latency from ~250 ms to <50 ms while keeping cost under $2k/month.

**Action – Tensor‑First Compute & Explicit Data Movement**  
I introduced a **tensor‑first compute** model: instead of shuffling raw features through the network, we pre‑pack them into dense tensors and feed them directly into GPU kernels. This reduced per‑request memory traffic by 70 % and allowed us to batch 64 requests in one kernel launch.  

To complement this I implemented **explicit data movement** with Amazon **S3 Transfer Acceleration** for feature store pulls and **AWS Nitro Enclaves** to keep tensors encrypted during compute, eliminating the need for on‑host decryption steps that had been a bottleneck.

We deployed the model on **Amazon SageMaker Endpoint** using a *ml.g5dn.2xlarge* instance (GPU) behind an Application Load Balancer with *AWS Global Accelerator*.  

**Result**  
Latency dropped from 250 ms to 45 ms (92 % improvement), throughput increased to 12k req/s, and monthly spend fell from $4.8k to $1.7k—an **82 % cost saving** while meeting SLA targets.

**Leadership Principles**  
- *Customer Obsession*: Delivered a faster recommendation experience that directly boosted conversion by 3%.  
- *Ownership & Dive Deep*: I dissected the bottleneck, engineered tensor packing, and validated with A/B tests.  

**Bar‑raiser takeaways**  
I demonstrated ownership by owning the full pipeline redesign, dove deep into GPU kernel optimization, quantified impact (latency, cost), and learned from an initial failure where unsized tensors caused OOM errors—prompting me to add runtime checks before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
