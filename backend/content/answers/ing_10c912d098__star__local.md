---
qid: ing_10c912d098__star__local
question: 'Explain: It just becomes large and you can''t — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 339
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:12-05:00'
sources: []
---

**Situation:**  
During the Seattle Conference on Scalability, I was tasked with optimizing a recommendation engine that served millions of YouTube videos daily. The model’s training data had ballooned to 3 TB, and inference latency exceeded 500 ms per request, breaking our SLAs.

**Task:**  
I needed to reduce training time by 70% and bring inference latency below 100 ms while maintaining a ≥2% lift in click‑through rate (CTR).

**Action:**  
First, I sharded the dataset across a Spark cluster and switched from dense embeddings to sparse hashing tricks, cutting memory usage by half. Then I migrated the model to TensorFlow Serving with GPU acceleration, batching 32 requests per inference call. To handle the volume, I implemented a two‑stage pipeline: a lightweight L1 model filters candidates, followed by a heavier L2 deep neural network only on top‑ranked videos. Finally, I added an online learning loop that updated embeddings every hour using incremental gradient descent.

**Result:**  
Training time dropped from 48 hrs to 12 hrs, and inference latency fell to 80 ms per request. CTR increased by 3.5%, surpassing the target. The exercise taught me that scaling is as much about smarter data representation and pipeline design as it is about raw compute power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
