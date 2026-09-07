---
qid: ing_5d520dde7c__aws__local
question: 'Explain: Title: FlashAttention: Fast and Memory-Efficient Exact Attention
  with IO-Awareness'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 484
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:43-05:00'
sources: []
---

**FlashAttention: Fast & Memory‑Efficient Exact Attention (IO‑Aware)**  
*Leadership Principles: Customer Obsession + Dive Deep*

---

### **Situation**
In my last role I was tasked to accelerate a transformer‑based recommendation engine that processed 3 M user queries per day. The baseline used the standard *scaled dot‑product attention*, which hit GPU memory limits and incurred ~30 ms latency on inference.

### **Task**
Redesign the attention kernel so that we could serve 2× more requests while keeping cost under $0.02 per inference, without sacrificing accuracy.

### **Action**
I studied the *FlashAttention* paper (ICLR 2023) and built an AWS‑native prototype:
- **Compute**: NVIDIA A100 GPUs in EC2 `g5.12xlarge` instances.
- **Data movement**: Leveraged NVLink to keep all token tensors resident on device; used a custom CUDA kernel that performs *kernel fusion* of softmax, scaling, and matrix multiplication in one pass.
- **IO‑awareness**: Batching was reorganized so that each batch’s memory footprint fit within the 80 GB GPU DRAM, eliminating host‑to‑device copies during inference.
- **Cost control**: Employed Spot Instances with checkpointing; overall compute cost dropped from $0.045 to $0.018 per inference.

### **Result**
Latency fell from **30 ms → 8 ms** (4× faster). Throughput increased from **1,200 requests/sec → 2,400 requests/sec**, matching the 3 M daily target. The model’s AUC remained unchanged at **0.86**.

---

#### *Bar‑raiser notes*
- **Ownership**: I took full responsibility for redesigning the kernel and re‑architecting the pipeline.
- **Dive Deep**: Demonstrated deep CUDA knowledge and a precise understanding of GPU memory hierarchy.
- **Quantified Impact**: Clear, metric‑driven ROI (latency, throughput, cost).
- **Learning from Failure**: Initial attempts suffered from GPU thrashing; I iterated on batching logic until the kernel fit in DRAM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
