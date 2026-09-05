---
qid: ing_20ae9431bc__star__local
question: 'Explain: Do Not Ignore Mismatches — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 320
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:47-05:00'
sources: []
---

**Situation**  
In my last role I built a distributed feature store for an online recommendation engine that served millions of users per day. One week before launch, our data pipeline was ingesting raw click‑stream logs into HDFS and then converting them to Parquet files for downstream training jobs.

**Task**  
I had to guarantee that the data arriving at the model training cluster matched exactly what was stored in S3, because even a single corrupted record could skew the embeddings and lead to a 0.5% drop in CTR.

**Action**  
I introduced end‑to‑end checksum validation: each ingestion job computed an MD5 hash of every Parquet file and pushed it to Kafka. A separate consumer read the same files from S3, recomputed the hash, and compared them. On mismatch, the pipeline automatically retried ingestion up to three times; after that we flagged the partition for manual review. I also added a lightweight Bloom filter on the metadata service so any downstream query could quickly verify file integrity before loading.

**Result**  
After deployment, checksum failures dropped from 12 per day to less than one. The training jobs ran with 99.999% data fidelity, and our CTR stayed above target during the rollout. I learned that proactive consistency checks are cheaper than post‑hoc debugging in large ML systems, and that simple cryptographic tools can be seamlessly woven into a streaming architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
