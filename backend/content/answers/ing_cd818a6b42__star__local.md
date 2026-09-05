---
qid: ing_cd818a6b42__star__local
question: 'Explain: Partitioning/Sharding — Partitioningsharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:09-05:00'
sources: []
---

**Situation:**  
While leading the fraud‑detection model for a fintech startup, our training set grew from 5 M to 50 M labeled transactions over six months. The single GPU pipeline stalled; epoch times ballooned beyond our weekly release cycle.

**Task:**  
I had to redesign data ingestion and model parallelism so we could train on the full dataset within two weeks without sacrificing accuracy or introducing bias.

**Action:**  
I implemented a sharding strategy using TensorFlow’s `tf.data.Dataset.shard()` combined with an Elastic Parameter Server cluster. The raw CSVs were split into 10 shards, each stored in separate S3 prefixes; workers pulled shards in round‑robin fashion to balance I/O. On the compute side, we used Horovod for all‑reduce across 8 GPUs and a 4‑node parameter server for embedding tables. To avoid data leakage between shards, I added a deterministic hash of transaction IDs as shard keys and shuffled within each shard before batching.

**Result:**  
Training time dropped from 18 hours per epoch to under 2 hours, enabling us to iterate on model architecture twice as fast. Accuracy stayed steady at 94.3% AUC, matching the single‑node baseline. I learned that careful sharding not only scales compute but also preserves data integrity when distributed across heterogeneous nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
