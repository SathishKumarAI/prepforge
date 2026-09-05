---
qid: ing_96f3f97f29__star__local
question: 'Explain: So, using this init method, we can — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 308
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:55-05:00'
sources: []
---

**Situation:** In my last internship I was tasked with speeding up the training pipeline for an image classification model that was taking hours to converge on our GPU cluster.

**Task:** My goal was to refactor the model definition so that hyperparameters could be toggled without hard‑coding them, and to reduce memory churn during batch processing.

**Action:** I rewrote the `CNN` class using a custom `__init__(self, num_classes=10, dropout_rate=0.5)` method. Inside, I used `torch.nn.Sequential` to stack layers, passed the hyperparameters directly into layer constructors, and added an optional `use_batchnorm` flag that inserted batch norm blocks when true. I also implemented a helper `build_optimizer(self, lr=1e-3)` that returned an Adam optimizer configured with the learning rate from the init arguments. This made it trivial to experiment with different configurations via a single line of code.

**Result:** The refactor cut model instantiation time by 70 % and lowered peak GPU memory usage from 12 GB to 8 GB, allowing us to run two more experiments in parallel. I learned that clean, parameter‑driven constructors not only improve reproducibility but also give teams the flexibility to iterate quickly on architecture tweaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
