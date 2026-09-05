---
qid: ing_0de669c890__star__local
question: 'Explain: Week 2 - Data structures ​ — Best practice questions by the author
  of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 377
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:20-05:00'
sources: []
---

**Situation**  
During my final semester project I was building a recommendation engine for an e‑commerce startup. The training set had 4 million user–item interactions and the model needed to be retrained every 12 hours to stay fresh.

**Task**  
I had to design a data pipeline that could load, transform, and feed this volume into a neural network without exceeding our 8 GB RAM limit or breaking the 12‑hour window.

**Action**  
I applied the “best practice” tricks from the Blind 75 data‑structures section. First, I replaced Python lists with NumPy arrays and used `np.memmap` to stream data directly from disk, cutting memory usage by ~70%. Next, I switched to a sparse COO matrix for user–item interactions, leveraging SciPy’s efficient arithmetic to keep only non‑zero entries in RAM. For batching, I implemented a custom generator that pre‑prefetched mini‑batches using `multiprocessing.Pool`, ensuring GPU kernels stayed fed without idle time. Finally, I used the `tqdm` progress bar and logged throughput metrics; this let me spot bottlenecks during early runs.

**Result**  
Training time dropped from 4 hours to just under 1 hour, comfortably within the 12‑hour window. The model’s recall@10 improved by 3% after a single full retrain cycle, and memory usage stayed below 6 GB throughout. I learned that careful data‑structure choice—sparse matrices, memory mapping, and prefetching—is often more impactful than raw compute power when scaling ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
