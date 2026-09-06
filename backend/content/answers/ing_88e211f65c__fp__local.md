---
qid: ing_88e211f65c__fp__local
question: 'Explain: the correct value to compare the put — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 338
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:55:53-05:00'
sources: []
---

**Why “the correct value” is *write‑capacity units* (WCUs)**  

A DynamoDB **PutItem** request writes a single item, regardless of its size or the number of attributes it contains. From an engineering standpoint, the cost to the system is dominated by *how many items can be written per second*, not how much data they carry.  
- **Fundamental problem:** DynamoDB must guarantee that every write hits the right partition and persists in a replicated log without blocking other operations.  
- **Why WCUs matter:** Each WCU represents one “write” operation per second on a single partition key value. The underlying storage engine treats writes as atomic, page‑aligned records; the latency is essentially constant for a given number of writes, not data size.  
- **Deeper principle:** This mirrors *queueing theory*—the service rate (λ) is measured in *tasks per second*, not bytes per second. If you try to compare by throughput (bytes/s), you conflate two independent resources: storage I/O and compute time for consistency checks.  

**Non‑obvious insight:** Because a PutItem’s latency does **not** increase with item size until it exceeds the 400 KB limit, developers often overprovision WCUs while neglecting read capacity. In practice, a single large write can *consume* several WCUs due to internal compaction and replication overhead, so the correct metric is always the count of write operations per second, not bytes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
