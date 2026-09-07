---
qid: ing_bf04b57cbd__aws__local
question: You're training a large model across hundreds of accelerators. Compare data,
  tensor, and pipeline parallelism - when do you combine them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 457
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:35:05-05:00'
sources: []
---

**Situation / Task**  
I led a team that had to train a 350‑B parameter LLM on 1,200 NVIDIA A100s in our AWS SageMaker cluster while keeping the training cost under $2M and delivering the model within 90 days.

**Action – Parallelism Strategy**  
*Data parallelism* was first: each node processed a unique mini‑batch (batch size = 32) so we hit ~95% GPU utilization.  
When scaling past 256 GPUs, *tensor parallelism* (using Megatron‑L2’s pipeline‑aware sharding) split weight tensors across devices, keeping per‑GPU memory <10 GB and preventing OOMs.  
Finally, *pipeline parallelism* was added to overlap communication and computation; we staged the transformer layers in a 4‑segment pipeline so that while one segment trained on batch A, another processed batch B.

**Result**  
Combining all three yielded **3× faster convergence** (10 k steps vs. 30 k) and a **$0.8M cost savings** over the baseline. GPU idle time dropped from 18% to <4%. The model achieved 45.2 BLEU on the GLUE benchmark, beating our target by 3 points.

**Reflection (Bar‑raiser lens)**  
I owned the experiment design, dived deep into CUDA kernels to reduce communication overhead, and iterated quickly—deploying a new scheduler in 48 h after profiling showed 12% latency spikes. Post‑mortem revealed that early over‑provisioning of tensor shards caused unnecessary EBS costs; we refactored to auto‑scale shard size based on runtime memory stats.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Deliver a high‑quality LLM for downstream services (e.g., Alexa).  
- **Ownership & Dive Deep**: Took full responsibility, profiled, tuned, and iterated until metrics met the goal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
