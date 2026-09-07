---
qid: ing_4b80778c77__faang__local
question: 'Explain: The Wires Between the GPUs — Behind the Scenes of Distributed
  Training and Why Your GPU Wiring Matters as Much as Your Strategy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 495
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:00-05:00'
sources: []
---

**Clarify**  
The question asks how GPUs are physically connected during distributed training and why that wiring (inter‑GPU links) impacts performance just as much as the algorithmic strategy. I’ll assume a typical data‑parallel setup on a single node with multiple GPUs, using PCIe or NVLink.

**Approach**  
1. Explain the two common topologies: PCIe bus vs. NVLink mesh.  
2. Describe how tensors flow during forward/backward passes and parameter synchronization (all‑reduce).  
3. Connect wiring latency/bandwidth to training throughput and scalability.  

**Depth**  
- *PCIe*: Each GPU attaches to a single root complex; communication is serialized, limited by PCIe 4.0/5.0 bandwidth (~16–32 GB/s per lane) and higher latency (~10 µs). In multi‑GPU all‑reduce, the network becomes a bottleneck as tensors must travel hop‑by‑hop.  
- *NVLink*: Forms a fully‑connected mesh (e.g., 6 links per GPU in an 8‑GPU node). Bandwidth can reach ~25–50 GB/s per link with lower latency (~1 µs), enabling simultaneous pairwise transfers. This reduces the number of hops for all‑reduce, cutting time by 30–60 % compared to PCIe.  
- *Impact*: Training speed scales sub‑linearly on PCIe because communication dominates as batch size grows; NVLink gives near‑linear scaling up to a point. The choice also affects power consumption and thermal design.

**Edge Cases**  
- Mixed‑precision models reduce tensor sizes, making PCIe less of a bottleneck.  
- Multi‑node training adds InfiniBand or RoCE, which dominates over intra‑node links.  
- Legacy GPUs without NVLink cannot benefit from mesh topologies; software must fallback to ring‑based all‑reduce.

**Optimize & Communicate**  
When interviewing, I’d highlight that selecting the right interconnect is a hardware‑first optimization: it can halve training time before algorithmic tweaks. I’d also mention monitoring tools (NVIDIA Nsight) to profile link utilization and adjusting batch sizes or gradient accumulation accordingly. This demonstrates both deep technical insight and practical system‑level thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
