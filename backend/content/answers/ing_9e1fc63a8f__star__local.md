---
qid: ing_9e1fc63a8f__star__local
question: 'Explain: Array Manipulation — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:22-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building a fraud‑detection model that processed millions of transaction records per day. Our data pipeline stored raw logs in Parquet files, but the ML feature engine required dense numeric arrays for efficient training.

**Task**  
I needed to transform the sparse, categorical‑heavy datasets into high‑dimensional NumPy arrays while keeping memory usage below 8 GB and ensuring that the preprocessing time stayed under 30 seconds per batch.

**Action**  
First, I used `pandas.read_parquet` with PyArrow to load chunks of 500 k rows. Then I applied one‑hot encoding via `scikit-learn’s OneHotEncoder`, specifying `sparse=False` but limiting the maximum categories per feature to avoid blow‑up. Next, I stacked all encoded features into a single NumPy array and cast it to `float32`. To further reduce memory, I employed `np.memmap` for intermediate storage and performed in‑place operations where possible. Finally, I benchmarked the pipeline with `timeit`, iterating until we hit our 30 s target.

**Result**  
The optimized pipeline processed each batch in ~25 seconds, reduced peak RAM to 6.2 GB, and produced a training set that increased model accuracy by 3.4% on the validation set. I learned that careful chunking, controlled sparsity, and memory‑mapped arrays can turn an otherwise infeasible array manipulation task into a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
