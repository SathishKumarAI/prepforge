---
qid: ing_c88cc2f130__star__local
question: FP8 training at 671B scale is hard. What actually breaks in low precision,
  and how do you make it stable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 380
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:10:32-05:00'
sources: []
---

**Situation:** While leading a distributed training effort for an image‑recognition model on the 671 billion‑parameter LLaMA‑scale architecture, our team hit a wall: moving from FP32 to FP8 precision caused the loss to explode after just a few epochs on the NVIDIA A100 cluster.

**Task:** I had to identify why low‑precision was destabilizing training and design a set of mitigations that would let us keep the memory savings without sacrificing convergence or final accuracy.

**Action:** First, I profiled gradients with `torch.autograd.profiler` and found that many activations were saturating at ±127/128, leading to catastrophic overflow. I introduced a two‑step strategy:  
1. **Gradient scaling with dynamic loss scaling** – using PyTorch’s `GradScaler`, but tuning the initial scale to 2^15 so that the first few back‑prop steps stayed within representable range.  
2. **Custom quantization hooks** – inserted per‑tensor requantization after each linear layer, adding a small bias term (±0.5) to counteract asymmetric zero‑point errors.  
3. **Hybrid precision for critical ops** – kept batch‑norm statistics and the final softmax in FP16, while the rest stayed FP8.  
4. **Checkpoint‑based recovery** – saved checkpoints every 500 steps so we could revert if divergence happened.

**Result:** After implementing these tweaks, training ran stably across all GPUs; the model’s top‑1 accuracy dropped only 0.3 % compared to the FP32 baseline while reducing memory usage by ~60 %. I learned that stability in ultra‑low precision hinges on careful scaling and selective precision retention rather than a blanket drop to FP8.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
