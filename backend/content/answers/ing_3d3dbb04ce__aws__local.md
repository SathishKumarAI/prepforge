---
qid: ing_3d3dbb04ce__aws__local
question: Why is decode latency dominated by memory bandwidth rather than compute,
  and what does that imply for how you optimise a serving system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 464
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:19-05:00'
sources: []
---

**Situation / Task**  
I was leading the redesign of an on‑prem inference cluster for a recommendation engine that served millions of requests per day. The team’s goal was to cut end‑to‑end decode latency by 40 % while keeping cost under $50k/month.

**Action**  
During profiling I discovered that **memory bandwidth** (DRAM read/write) consumed ~70 % of the total decode time, far outweighing GPU compute cycles. This happened because the Transformer decoder repeatedly fetched large weight tensors and intermediate activations across many heads—operations that are memory‑bound rather than FLOP‑heavy.

To address this I:

1. **Pinned critical weights** in *GPU‑resident* high‑bandwidth HBM via TensorRT’s “static engine” feature, reducing DRAM traffic by 55 %.  
2. Employed *int8 quantization* (AWS Neuron inference runtime) to shrink tensor size by ~4×, lowering memory bandwidth demand and improving compute utilization.  
3. Implemented a **work‑group scheduler** that batches 32 requests per kernel launch, amortizing kernel launch overhead and ensuring the GPU’s memory controller stayed saturated.

I also leveraged *Amazon SageMaker Edge* for edge inference where latency constraints were tighter, using *AWS Nitro Enclaves* to keep data local and avoid PCIe hops.

**Result**  
Latency dropped from 120 ms to 70 ms (≈42 % reduction). CPU utilization fell by 30 %, and total monthly spend decreased by $12k. The solution was adopted across three production regions, scaling to 10× traffic without additional hardware.

---

### Leadership Principles Highlighted  
- **Customer Obsession**: Prioritized end‑user latency impact over internal metrics.  
- **Ownership & Dive Deep**: Took full responsibility for profiling, root‑cause analysis, and system redesign.  

Bar‑raisers listen for clear ownership, deep technical insight (memory vs compute), measurable impact, and lessons learned from iterative failure (e.g., initial attempts to optimize GPU kernel alone).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
