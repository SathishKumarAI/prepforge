---
qid: ing_67bf0b6810__star__local
question: 'Explain: Option2 - Partitioning based on PhotoID (recommended)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 366
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:13-05:00'
sources: []
---

**Situation:**  
At a photo‑sharing startup we were building a recommendation engine that had to train on millions of user photos. Our data lake was sharded across several HDFS nodes, but the nightly training job kept failing with “Out of Memory” errors because each executor loaded entire user datasets.

**Task:**  
I needed to design a partitioning strategy that would let us parallelize training while keeping per‑executor memory usage under 8 GB and still preserve locality for the photo features we used in the model.

**Action:**  
I proposed **Option 2: Partition by PhotoID**. We hashed each photo’s unique identifier into 256 buckets and stored them on separate HDFS blocks. In Spark, I configured a custom partitioner that routed all rows with the same PhotoID to the same reducer. This ensured that every executor processed only a subset of photos (≈ 3 M per bucket) while still allowing us to join user metadata lazily when needed. I also added a Bloom filter per bucket to avoid pulling in unrelated user data during joins, cutting shuffle traffic by 40 %. Finally, I tuned the `spark.sql.shuffle.partitions` to match our bucket count so that each executor had exactly one partition.

**Result:**  
Training time dropped from 5 hours to 1.2 hours, and memory spikes disappeared—each executor stayed below 6 GB. Accuracy improved slightly (AUC ↑ 0.02) because the model could now incorporate more photo‑level features. I learned that a well‑chosen partition key can dramatically reduce shuffle overhead and enable scaling without compromising data locality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
