---
qid: ing_8e95a23bc3__star__local
question: Have feedback or questions? — Grind 75 - A better Blind 75 you can customize,
  by the author of Blind 75
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 326
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:57-05:00'
sources: []
---

**Situation**  
During my second year of graduate studies I was preparing for the weekly ML model‑tuning challenge at my lab. The team used a standard “Blind 75” list of hyper‑parameter settings that had worked well historically, but we were consistently missing the 95th percentile on our latency metric.

**Task**  
I needed to create a customized version of the Blind 75 that would reduce inference time by at least 15% while keeping accuracy above 90%.

**Action**  
I first profiled each candidate configuration with NVIDIA Nsight, recording GPU utilization and memory bandwidth. I then applied Bayesian optimization to sample the hyper‑parameter space more efficiently, focusing on kernel launch overheads and batch sizes that were under‑explored in the original list. Using PyTorch’s JIT compiler, I fused the most expensive operations identified by the profiler, and incorporated mixed‑precision training to cut memory usage.

**Result**  
The new custom Blind 75 lowered average inference latency from 42 ms to 35 ms—a 17% improvement—while maintaining a 91.2% top‑1 accuracy on our validation set. I learned that combining profiling data with automated search can uncover non‑obvious trade‑offs, and I now routinely present such customized lists in team reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
