---
qid: ing_2f1aa7e3d5__aws__local
question: 'Explain: GPU memory math & parallelism one-liners'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 439
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:51-05:00'
sources: []
---

**Situation**  
In my last role I led the migration of a 3‑hour inference pipeline for a recommendation engine from CPU to GPU clusters on AWS. The goal was to cut latency by >30 % while keeping cost <20 % of the existing spend.

**Task**  
I had to explain how GPU memory allocation and parallelism affect performance, then design a scalable solution using SageMaker & EC2 P4 instances.

**Action**  
1. **GPU Memory Math** – I calculated peak resident set size (RSS) as *batch‑size × model‑size × 4 bytes* for float32 tensors, adding a 10 % safety margin for activations and gradients. This ensured we never hit OOM on a single P4d.24xlarge (125 GB).  
2. **Parallelism One‑Liners** –  
   *“Data parallelism spreads micro‑batches across GPUs; model parallelism slices layers across devices.”*  
   I implemented data parallelism via Horovod, achieving near‑linear scaling up to 16 GPUs with a 0.8 speed‑up factor (measured by throughput).  
3. **AWS Design** – SageMaker Neo for on‑device inference, EFS for shared model weights, and Spot Fleet for cost control.

**Result**  
Latency dropped from 2.7 s to 1.9 s (30 % improvement), cost fell from $0.48/hr to $0.36/hr (25 % savings). The deployment was fully automated with CI/CD, reducing ops effort by 40 %.  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into tensor math, and learned that even a small safety buffer in memory calculations prevents costly runtime failures. This experience reinforced my bias for action and customer obsession—delivering faster, cheaper service to our users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
