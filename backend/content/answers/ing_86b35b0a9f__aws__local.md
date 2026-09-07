---
qid: ing_86b35b0a9f__aws__local
question: How Does the Distributed Counter Work? — Distributed Counter System Design
  - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 444
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:40-05:00'
sources: []
---

**Situation / Task**  
At my previous company we had a global e‑commerce platform that needed an *exactly‑once* counter for product views, visible to every user in real time. The naïve single‑node Redis counter failed under traffic spikes (≈ 10 k QPS) and caused data loss during outages.

**Action**  
I designed a **distributed counter service** using Amazon DynamoDB + Kinesis + Lambda:

1. **Write path** – Every view event is sent to an Amazon Kinesis Data Stream (`ViewEvents`).  
2. **Aggregation** – A Kinesis Firehose stream triggers a Lambda that batches 1000 events, aggregates counts per product, and writes the totals to a DynamoDB table with *conditional writes* (optimistic concurrency).  
3. **Read path** – The counter is exposed via an API Gateway endpoint backed by a read‑through Lambda that queries DynamoDB and returns the current count.  
4. **Exactly‑once guarantee** – Kinesis records have sequence numbers; we store the last processed number in DynamoDB (`LastSeq`). If a Lambda fails, replaying the stream resumes from `LastSeq`, preventing double counts.

**Result**  
The system handled 50 k QPS with < 5 ms latency, achieved 99.999% availability (single‑AZ + auto‑scaling), and reduced cost by 30 % compared to a Redis cluster.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant, accurate counters for users worldwide.  
- **Ownership & Dive Deep** – Took full responsibility for failure modes, implemented idempotent writes, and tuned throughput.

### What a Bar‑raiser Looks For
- **Quantified impact** (throughput, latency, cost).  
- **Depth of design** (choice of Kinesis vs. SQS, DynamoDB conditional writes).  
- **Learning from failure** – using sequence numbers to recover without data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
