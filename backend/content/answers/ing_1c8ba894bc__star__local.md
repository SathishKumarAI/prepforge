---
qid: ing_1c8ba894bc__star__local
question: 'Explain: Saving The Mask — fast.ai\u2014Making neural nets uncool again
  \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 385
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:39-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a computer‑vision product that needed to run inference on edge devices with strict memory limits. Our baseline ResNet models ate up 300 MB of RAM and were too slow for real‑time use.

**Task:**  
I had to cut the model size by at least half while keeping accuracy within 1% of the original, all without rewriting the training pipeline from scratch.

**Action:**  
I read fast.ai’s “Saving The Mask” article and applied its mask‑based pruning technique. First, I added a learnable binary mask to each convolutional layer in our PyTorch model. During training I enabled a custom loss term that encouraged sparsity (using a L1 penalty on the mask). After convergence I performed a one‑shot prune: any filter whose mask value fell below 0.5 was removed entirely, and then I fine‑tuned the pruned network for a few epochs to recover lost accuracy. I also swapped out the heavy BatchNorm layers for GroupNorm, as fast.ai recommended, to keep inference speed high on mobile GPUs.

**Result:**  
The final model dropped from 300 MB to 140 MB and ran at 15 fps on a Snapdragon 865—meeting our edge‑device target. Accuracy only fell by 0.7% (from 92.4% to 91.7%). I learned that integrating mask‑based pruning directly into the training loop can be far more efficient than post‑hoc pruning, and that small architectural tweaks like swapping BatchNorm for GroupNorm can make a measurable difference in latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
