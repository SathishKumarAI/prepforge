---
qid: ing_e733bd454c__eli5__local
question: 'Explain: Amazon Kinesis Data Streams Application — Amazon Kinesis Data
  Streams Terminology and concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 333
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:41:35-05:00'
sources: []
---

Imagine a busy post office that delivers letters (data) from many senders to many recipients in real time.  
**Amazon Kinesis Data Streams** is the system that keeps those letters moving smoothly.

* **Stream** – The “mailbox” where all letters arrive; it’s a named channel you can write to and read from.  
* **Shard** – A single lane inside the mailbox that can handle up to 1 MB/s of incoming data and 2 KB/s of outgoing reads. Think of it as a dedicated courier line; more lanes mean higher capacity.  
* **Record** – One letter in the stream, containing a key (like a postal code) and a payload (the message).  
* **Producer** – The sender that writes records into the stream.  
* **Consumer** – The receiver that reads records from one or more shards.  
* **Retention period** – How long the post office keeps letters before discarding them; default 24 hours, extendable to 365 days.

When you create an application, it chooses which lanes (shards) to pull from and how many copies of each letter it needs. The system guarantees that every consumer sees all records in the order they were written within a shard, just like a post office delivers letters in the exact sequence they arrive on its lane. This simple flow lets you build real‑time dashboards, alerts, or data pipelines without worrying about buffering or missing messages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
