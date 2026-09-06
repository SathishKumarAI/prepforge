---
qid: ing_592a537efc__fp__local
question: Design the IR and pass pipeline for a compiler targeting a spatial dataflow
  accelerator. Where does the memory-residency decision live, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 500
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:58-05:00'
sources: []
---

**IR & Pass Pipeline**

1. **Front‑end → High‑level IR (HLIR)**  
   *AST → SSA‑based graph* where each node is a *dataflow operator* (e.g., convolution, pooling).  
2. **Semantic Analysis → Data‑Movement IR (DM‑IR)**  
   Attach *access patterns*, *temporal locality*, and *bandwidth constraints*.  
3. **Memory‑Residency Pass** – *ResiPass*  
   Uses the DM‑IR to decide whether a tensor lives in on‑chip SRAM, HBM, or off‑chip DRAM.  
4. **Loop‑Tiling & Unrolling Pass** → *Tile IR (TI‑IR)*  
   Breaks computations into spatial tiles that fit the accelerator’s compute array.  
5. **Mapping Pass** → *Placement IR*  
   Assigns each tile to a specific compute block and its local memory.  
6. **Code Generation** → binary for the accelerator.

---

### Where does the residency decision live?

It belongs in **ResiPass**, immediately after semantic analysis but before tiling.  

*Why?*  
- The DM‑IR already knows *exactly how many times each tensor is read/written* and *when*.  
- Tiling later subdivides tensors; a naive residency decision made post‑tiling would force recomputation or redundant transfers for sub‑tiles, violating the *optimal dataflow principle*: minimize **data movement**.  
- Placing the decision early lets the tiler respect memory budgets: it can shrink tiles if an on‑chip buffer is needed, or merge tiles otherwise.

---

#### Non‑obvious insight

The residency pass should **jointly optimize for bandwidth and compute utilization**, not just fit size. A tensor that barely fits in SRAM may still be cheaper to keep on‑chip if its access pattern saturates the accelerator’s parallelism; keeping it off‑chip would stall all compute units. Thus, memory residency is a *coupled decision* that must be made with knowledge of both **temporal locality** (how many cycles between accesses) and **spatial parallelism** (how many operators can use the data simultaneously).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
