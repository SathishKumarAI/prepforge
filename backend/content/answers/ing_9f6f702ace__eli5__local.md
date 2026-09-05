---
qid: ing_9f6f702ace__eli5__local
question: 'Explain: Data Record — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 227
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:50:15-05:00'
sources: []
---

Imagine a river that carries water from many small ponds into a big lake.  
In Amazon Kinesis, each little pond is an *application* that writes its own stream of information—its “data records.” A data record is just one piece of information (like a single message or event) that travels downstream. It has three parts:  

1. **Partition key** – the name of a small bucket in the riverbank that decides which lane the water will flow through; this keeps related records together.  
2. **Data payload** – the actual content, like a line of text or a sensor reading, stored as binary bytes (think of it as the water itself).  
3. **Sequence number** – an automatic stamp that tells you exactly when the record entered the stream, so you can read them in order.

Just as each droplet follows its lane and keeps its own time‑stamp, Kinesis delivers every record reliably to downstream apps while preserving order within each partition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
