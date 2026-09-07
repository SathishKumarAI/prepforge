---
qid: ing_b40e078d85__faang__local
question: Why doesn't my program run faster with more CPUs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 496
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:37-05:00'
sources: []
---

**Clarify**  
You’re asking why adding CPU cores doesn’t speed up your ML training loop. I’ll assume the code is single‑threaded, you’re not using a distributed framework, and the workload is compute‑bound (e.g., matrix ops). Confirm: are you measuring wall‑clock time? Are all cores idle or busy? Is there any GPU usage?

**Approach**  
1. Identify bottleneck (CPU vs memory vs I/O).  
2. Check thread affinity & scheduling.  
3. Profile to find hot spots.  
4. Parallelize the right parts (data loading, forward/backward pass).  

**Depth**  
- **Single‑threaded code**: OS schedules it on one core; other cores stay idle → no speedup.  
- **CPU‑bound kernels**: Libraries like BLAS or cuBLAS already vectorize and use all cores; adding more cores offers negligible gain unless you split batches across threads.  
- **Memory bandwidth & cache**: More cores share memory bus; contention can throttle performance.  
- **Python GIL**: Pure Python loops hit the Global Interpreter Lock, preventing true parallelism. Use NumPy/torch tensors or `multiprocessing`.  

Complexity: A well‑vectorized kernel runs in *O(n)* per core; adding *k* cores ideally gives *O(n/k)* but real speedup ≈ *1/(α + (1-α)/k)* (Amdahl’s law), where α is serial fraction.

**Edge Cases**  
- I/O‑bound preprocessing (disk/CPU stalls).  
- Small batch sizes → overhead dominates.  
- Hyper‑threading vs physical cores: may not double performance.  

**Optimize & Communicate**  
1. Profile with `cProfile` / `nvprof`.  
2. Use multi‑processing or data parallelism in PyTorch (`DataParallel`, `DistributedDataParallel`).  
3. Move heavy ops to GPU; ensure CUDA kernels are launched asynchronously.  
4. Explain that diminishing returns come from Amdahl’s law and memory bandwidth limits, not a bug.

By structuring the diagnosis this way, you show clear reasoning, depth of knowledge, and practical next steps—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
