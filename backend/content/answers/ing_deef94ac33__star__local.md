---
qid: ing_deef94ac33__star__local
question: 'Explain: Genomics & Research — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 344
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:54:35-05:00'
sources: []
---

**Situation**  
In my PhD lab we were sequencing whole genomes for a cancer study, generating ~2 TB of raw FASTQ data per cohort. The downstream analysis pipeline required fast random reads of billions of short reads to compute variant frequencies across thousands of samples.

**Task**  
I had to design a scalable storage layer that could deliver low‑latency reads for millions of queries while handling high write throughput from the sequencing machines, all on a commodity 4‑node cluster.

**Action**  
I chose Apache HBase as the underlying NoSQL store because its columnar model matched our key–value read patterns. I modeled each sample’s reads as rows keyed by chromosome:start:position and stored the base calls in columns per read ID. To reduce write contention, I sharded data across 10 region servers and enabled Bloom filters for hotspot columns. For queries, I wrote a Spark job that pulled HBase tables via the Hadoop API, performed on‑the‑fly aggregation of allele counts, and pushed results back to HDFS for downstream statistical analysis. I also implemented HBase coprocessors to pre‑compute coverage metrics during ingestion.

**Result**  
Query latency dropped from 12 s (HDFS+MapReduce) to under 300 ms per sample, allowing interactive dashboards in real time. The system handled a sustained write rate of 1.5 GB/s without downtime. I learned how HBase’s tunable consistency and native integration with Hadoop can turn terabyte‑scale genomics data into an agile research asset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
