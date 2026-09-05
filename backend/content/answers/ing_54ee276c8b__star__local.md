---
qid: ing_54ee276c8b__star__local
question: 'Explain: We''re telling python interpreter, hey, pass this'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 401
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:53-05:00'
sources: []
---

**Situation** – In my last project I built an image‑classification pipeline in PyTorch that ingested raw JPEGs and outputed a probability distribution over 100 classes. The training loop was slow because every epoch the model had to load all images into memory, causing out‑of‑memory errors on our GPU.

**Task** – My goal was to refactor the data loader so that it streamed batches directly from disk without buffering the entire dataset, while keeping the same API for downstream training code.

**Action** – I rewrote the custom `Dataset` class to use a generator pattern: inside the `__getitem__` method I added a line `image = Image.open(self.paths[idx])`, then immediately called `transform(image)` and returned the tensor. The key trick was to tell Python “pass this” by yielding each pre‑processed sample rather than returning it; I used a generator (`yield`) in a separate helper function so that `DataLoader` could pull items lazily. I also added caching for the first few batches to warm up the GPU and tuned the `num_workers` parameter to 4, balancing CPU load against I/O.

**Result** – The refactor cut memory usage by 70 % and reduced epoch time from 15 min to 6 min on a single RTX‑3090. Training converged in fewer epochs because the loader’s stability improved overall throughput. This experience taught me that a small change—passing data lazily instead of eagerly—can have outsized performance gains in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
