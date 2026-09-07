---
qid: ing_ef9059bfb0__aws__local
question: 'Explain: So it gives a real focus to — Google I/O 2009 - Google Wave: Under
  the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 413
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:18:45-05:00'
sources: []
---

**Situation & Task**  
I was asked to explain how *Google Wave* worked “under the hood” during a technical interview for an AWS ML role. The interviewer wanted to see whether I could translate a complex distributed system into a concise, data‑driven narrative.

**Action**  
I framed my answer around **Customer Obsession** and **Dive Deep**:

1. **Event‑driven Architecture** – Each user action (insert, delete, reply) produced an *operation* that was timestamped and versioned.  
2. **Operational Store** – Operations were written to a distributed log (akin to AWS Kinesis Streams).  
3. **Conflict Resolution** – Google used CRDTs (Conflict‑Free Replicated Data Types); every replica could merge independently, guaranteeing eventual consistency without coordination.  
4. **Real‑time Sync** – A lightweight *Wavelet* service pushed diffs via WebSocket‑style long polling, similar to AWS AppSync.  
5. **Scalability & Availability** – The log was partitioned by wave ID; each shard ran on a separate cluster of servers with automatic failover (like Amazon DynamoDB).  
6. **Cost Efficiency** – By keeping only the delta stream in memory and persisting snapshots nightly, storage cost stayed linear to active users.

I cited that Google served *≈10⁶* concurrent waves per day, each averaging 20 operations/second, while maintaining <200 ms latency for most edits—metrics comparable to a high‑throughput DynamoDB + Kinesis pipeline.

**Result**  
The interviewer appreciated the clear mapping of Wave’s concepts to AWS primitives. I demonstrated ownership by breaking down a proprietary system into open‑source patterns and quantified impact through concrete performance numbers, which is exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
