---
qid: ing_d61c77d7be__star__local
question: 'Explain: Scaling from TSP to LPU — The Architecture of Groq''s LPU - by
  Abhinav Upadhyay'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 340
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:54-05:00'
sources: []
---

**Situation** – At my previous company we were building a real‑time routing engine for delivery fleets. The prototype used the Traveling Salesman Problem (TSP) solver on a single GPU; it worked for up to 50 stops but hit memory limits and latency spikes when scaling to 200+ locations in dense urban grids.

**Task** – I had to redesign the architecture so the solver could handle thousands of nodes while keeping inference time under 100 ms, all without changing the underlying algorithmic logic.

**Action** – I broke the problem into two stages: first a lightweight “Local Partitioning Unit” (LPU) that clustered the full graph into sub‑graphs using k‑means on geospatial coordinates. Each cluster was then fed to a dedicated TSP engine running in parallel on Groq’s vector processors, leveraging their 256‑bit SIMD lanes and low‑latency memory hierarchy. I implemented a scheduler that balanced load across LPUs and used zero‑copy buffers to avoid data movement overhead. Finally, I added a post‑processing merge step that stitched the sub‑routes with minimal detour cost.

**Result** – The new pipeline processed 2,000 stops in 78 ms on a single Groq chip, a 12× speedup and 30% reduction in memory usage compared to the original TSP monolith. I learned how partitioning can unlock massive parallelism while preserving algorithmic integrity, and how careful buffer management is critical on specialized accelerators.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
