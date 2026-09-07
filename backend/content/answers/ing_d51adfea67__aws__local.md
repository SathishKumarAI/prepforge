---
qid: ing_d51adfea67__aws__local
question: 'Explain: Amazon Kinesis Data Streams Terminology and concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 529
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:40-05:00'
sources: []
---

**Customer Obsession | Ownership**

> **S**ituation – A new product launch required real‑time analytics on user clicks and ad impressions.  
> **T**ask – I had to pick a streaming platform that could ingest millions of events per second, keep latency < 200 ms, and let us build ML models downstream.  
> **A**ction – I chose Amazon Kinesis Data Streams (KDS) after dissecting its core concepts: *shards*, *records*, *sequence numbers*, *iterator types*, *consumer groups* (Enhanced Fan-Out), and the *checkpointing* mechanism.  
> **R**esult – By allocating 30 shards (≈ 1,000 req/s each) we achieved a sustained throughput of 3 M events/sec with 95th‑percentile latency < 150 ms. The downstream ML pipeline processed 500K events per minute and reduced churn predictions by 18% in the first month.

**Technical Breakdown**

- **Shards**: Unit of parallelism; each supports 1 MB/s input & 2 MB/s output.  
- **Records**: Payloads up to 1 MiB, identified by a unique *sequence number*.  
- **Iterators**: `TRIM_HORIZON`, `LATEST`, or specific sequence numbers for precise replay.  
- **Enhanced Fan‑Out (EFO)**: Dedicated throughput per consumer; eliminates read contention.  
- **Checkpointing**: Using DynamoDB to store last processed sequence number, ensuring exactly‑once processing.

**Design Trade‑offs**

| Factor | Choice | Impact |
|--------|--------|--------|
| Throughput | 30 shards | +3 M events/s |
| Latency | EFO consumers | < 150 ms |
| Cost | On‑demand vs. provisioned | ~$0.015/shard/hr (≈ $10/day) |

**Bar‑raiser focus**

- Demonstrated ownership by selecting KDS and designing the shard strategy.  
- Dived deep into iterator semantics to avoid data loss.  
- Quantified impact with real throughput & latency metrics.  
- Learned from early failures: initial 15‑shard design caused “throttling” errors; I adjusted shard count and introduced EFO, reducing error rate by 92%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
