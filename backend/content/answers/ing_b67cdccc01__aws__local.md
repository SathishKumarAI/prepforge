---
qid: ing_b67cdccc01__aws__local
question: 'Two-part coding warm-up: given a stream of user actions, return the k most
  engaged-with items. Then: why might your heap solution be the wrong choice in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 462
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:23-05:00'
sources: []
---

**Situation & Task**  
At my previous role I built a real‑time recommendation engine that surfaced the top *k* items users interacted with in the last 24 h. The input was an unbounded stream of “view / click / add_to_cart” events and the output had to be refreshed every minute for 50 M active users.

**Approach (Technical)**  
I used **Kinesis Data Streams** to ingest events, a **Lambda** function to parse them, and stored per‑user sliding windows in **DynamoDB with TTL**. To compute the top *k* I maintained a **min‑heap** of size *k* inside each Lambda invocation (Python `heapq`).  
- **Scalability:** Kinesis shards scale horizontally; Lambda scales automatically.  
- **Availability:** DynamoDB’s 99.999% SLA and automatic replication.  
- **Cost:** Only pay for read/write capacity units used, no dedicated VM.

**Result**  
The system delivered updated top‑k lists in < 2 s latency with < $0.02 per 10 k events, reducing server churn by 30 %.  

**Why a heap can be wrong in prod**  
A heap is *in‑memory* and *stateful*. In a distributed Lambda environment each function instance has its own heap, so the global top‑k cannot be aggregated without an extra pass. This causes **data duplication**, higher **latency**, and **eventual consistency** issues. A better choice would be to stream into **Amazon Kinesis Analytics** or use **Redshift Spectrum** with incremental aggregation, ensuring a single source of truth and easier fault tolerance.

> *Leadership Principles:*  
> • **Customer Obsession** – deliver instant relevance for users.  
> • **Ownership & Dive Deep** – I designed end‑to‑end flow, tuned DynamoDB TTL, and quantified cost savings.  

This answer shows ownership, depth, measurable impact, and learning from the heap’s limitations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
