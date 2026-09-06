---
qid: ing_ec2e81b223__think__local
question: 'Explain: How do you deploy a capable assistant on cost-sensitive or on-device
  hardware (think Sarvam-Edge) without a datacentre GPU? Walk through the efficiency
  toolkit.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 588
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:37:15-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
   - *Assumption*: Target is an edge device (e.g., Sarvam‑Edge) with limited memory/compute and no GPU.  
   - *Clarify*: “capable assistant” means a language model that can answer, reason, and possibly generate text.

**2️⃣ Choose the mental framework**  
   - Think of deployment as a **pipeline of optimisation layers**: model selection → quantisation → pruning → compiler optimisations → runtime scheduling.  
   - Use the *efficiency toolkit* as a checklist for each layer.

**3️⃣ Step‑by‑step reasoning**  

| Layer | Action | Why it helps |
|-------|--------|--------------|
| **Model choice** | Pick a lightweight architecture (e.g., DistilBERT, MobileBERT, or a 6‑layer Transformer). | Fewer parameters → less memory & compute. |
| **Quantisation** | Convert weights/activations to INT8 (or even BFloat16 if supported). | Reduces RAM bandwidth and energy by ~4×; inference speed improves on many CPUs. |
| **Pruning / sparsity** | Remove low‑importance neurons or apply structured pruning. | Shrinks model size further; can enable SIMD acceleration. |
| **Knowledge distillation** | Train a student from a larger teacher to retain performance. | Keeps accuracy high despite the smaller size. |
| **Compiler optimisation** | Use XLA/TVM/TensorRT‑lite to fuse ops, schedule cache usage, and generate highly‑optimised binaries. | Eliminates interpreter overhead; leverages SIMD/NEON instructions. |
| **Runtime scheduling** | Batch requests when possible; use async queues. | Keeps CPU busy without idle stalls. |

**4️⃣ Common traps**  
   - *Over‑quantising*: INT8 may hurt language tasks if not fine‑tuned → do quantisation aware training.  
   - *Ignoring memory hierarchy*: Pruning that leaves irregular sparsity can actually slow inference on CPUs.  
   - *Skipping profiling*: Without measuring latency, you might miss a bottleneck (e.g., softmax).  

**5️⃣ Sanity‑check & communicate**  
   - Run a quick micro‑benchmark: measure peak FLOPs, memory usage, and latency.  
   - If latency > target, backtrack to the layer that contributes most (often quantisation or pruning).  
   - Present results in a table: *Model size*, *Inference time*, *Energy per inference*—so stakeholders see tangible gains.

By iterating through this checklist, you can systematically shrink and accelerate a capable assistant for deployment on cost‑sensitive, GPU‑free edge hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
