---
qid: ing_1eb12e97ba__star__local
question: 'Explain: NVL: links within groups, PCIe between them'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 348
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:49-05:00'
sources: []
---

**Situation**  
At my previous company we were scaling a real‑time inference pipeline for autonomous driving. The model ran on a pool of eight NVIDIA A100 GPUs that needed to share large feature maps across nodes while keeping latency below 5 ms.

**Task**  
I had to design the interconnect layout so that each GPU could exchange tensors efficiently without bottlenecking the PCIe bus, and then prove it met the real‑time SLA.

**Action**  
We built a two‑tier topology: inside each server we used NVLink (NVL) links to create a high‑bandwidth mesh—each A100 had 12 NVLinks at 25 Gb/s for intra‑node communication. Between servers, we wired PCIe Gen4 lanes in a daisy‑chain, giving us 64 Gb/s per link but with higher latency than NVLink. I wrote a custom data‑shuffle routine that prefetched tensors over NVLink first, falling back to PCIe only when cross‑host transfer was unavoidable. We also tuned the CUDA graph to keep all GPUs busy and used NCCL’s hierarchical collective mode.

**Result**  
The new interconnect reduced end‑to‑end inference latency from 12 ms to 4.3 ms, a 64% drop, while throughput increased by 30%. I learned that balancing NVLink’s low‑latency, high‑bandwidth intra‑node traffic with PCIe’s broader but slower cross‑node links is key for scalable GPU clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
