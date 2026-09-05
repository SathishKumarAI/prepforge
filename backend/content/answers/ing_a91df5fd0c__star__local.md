---
qid: ing_a91df5fd0c__star__local
question: 'Q: Why do we use NF4 instead of standard Float4 for QLoRA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 349
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:03-05:00'
sources: []
---

**Situation:**  
When I joined the research team at a startup developing large‑language models for edge devices, we were stuck with a 16‑bit float (Float4) quantization scheme that still left our model size above the 200 MB limit required by the target hardware.

**Task:**  
My goal was to reduce memory usage and inference latency while keeping perplexity within 5% of the baseline. I had to find an alternative representation that could fit into a 4‑bit format without sacrificing too much precision.

**Action:**  
I explored NF4 (normalized float‑4) as described in QLoRA papers. Unlike standard Float4, NF4 maps values to a signed 4‑bit integer and scales them with a learned per‑tensor scale factor, preserving the full dynamic range of weights. I implemented a custom CUDA kernel that packs each tensor into 4 bits using NF4, added an automatic scaling routine during fine‑tuning, and benchmarked against Float4. The kernel leveraged warp‑shuffling to reduce memory traffic, and I used mixed‑precision training with FP16 gradients to keep convergence stable.

**Result:**  
Switching to NF4 cut model size from 200 MB to 120 MB (a 40% reduction) and lowered latency by ~30%. Validation perplexity dropped only 3.2% compared to the Float4 baseline, meeting our accuracy target. I learned that careful scaling and custom kernels can unlock aggressive quantization without major performance loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
