---
qid: ing_4e43360f49__eli5__local
question: 'Explain: Vertical Scaling — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 631
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:41:21-05:00'
sources: []
---

**Vertical scaling** is like upgrading a single‑engine airplane to carry more passengers: you make that one engine bigger (more horsepower, better fuel) so the whole plane can lift heavier loads without adding another engine. In machine learning, “vertical scaling” means boosting the power of one server—adding CPU cores, memory, or faster GPUs—so it can train larger models or serve more requests at once.

Below are 30 key ideas that turned this hard task into a clear recipe:

1. **CPU vs GPU** – which parts run faster on each.
2. **RAM limits** – how much data you can hold in fast memory.
3. **Disk speed (SSD vs HDD)** – how quickly you fetch training files.
4. **Batch size** – number of examples processed together.
5. **Model size** – parameters that must fit in RAM.
6. **Data pipeline** – loading and preprocessing speed.
7. **I/O bottleneck** – when reading data slows everything.
8. **Parallelism level** – how many threads or processes run simultaneously.
9. **Cache hit rate** – keeping hot data close to the CPU.
10. **Precision (FP32 vs FP16)** – smaller numbers use less memory.
11. **Mixed‑precision training** – blend of 16‑bit and 32‑bit for speed.
12. **Gradient accumulation** – simulating larger batches on small RAM.
13. **Memory fragmentation** – avoiding wasted space in RAM.
14. **Pinned memory** – faster transfer between host and GPU.
15. **CUDA streams** – overlapping data copy with compute.
16. **Tensor cores** – specialized hardware for matrix ops.
17. **Batch normalization** – stabilizes training, reduces iterations.
18. **Learning rate schedules** – fewer epochs needed.
19. **Checkpointing** – saving progress to avoid full restarts.
20. **Profiling tools (nvprof, perf)** – find slow spots.
21. **Operating system scheduler** – fair CPU time for processes.
22. **NUMA awareness** – memory locality on multi‑socket systems.
23. **Overclocking limits** – pushing CPU/GPU beyond rated speeds.
24. **Thermal throttling** – cooling to keep speed steady.
25. **Power supply capacity** – enough wattage for higher performance.
26. **Network bandwidth** – for distributed data or inference calls.
27. **Latency vs throughput trade‑off** – batch size choice.
28. **Autoscaling triggers** – when to spin up more RAM/CPU.
29. **Cost per hour** – balancing budget with speed.
30. **Documentation & versioning** – keeping track of what worked.

By mastering these concepts, you can turn a single machine into a high‑performance “single‑engine” powerhouse that handles bigger models and higher traffic—making vertical scaling less hard and more predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
