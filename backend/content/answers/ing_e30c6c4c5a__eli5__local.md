---
qid: ing_e30c6c4c5a__eli5__local
question: 'Explain: Consumer — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 266
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:35:07-05:00'
sources: []
---

Imagine a bustling post‑office that receives letters (data) every second from thousands of senders.  
* **Producer** – the person or app that writes letters into the mailbox.  
* **Stream** – the long hallway where all those letters line up, split into several *shards*. Each shard is like a separate lane; it can hold a limited number of letters at once (a throughput limit).  

A **Consumer** is a worker who pulls letters out to read or process them.  
* **Shard iterator** – the address that tells the consumer where in a lane to start picking up letters.  
* **GetRecords API** – the action of taking a batch of letters from the lane, up to a size limit (e.g., 5 MB).  
* **Checkpointing** – after reading, the worker writes back the last letter’s position so that if it restarts, it can resume where it left off instead of re‑reading everything.  

Just as a post‑office clerk keeps track of which letters have been handled, a Kinesis consumer keeps track of its progress through each shard so data isn’t lost or duplicated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
