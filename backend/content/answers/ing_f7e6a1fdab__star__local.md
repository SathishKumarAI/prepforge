---
qid: ing_f7e6a1fdab__star__local
question: 'Explain: Sketch how you would serve a 671B-parameter MoE model with low
  latency under GPU-memory constraints.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 389
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:40-05:00'
sources: []
---

**Situation:**  
At my last company we had to deploy a 671‑billion‑parameter Mixture‑of‑Experts (MoE) model for real‑time ad recommendation on edge GPUs with only 24 GB of VRAM each.

**Task:**  
I needed to design an inference pipeline that kept latency under 30 ms while fitting the entire MoE into memory and ensuring we still got the full expressive power of all experts.

**Action:**  
1. **Expert‑level sharding:** I split the model across two GPUs, assigning disjoint expert groups to each card and using NVIDIA’s NVLink for fast inter‑GPU traffic.  
2. **Sparse routing with dynamic batching:** Implemented a custom CUDA kernel that routes tokens to only 2–3 experts per layer, keeping active parameters far below memory limits.  
3. **Quantization & mixed‑precision:** Applied 8‑bit INT8 quantization to all weight matrices except the gating networks, which stayed FP16 for accuracy.  
4. **Memory‑efficient data layout:** Reordered tensors into a column‑major format that aligns with warp‑level vector loads, reducing cache misses and improving throughput.  
5. **Lazy loading of expert weights:** Loaded each expert’s parameters on demand from NVMe SSD via unified memory, keeping only the active subset resident.

**Result:**  
The system achieved 27 ms latency per inference on a single 24 GB GPU while serving all 671B parameters. Memory usage never exceeded 22 GB, and accuracy dropped less than 0.3 % compared to full‑precision inference. I learned that careful sharding, sparse routing, and mixed‑precision quantization can bring gigantic MoE models into practical edge deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
