---
qid: ing_bd586d35fc__aws__local
question: 'Explain: Add a URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 479
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:30-05:00'
sources: []
---

**Situation / Task**  
I was tasked to add a “URL‑Bloom Filter” feature for our high‑traffic URL shortener so we could quickly reject already‑seen URLs without hitting DynamoDB and keep the service < 10 ms latency.

**Action (Design)**  
* **Requirement**: 1 billion unique URLs, 0.01% false positive rate, up to 10 k new URLs/s.  
* **Solution**: Use an in‑memory *HyperLogLog + Bloom Filter* cache per region.  
  * **Bloom filter** stored in an **Amazon ElastiCache Redis** cluster (cluster mode). Each key is a hashed bucket; writes are pipelined, reads use `BITFIELD`.  
  * A background Lambda batch processes new URLs, updates the filter, and publishes a notification to SNS that triggers a **SQS** queue.  
  * If the filter flags a false positive (rare), we fall back to DynamoDB for confirmation.  

* **Scalability**: Redis sharding handles >10 k ops/s; auto‑scaling on CloudWatch metrics keeps memory usage <80%.  
* **Availability**: Multi‑AZ Redis with automatic failover guarantees 99.99% uptime.  
* **Cost**: $0.015/hr per node; total <$200/month for a 3‑node cluster versus ~$2,500/month if we queried DynamoDB every request.

**Result**  
Latency dropped from 8 ms to 2 ms (80 % reduction). False positives were <0.009%, meeting the spec. The feature reduced DynamoDB traffic by ~95 %, saving $1,200/month.  

**Learning & Bar‑Raiser Notes**  
I owned the trade‑off between accuracy and cost, dove deep into Redis bit‑operations, quantified impact, and iterated after a 3‑day sprint failure when memory exceeded limits—showing continuous improvement.  

*Leadership Principles*: **Ownership**, **Dive Deep**, **Customer Obsession** (fast user experience), **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
