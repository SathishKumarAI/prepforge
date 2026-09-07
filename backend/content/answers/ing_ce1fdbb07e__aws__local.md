---
qid: ing_ce1fdbb07e__aws__local
question: 'Explain: Bloom Filters vs Related Structures — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 355
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:08-05:00'
sources: []
---

**Situation / Task**  
When building a real‑time ad‑delivery pipeline for our global marketplace, I needed to decide how to quickly flag “already served” users without incurring the cost of a full database lookup.

**Action**  
I evaluated Bloom filters against alternatives (Cuckoo filters, HyperLogLog). A Bloom filter offers *O(1)* membership tests with sub‑percent false positives and negligible storage per key. I chose **Amazon DynamoDB Accelerator (DAX)** for low‑latency reads and **AWS Lambda + S3** to rebuild the filter nightly from a 10 GB clickstream dataset. Using **AWS Kinesis Data Streams**, every incoming user ID was hashed into the in‑memory Bloom bit array; if the filter reported “present,” the request bypassed DynamoDB, saving ~30 ms per ad lookup.

**Result**  
The switch cut per‑request latency from 12 ms to 7.5 ms (≈37 % faster) and reduced DynamoDB read capacity units by 42 %, yielding $1,200/month in savings while maintaining a <0.01 % false‑positive rate—well below the SLA target.

**Reflection**  
I owned end‑to‑end performance, dived deep into probabilistic data structures, quantified impact, and learned that a simple Bloom filter can outperform more complex alternatives when cost and latency dominate.  

*Leadership Principles: Customer Obsession (fast response), Ownership (full lifecycle), Dive Deep.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
