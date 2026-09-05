---
qid: ing_ac36bb62af__star__local
question: 'Explain: Read more — Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 328
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:01-05:00'
sources: []
---

**Situation** – In my last role, our recommendation engine served 12 million daily users across three continents. The training pipeline was stuck at a bottleneck: the nightly model retraining took 48 hours on a single GPU cluster, and any data skew caused out‑of‑memory errors.

**Task** – I needed to cut training time by at least 60 % while keeping model accuracy unchanged and ensure the pipeline could scale to 30 million users.

**Action** – I introduced horizontal sharding of the training dataset. Using Apache Spark, I partitioned user interactions into shards based on hashed user IDs, guaranteeing each shard was roughly equal in size (≈200 GB). I then employed TensorFlow’s `tf.distribute.MultiWorkerMirroredStrategy` to train a single model across 8 workers, each processing one shard in parallel. To handle feature sparsity, I added a column‑arithmetic sharding step that grouped high‑frequency features into separate shards and used Bloom filters for efficient lookup during inference.

**Result** – Training time dropped from 48 hours to just 14 hours, a 71 % reduction. Accuracy (AUC) stayed at 0.87. The system now scales linearly with user growth, and we can retrain every 12 hours instead of nightly, improving freshness of recommendations. I learned that thoughtful sharding not only speeds up compute but also simplifies data governance and fault isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
