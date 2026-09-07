---
qid: ing_78bd64b35b__aws__local
question: What Is a Bloom Filter? — Bloom Filters | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 646
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:19-05:00'
sources: []
---

**Bloom Filter – What it is and why we use it**

A Bloom filter is a space‑efficient probabilistic data structure that tells you whether an element *might* be in a set or definitely **not**. It uses `k` independent hash functions to map each item to a bit array of size `m`. When querying, all `k` bits must be 1 for a positive answer; if any is 0 the item is guaranteed absent. False positives are possible but false negatives are not.

---

## STAR – Scaling a “Duplicate URL” Service

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| **S3 bucket** ingests millions of click‑stream URLs daily; we need to flag duplicates before downstream analytics. | Reduce storage and compute by eliminating near‑duplicate URLs at ingestion. | • Built a serverless pipeline: Kinesis ➜ Lambda ➜ DynamoDB.<br>• Stored a Bloom filter (m = 10 M bits, k = 7) in **Amazon ElastiCache Redis** for fast lookups.<br>• On each record, the Lambda checks the filter; if *not* present it writes to S3 and inserts the hash into the filter. <br>• Updated the filter every 5 min from a batch job that merges incremental Bloom bits into an **S3‑backed** bit array, ensuring durability. | Cut duplicate processing by **92 %**, saving ~$1k/month in Lambda invocations. Latency per record dropped from 200 ms to <20 ms. The false‑positive rate stayed below 0.5 %. |

---

## Technical Design Highlights

- **AWS Services**: Kinesis (streaming), Lambda (serverless compute), ElastiCache Redis (in‑memory filter), S3 (persistent storage).  
- **Scalability**: Each Lambda instance operates independently; Redis shards handle burst traffic.  
- **Availability**: Multi‑AZ Redis cluster + S3 replication guarantees 99.9 % uptime.  
- **Cost**: Using a small Redis node (~$10/month) versus storing all URLs in DynamoDB (~$3000/month).  

---

## Bar‑Raiser Lens

- **Ownership**: Took end‑to‑end responsibility from ingestion to storage.  
- **Dive Deep**: Tuned `m` and `k` to balance memory vs false‑positive rate; validated with real traffic stats.  
- **Quantified Impact**: 92 % reduction in duplicate processing, $1k/month saved.  
- **Learning from Failure**: Initial prototype over‑estimated filter size, causing excessive false positives; iterated on hash function selection and bit array sizing.

> *“When you can prove a data structure saves resources at scale while keeping accuracy high, that’s the kind of ownership Amazon looks for.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
