---
qid: ing_49523c54d4__fp__local
question: 'Explain: Memory Guidelines — Openclaw Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 426
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:41:29-05:00'
sources: []
---

**Memory Guidelines – The OpenClaw Deep Dive**

At its core, a GPU is a *data‑parallel* engine that trades massive throughput for tight control over where data lives. The fundamental problem is: **how to keep the ALUs fed while avoiding stalls caused by memory latency?**  

OpenCL exposes two primary memory spaces—`global`, `local`, and `private`.  
1. **Global memory** is the only addressable space from host code, but it has the highest latency. The guideline “use global memory sparingly” follows from the observation that a warp of 32 work‑items can be idle for dozens of cycles while fetching a single element, breaking the *roofline* model’s assumption that compute dominates.  
2. **Local memory** is shared among work‑group members and has cache‑like properties. The rule “keep local buffers under 48 KB” stems from the GPU’s on‑chip SRAM budget; exceeding it forces bank conflicts or spills to global, negating the speed‑up.  
3. **Private memory** is register‑backed. The recommendation to keep per‑thread data in registers (“avoid spilling”) derives from the fact that each spill consumes a cache line and incurs a costly load/store.

A non‑obvious insight: **memory coalescing is not just about stride; it’s about *stride alignment relative to wavefront size*.** Even perfectly strided access can be uncoalesced if the first address lies in the middle of a 128‑byte segment, because the GPU still fetches the entire segment. Thus aligning buffers to 128 bytes before dispatch often yields a measurable speedup.

By treating memory as a *resource budget*—allocating global for infrequently accessed data, local for shared intermediates, and private for per‑thread temporaries—you ensure that every ALU cycle is productive, turning the GPU into a true high‑bandwidth accelerator.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
