---
qid: ing_1eb12e97ba__aws__local
question: 'Explain: NVL: links within groups, PCIe between them'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 415
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:50-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing a GPU‑accelerated inference cluster for a real‑time recommendation engine that needed to scale from 8 to 64 GPUs while keeping latency under 10 ms. The key challenge was inter‑GPU bandwidth: NVLink “links within groups” and PCIe “between them.”  

**Action**  
I mapped each **NVLink group** (a tightly coupled set of 4 GPUs on a single board) to the *high‑speed* data paths needed for model weight sharding. For cross‑board communication, I leveraged **PCI Express Gen 4** links because they provide the necessary throughput for the larger shuffle operations that happen after each forward pass. I added an **AWS Elastic Fabric Adapter (EFA)** overlay on top of the PCIe fabric to reduce head‑of‑line blocking and implemented a *ring‑buffer* protocol that amortizes latency across all 64 GPUs.  

**Result**  
The cluster achieved a **32 % reduction in end‑to‑end inference latency** (from 13 ms to 9 ms) while keeping cost per request below $0.02—well under the target of $0.03. I documented the trade‑offs: NVLink gives ~25 GB/s per link but is limited to intra‑board traffic; PCIe Gen 4 offers ~16 GB/s per lane, sufficient for inter‑board shuffles once aggregated across 8 lanes.  

**Learning**  
I realized that *ownership* means iterating on the data path until it matches the workload pattern, and *dive deep* requires profiling each link’s utilization before scaling. This approach is now part of our standard GPU cluster design playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
