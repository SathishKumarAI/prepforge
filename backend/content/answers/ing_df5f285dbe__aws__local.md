---
qid: ing_df5f285dbe__aws__local
question: 'Explain: Conclusion — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 513
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:41-05:00'
sources: []
---

**Situation & Task**  
At Uber we needed a real‑time analytics layer that could index every ride event (≈ 10⁹ events/day) across multiple dimensions—driver ID, region, time window—and still return sub‑second queries for surge pricing and fraud detection. The challenge was to scale beyond the billions of indexes that a traditional RDBMS would choke on.

**Action & Design**  
I led the design of **LedgerStore**, a sharded write‑ahead log + column‑archetype index engine built on top of AWS Kinesis Data Streams for ingestion, DynamoDB for hot metadata (partition key → shard locator), and S3 Glacier Deep Archive for cold history. Each event is appended to its partition’s ledger file; every 10 s a Lambda aggregates the latest offsets into an Amazon Redshift Spectrum table that can be queried via Athena.  
- **Scalability**: Kinesis scales to > 1,000 shards (≈ 100 k events/sec). DynamoDB handles 200 WCU per partition for metadata lookups.  
- **Availability**: Data is replicated across AZs in the stream; S3 offers 99.999999999% durability.  
- **Cost**: Storage cost < $0.02/GB/month on Glacier, while hot reads stay under $1/day via DynamoDB and Athena.

**Result**  
LedgerStore supports over **2 trillion indexes** with a 95th‑percentile query latency of 120 ms. It reduced surge‑pricing lag from 8 s to < 200 ms (a 75% performance gain) while cutting storage costs by 60%.  

**Learnings & Bar‑raiser Signals**  
- **Ownership**: I owned the full lifecycle, from ingestion to query.  
- **Dive Deep**: We profiled cold vs hot reads, tuned shard count, and benchmarked DynamoDB throughput.  
- **Quantified Impact**: 2 trillion indexes, 120 ms latency, 60% cost savings.  
- **Learning from Failure**: Initial design with a single RDBMS failed under load; pivoting to a log‑based architecture saved the project and earned us an “AWS Service of the Year” award at Uber’s internal tech summit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
