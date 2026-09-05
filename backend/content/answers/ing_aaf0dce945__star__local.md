---
qid: ing_aaf0dce945__star__local
question: 'Explain: Coding - SWE Questions — My 2026 Perplexity AI Interview Process
  and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 367
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:53-05:00'
sources: []
---

**Situation** – In early 2025 I was preparing for a senior AI engineer role at Perplexity AI. The team had built an in‑house language model that needed a new inference engine to handle real‑time user queries under strict latency limits (≤30 ms).  

**Task** – My goal was to design and implement a lightweight, GPU‑accelerated decoder that could run on the existing 8‑core CPU + 2‑GPU cluster while keeping memory usage below 4 GB per request. I also had to prove my solution against their “coding challenge” where they asked me to optimize a naive beam‑search routine in Python.  

**Action** – I first profiled the original code with PyTorch’s `torch.profiler`, identified that tensor allocations were the bottleneck, and replaced them with in‑place operations. I then re‑implemented the decoder in C++/CUDA using cuBLAS for matrix multiplications, wrapped it as a Python extension via pybind11. To reduce memory, I introduced mixed precision (FP16) and fused softmax+logits into one kernel. Finally, I benchmarked against their test harness, showing a 4× speed‑up and 70 % drop in peak RAM.  

**Result** – The new decoder met the latency target, cutting inference time from 120 ms to 27 ms on average. In the interview, I demonstrated the code live, and the hiring manager praised my end‑to‑end optimization approach. I learned that profiling first and using lower‑level languages for hot paths can deliver dramatic gains in real AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
