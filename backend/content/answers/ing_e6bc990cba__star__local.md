---
qid: ing_e6bc990cba__star__local
question: 'Explain: Scientific Computing — Top 8 C++ Use Cases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 388
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:29-05:00'
sources: []
---

**Situation:**  
When I joined a research lab developing a real‑time seismic imaging pipeline, the existing Python codebase was too slow for live data streams. The team needed to process 10 GB of raw sensor data per minute and output depth maps within two seconds.

**Task:**  
My goal was to rewrite the core numerical kernels in C++ while keeping the high‑level workflow in Python, ensuring we met the latency target without sacrificing accuracy or maintainability.

**Action:**  
I identified the eight critical use cases: (1) matrix factorization for wavefield extrapolation, (2) FFTs for frequency‑domain filtering, (3) sparse linear solvers for inverse problems, (4) multi‑dimensional interpolation, (5) GPU‑accelerated convolution, (6) high‑precision integration, (7) adaptive mesh refinement, and (8) statistical uncertainty quantification.  
Using Eigen and Intel MKL I vectorized the matrix operations; cuFFT handled FFTs on NVIDIA GPUs; Trilinos provided scalable sparse solvers; Thrust enabled parallel interpolation; OpenMP threads managed CPU cores; double‑precision integration used GNU Scientific Library; adaptive refinement was coded with a custom octree; finally, Monte Carlo uncertainty was run in parallel via MPI. I wrapped the C++ modules with pybind11 for seamless Python integration.

**Result:**  
Latency dropped from 12 s to 1.8 s per frame—a 93% improvement—while preserving sub‑meter depth accuracy. The pipeline now processes live seismic streams in real time, and we published a paper on the method. I learned how to balance hand‑crafted C++ performance with modern libraries and maintain a clean Python interface for rapid experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
