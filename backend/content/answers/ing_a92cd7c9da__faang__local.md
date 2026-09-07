---
qid: ing_a92cd7c9da__faang__local
question: 'Explain: The Architecture of the Tensor Streaming Processor (TSP)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 426
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:17:34-05:00'
sources: []
---

**Clarify**  
The question asks for a high‑level description of *Tensor Streaming Processor* (TSP), an on‑device accelerator that streams tensors directly from memory into compute units, minimizing latency and energy. I’ll assume the audience knows basic DNN inference pipelines but not TSP internals.

**Approach**  
I’ll: 1) outline the dataflow stages; 2) describe the key hardware blocks (DMA engine, MAC array, buffer hierarchy); 3) explain how streaming eliminates intermediate storage; 4) touch on control flow and scheduling.  

**Depth**  
TSP is a *data‑centric* architecture built around a **streaming fabric** that pulls slices of input tensors from DRAM through a lightweight DMA controller into a **row‑major MAC array** (e.g., 64×64). Each MAC row processes one output channel per cycle, feeding results back into an **on‑chip scratchpad** that serves as both a write buffer for partial sums and a source for the next layer’s input. A small **control micro‑kernel** orchestrates tile boundaries, padding, and activation functions, generating *micro‑commands* that keep the MAC array saturated. Because data never moves to off‑chip SRAM, the processor achieves >10× lower energy per inference compared to traditional cache‑based GPUs.

**Edge Cases**  
- Layers with irregular shapes (e.g., depthwise separable convs) require zero‑padding logic;  
- Sparse weights need a compressed format to avoid idle MACs;  
- Batch sizes >1 can overload the scratchpad, necessitating tiling strategies.  

**Optimize & Communicate**  
Future iterations could integrate *mixed‑precision* pipelines (FP16/INT8) and on‑the‑fly quantization, reducing memory bandwidth further. I’d conclude by emphasizing how TSP’s streaming dataflow aligns with modern mobile inference workloads: low latency, high throughput, and tight power budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
