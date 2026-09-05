---
qid: ing_adf53913e2__star__local
question: 'Explain: Explain passed by value and passed by reference.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 298
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:03-05:00'
sources: []
---

**Situation**  
During a data‑science sprint at my previous company, we were building a feature‑engineering pipeline that transformed large NumPy arrays before feeding them into a gradient‑boosted model. The training time kept rising as the dataset grew.

**Task**  
I needed to reduce memory consumption and speed up the transformation step without altering the final predictions.

**Action**  
I compared two approaches: passing intermediate arrays “by value” (creating copies with `np.copy()`) versus “by reference” (modifying in place). I profiled both using Python’s `tracemalloc` and found that copying each 10 GB array added ~12 GB of RAM usage per iteration. By refactoring the pipeline to operate on slices and use in‑place operations like `np.multiply(arr, scale, out=arr)`, I eliminated unnecessary copies. I also switched from a pure Python loop to `numba` JIT‑compiled functions that further reduced overhead.

**Result**  
The training time dropped from 45 minutes to 18 minutes (60% faster), and peak memory usage fell from 24 GB to 12 GB. I learned that understanding pass‑by‑value versus pass‑by‑reference is critical in high‑performance ML pipelines, especially when working with large tensors where every copy can become a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
