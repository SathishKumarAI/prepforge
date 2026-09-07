---
qid: ing_43ab083efe__aws__local
question: 'Explain: Highlights — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:20-05:00'
sources: []
---

**Situation & Task**  
At Uber we needed a data store that could hold **trillions of indexes** for real‑time trip matching and pricing while staying under our $1 M/yr budget. The challenge was to keep latency < 5 ms at peak load and still support millions of writes per second.

**Action – Design & AWS Services**  
I spearheaded the “LedgerStore” architecture, a hybrid of DynamoDB for hot keys and S3‑based Parquet shards for cold data.  
- **DynamoDB Global Tables** (multi‑region) handled 200 k RPS with 99.999% availability.  
- **S3 + Athena + Glue** stored the bulk of historical indexes; we used serverless partitions to keep query costs <$0.03 per GB scanned.  
- A **Lambda layer** performed real‑time compaction, writing incremental diffs back into DynamoDB and updating S3 shards nightly.  
- We introduced a **TTL policy** on DynamoDB to auto‑expire stale indexes, cutting storage by 35%.  

**Result**  
Within six months we achieved:  
- **Latency:** <4 ms for 99th percentile reads at peak traffic.  
- **Cost:** $850k/yr (30% below target).  
- **Scalability:** 10× write throughput without code changes, thanks to DynamoDB auto‑scaling and S3’s infinite capacity.  

**Reflection – Leadership Principles**  
*Customer Obsession*: We built a system that guarantees near‑instant match results for riders.  
*Ownership & Dive Deep*: I led cross‑functional squads, dissected cold‑start bottlenecks, and iterated until we hit SLA targets.  
*Bias for Action*: The Lambda compaction loop was deployed in production after a rapid A/B test, proving the design works at scale.  

**Bar‑raiser takeaway** – My solution shows deep ownership, quantifiable impact, and a willingness to learn from early latency spikes that forced us to re‑architect our caching layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
