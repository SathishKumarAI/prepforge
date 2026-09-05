---
qid: ing_5f9e206196__star__local
question: 'Explain: OLTP database - DynamoDB — Tech-Stacks-Live-Apps/Grab/OrderProcessing/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 313
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:36-05:00'
sources: []
---

**Situation**  
At Grab I was tasked with redesigning the order‑processing service that handled ~15k orders per second during peak hours. The existing relational DB was choking on write spikes and our latency had ballooned to 120 ms.

**Task**  
I needed a database that could sustain high write throughput, provide low read latencies for real‑time delivery updates, and scale horizontally without manual sharding.

**Action**  
I evaluated several NoSQL options and chose Amazon DynamoDB. I modeled the order table with a composite primary key (OrderID + PartitionKey: CustomerID) to distribute traffic evenly. Using DynamoDB Streams, I triggered Lambda functions for inventory checks and payment processing in real time. I also implemented Global Secondary Indexes for querying orders by status and used Provisioned Capacity with Auto Scaling to match peak loads. To keep consistency, I leveraged conditional writes and the `ReturnValues` feature for atomic updates.

**Result**  
The new architecture cut write latency from 120 ms to under 30 ms and increased throughput to 50k ops/sec during surge events. Overall order processing time dropped by 35%, and we eliminated manual sharding maintenance, freeing engineering hours for new features. I learned that choosing the right key design and leveraging DynamoDB’s built‑in scaling can transform a bottlenecked OLTP system into a resilient, high‑performance live app.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
