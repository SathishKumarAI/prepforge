---
qid: ing_5a2a8cc40d__star__local
question: 'Explain: Using nested loops, I''ve written some code'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 329
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:01-05:00'
sources: []
---

**Situation** – At my last internship I was tasked with building a recommendation engine for an e‑commerce platform that had over 2 M users and 500 K products. The training data came as a sparse user–item matrix, and we needed to compute item similarity scores in under two hours on our modest GPU cluster.

**Task** – My goal was to implement the cosine similarity between items efficiently enough to fit within the time budget while keeping memory usage below 12 GB.

**Action** – I wrote a nested‑loop routine in Python using NumPy. The outer loop iterated over each item, and the inner loop computed dot products with all other items that shared at least one common user. To avoid redundant calculations I stored intermediate norms and used broadcasting to vectorise the inner operations. I also added early‑exit logic: if a pair’s overlap was below 5 users, I skipped the computation entirely. Finally, I parallelised the outer loop across four CPU cores with `joblib`.

**Result** – The similarity matrix finished in 1 h 45 min, under the 2‑hour target, and memory usage stayed at 9 GB. When integrated into the recommendation pipeline, click‑through rate improved by 3.7 % over the baseline. I learned that careful loop structuring combined with sparse‑matrix tricks can yield significant speedups without resorting to GPU acceleration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
