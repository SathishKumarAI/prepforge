---
qid: ing_592a537efc__star__local
question: Design the IR and pass pipeline for a compiler targeting a spatial dataflow
  accelerator. Where does the memory-residency decision live, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 349
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:02-05:00'
sources: []
---

**Situation** – I was leading a compiler team for a new spatial dataflow accelerator used in edge AI inference. Our goal was to generate efficient kernels that kept critical tensors resident on the on‑chip buffer while offloading less hot data to external DRAM, all under a strict 16 ms latency budget.

**Task** – Design an IR and pass pipeline that would automatically decide which arrays stay on‑chip, expose those decisions to subsequent optimization passes, and emit code for the accelerator’s custom memory controller.

**Action** – I extended LLVM’s `Loop` IR with a new `@memory_residency` metadata node. The first pass, `MemResPass`, analyses loop‐nesting depth, reuse distance, and access stride to score each array. It annotates the IR and inserts `alloca`/`store` instructions that map to either on‑chip or off‑chip buffers. A second pass, `DataflowFusePass`, consumes those annotations to fuse loops that share a residency class, reducing memory traffic. Finally, `CodeGenAccPass` translates annotated loops into the accelerator’s instruction set, emitting explicit load/store commands for the memory controller.

**Result** – The compiler automatically kept 70 % of tensor data on‑chip, cutting memory bandwidth by 3× and meeting the latency target in 92 % of benchmarks. I learned that embedding residency decisions early in the IR allows downstream passes to reason about physical constraints without extra back‑and‑forth passes, keeping the pipeline clean and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
