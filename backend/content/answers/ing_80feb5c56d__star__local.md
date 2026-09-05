---
qid: ing_80feb5c56d__star__local
question: 'Explain: Video Games — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 342
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:27-05:00'
sources: []
---

**Situation:** While leading the engine optimization for a next‑gen racing title at Studio X, our frame‑rate dropped from 60 fps to 45 fps during intense multiplayer races, hurting player retention.

**Task:** I had to reduce CPU stalls and increase throughput by correctly applying concurrency (multithreading) versus parallelism (SIMD data processing) across physics, AI, and rendering pipelines without breaking the real‑time constraints.

**Action:** First, I profiled the engine with Intel VTune and identified that collision detection was a thread‑bound bottleneck. I restructured it into an *asynchronous task queue* using C++20 coroutines, allowing each car’s physics to run on separate worker threads (concurrency). Next, for AI pathfinding, I rewrote the cost‑map updates as SIMD vectorized kernels with AVX‑512, processing 16 agents per cycle (parallelism). Finally, I added a lock‑free ring buffer between the renderer and physics to avoid thread contention. I also tuned thread affinity and used Intel TBB for load balancing.

**Result:** Frame‑rate improved from 45 fps to 62 fps on mid‑range GPUs, and CPU utilization dropped by 28%. The team learned that concurrency solves *when* work is done (different tasks), while parallelism speeds up *what* work is done (vectorized data). This dual approach became our standard pipeline for all future titles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
