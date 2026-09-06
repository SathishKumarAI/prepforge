---
qid: ing_9f4ebd079c__think__local
question: Budget the compute and latency for the onboard stack. What breaks when a
  model gets bigger?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 675
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:37:34-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- *Budget* means estimate FLOPs, memory, energy, and latency for the on‑board inference stack (CPU + GPU/TPU).  
- Assume a typical mobile/edge device: 2–4 GB RAM, ~10 W power envelope, sub‑100 ms target latency.  
- “What breaks” refers to bottlenecks that worsen as model size increases (parameter count, compute intensity, memory traffic).

**2️⃣ Mental model / framework**  
Use the classic *compute‑memory‑latency* triangle:  
- **Compute** → FLOPs per inference, clock cycles, core utilisation.  
- **Memory** → peak RAM usage, bandwidth needed to fetch weights/activations.  
- **Latency** → time per layer, I/O stalls, pipeline depth.  
Also factor *energy* as a side‑effect of compute and memory.

**3️⃣ Step‑by‑step reasoning**  

1. **Compute budget**  
   - Count MACs (multiply–accumulate ops) = 2 × #weights for each layer.  
   - Multiply by the number of inference passes per second to get FLOPs/s.  
   - Convert to required GPU/CPU performance using peak GFLOPs of the target chip.

2. **Memory budget**  
   - Sum sizes of all weight tensors + activations + intermediate buffers.  
   - Add on‑the‑fly quantisation overhead if applicable.  
   - Check against device RAM; if exceeded, consider model pruning or layer‑by‑layer inference.

3. **Latency budget**  
   - For each layer, estimate cycles = (MACs / core throughput) + memory stalls.  
   - Sum across layers; compare to target latency.  
   - Identify stages where bandwidth saturates or instruction pipeline stalls.

4. **Identify “break” points as model grows**  
   - *Compute*: GPU cores become saturated; parallelism limited by batch‑size = 1.  
   - *Memory*: Weight matrices no longer fit in on‑chip SRAM → frequent DRAM access, high latency.  
   - *Bandwidth*: Activation traffic exceeds bus width → I/O bottleneck.  
   - *Energy*: Exceeds power budget → thermal throttling.

**4️⃣ Common traps to avoid**  

- Assuming linear scaling: a 10× larger model does not always mean 10× compute due to cache reuse differences.  
- Ignoring quantisation effects; lower‑precision can change memory/compute balance.  
- Overlooking I/O overheads (e.g., loading weights from flash each inference).  
- Neglecting software stack inefficiencies (suboptimal kernels, lack of SIMD).

**5️⃣ Sanity‑check & communicate**  

- Verify numbers against known benchmarks (e.g., MobileNet‑v3 on Snapdragon 8 Gen 1).  
- Present a table: *Model size* vs. *FLOPs*, *RAM*, *Latency*, *Power*.  
- Highlight the tipping point where any of these exceed device limits, and suggest mitigation strategies (pruning, quantisation, knowledge distillation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
