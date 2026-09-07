---
qid: ing_ec15b1df4a__faang__local
question: 'Explain: A 70B dense model at 8-bit weights, chips with ~230 MB of SRAM
  each. Walk me through the deployment and the unit economics.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 562
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:49:34-05:00'
sources: []
---

**Clarify**  
We’re asked how a 70‑B parameter dense model compressed to 8‑bit weights can be run on chips that each have ~230 MB of SRAM, and what the unit economics look like (cost per inference, energy, memory). Key assumptions:  
- 70 B params × 1 byte/param ≈ 70 GB total.  
- Chips are identical, each with 230 MB SRAM.  
- Inference is batched or pipelined; we can stream parameters.  

**Approach**  
1. Compute memory per chip for activations and partial sums.  
2. Design a data‑flow that streams weights from off‑chip DRAM to the SRAM buffer, reusing them across multiple input tokens.  
3. Estimate compute cycles, energy, and cost per inference using standard ASIC metrics (e.g., 1 TFLOP/s @ 0.5 W).  

**Depth**  
- **Memory layout:** Keep a sliding window of weights in SRAM; each chip processes ~230 M params ≈ 3.3 B parameters at a time. The remaining 67 B must be streamed from off‑chip DRAM, incurring bandwidth cost (~10–20 GB/s).  
- **Compute:** Each MAC uses an 8‑bit multiply and accumulate; with a 1‑Tera‑MACs/s core, processing 70 B ops takes ~70 ms per inference.  
- **Energy:** At 0.5 W per chip, total energy ≈ 35 J per inference (assuming one chip).  
- **Cost:** Fabrication cost of a custom ASIC (~$10M) amortized over 1 billion inferences → ~$0.01 per inference plus memory and cooling overheads (~$0.02).  

**Edge Cases**  
- Insufficient DRAM bandwidth stalls the pipeline; mitigate with compression or double‑buffering.  
- Variability in weight sparsity could reduce effective memory needs but complicates scheduling.  

**Optimize & Communicate**  
- Use weight‑block sharding to parallelize across multiple chips, reducing per‑chip load.  
- Profile hotspots and shift critical path from memory to compute by increasing on‑chip buffer size if budget allows.  
- Narrate the trade‑off: larger SRAM reduces DRAM traffic but raises die area; lower energy per MAC lowers cost but may slow inference speed. This balance drives the unit economics toward ~$0.02–$0.03 per inference, competitive for large‑scale AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
