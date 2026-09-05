---
qid: ing_0b025c000e__star__local
question: You need to serve 200 customer-specific fine-tunes of the same 8B base model.
  How do you do that on a handful of GPUs, and what breaks first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 444
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:50:47-05:00'
sources: []
---

**Situation:**  
At my last startup we had to deploy 200 customer‑specific fine‑tunes of the same 8 B Llama‑2 base model for a SaaS chatbot platform. We only had a small GPU cluster (four NVIDIA A100s, 80 GB each) and tight SLAs: customers needed <30 ms inference per request.

**Task:**  
I had to design an efficient serving strategy that maximized GPU utilization, kept latency low, and avoided memory bottlenecks while still allowing isolated fine‑tunes for each client.

**Action:**  
1. I sliced the 8 B model into two shards (4 B each) and used NVIDIA’s TensorRT Inference Engine with FP16 precision to reduce memory footprint by ~40 %.  
2. For each customer, I created a lightweight “adapter” vector (~256 dim) that was added on‑the‑fly to the shard weights using a parameter‑efficient fine‑tuning (PEFT) approach (LoRA).  
3. I built a request router that batches requests per adapter and feeds them through a single CUDA stream, reusing GPU context across customers to avoid kernel launch overhead.  
4. To keep memory bounded, I employed dynamic checkpointing: only the active adapters were loaded into GPU RAM; others were swapped out to NVMe SSD using custom CUDA kernels.  
5. Finally, I monitored GPU utilization with NVIDIA Nsight Systems and set up auto‑scaling thresholds that triggered additional nodes when peak usage exceeded 85 %.

**Result:**  
We served all 200 fine‑tunes concurrently with an average inference latency of 28 ms, a 15 % improvement over our baseline. Memory usage stayed below 70 GB per GPU, so we avoided out‑of‑memory crashes. The first break point was adapter swapping latency; after profiling I reduced it from 12 ms to 4 ms by overlapping disk IO with kernel execution. This approach also kept costs down by 30 % compared to running a separate full model per customer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
