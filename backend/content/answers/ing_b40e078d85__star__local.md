---
qid: ing_b40e078d85__star__local
question: Why doesn't my program run faster with more CPUs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 316
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:59-05:00'
sources: []
---

**Situation**  
I was training a deep‑learning model for image segmentation on a 16‑core workstation. After adding two extra CPU cores, the total runtime didn’t drop; it even went up by ~5 %.  

**Task**  
Figure out why scaling with more CPUs wasn’t improving performance and identify a better approach to speed up training.  

**Action**  
I profiled the code with Intel VTune. The bottleneck was not compute but memory bandwidth: the GPU‑accelerated kernels were stalled waiting for data that had to be fetched from RAM through the CPU cache hierarchy. I also discovered that my data loader used a single thread, so I switched to PyTorch’s `DataLoader` with `num_workers=8`, and enabled pinned memory. Then I replaced the CPU‑only pre‑processing pipeline (OpenCV) with NVIDIA’s cuDNN‑accelerated transforms in TorchVision, moving all preprocessing to the GPU. Finally, I rebalanced batch size so each GPU stayed busy while keeping per‑GPU memory under 12 GB.  

**Result**  
Training time dropped from 2 h 30 min to 1 h 15 min on the same hardware—a 50 % speedup—while maintaining identical validation metrics. I learned that scaling CPUs is only effective when the workload is CPU‑bound; otherwise, memory bandwidth and GPU offloading are the real constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
