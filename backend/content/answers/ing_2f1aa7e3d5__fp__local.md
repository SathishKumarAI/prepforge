---
qid: ing_2f1aa7e3d5__fp__local
question: 'Explain: GPU memory math & parallelism one-liners'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 518
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:45:09-05:00'
sources: []
---

**GPU Memory Math & Parallelism – One‑Liner Blueprint**

| Concept | Why It Must Be True | Deeper Principle | Non‑Obvious Insight |
|---------|---------------------|------------------|----------------------|
| **Thread block size ≈ warp size (32)** | A warp executes in lockstep; memory coalescing works only when 32 consecutive threads access adjacent addresses. | *Geometry of instruction execution*: the hardware pipeline is tuned to a fixed width, so you must match it for throughput. | If your data stride isn’t a multiple of 32, half your bandwidth evaporates—don’t just pick “anything large enough.” |
| **Shared memory = on‑chip cache** | Shared memory sits in the L1 cache hierarchy; it’s 16–48 KB per SM and has ~200 ns latency vs. ~400 ns DRAM. | *Locality of reference*: data reused across many threads should be pulled into the fastest accessible tier. | Even a single byte that’s accessed >10× can justify allocating an entire shared‑memory bank—don’t waste global memory bandwidth for tiny, hot kernels. |
| **Global memory traffic = (#threads × sizeof(data)) / coalescing_factor** | The GPU will fetch 128 B per transaction; any misalignment forces multiple transactions. | *Information theory*: the fewer redundant bytes you transfer, the higher your effective bandwidth. | Aligning a struct to 16 B or packing data into `float4` can double throughput without changing algorithmic complexity. |
| **Occupancy = (active warps per SM) / max warps** | More active warps hide memory latency; but each warp consumes registers and shared mem, so there’s a sweet spot. | *Optimization trade‑off*: maximizing parallelism is constrained by resource budgets—think of it as a knapsack problem on an SM. | Often the best occupancy isn’t 100 %; you may need to reduce register usage or split kernels to hit >70 % and achieve real latency hiding. |

**Bottom line:** Treat GPU memory like a multi‑layered highway: choose lane widths (warp size), toll booths (shared memory), and traffic rules (coalescing) that match the geometry of your algorithm; otherwise, the engine stalls before it even starts moving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
