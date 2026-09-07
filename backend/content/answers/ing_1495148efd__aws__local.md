---
qid: ing_1495148efd__aws__local
question: 'Explain: Heaps and Priority Queues: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 450
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:31-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science team at my previous company, we needed to process > 10 M streaming events per day and rank them by relevance score in real time for an ad‑delivery system. The existing FIFO queue caused latency spikes during peak traffic.

**Task (T)**  
Design a scalable, fault‑tolerant priority‑queue service that could surface top‑scoring events with < 200 ms latency while handling bursty workloads.

**Action (A)**  
I chose **Amazon Kinesis Data Streams** for ingestion and **DynamoDB Global Tables** as the underlying store. To implement a heap, I used DynamoDB’s sorted‑set pattern: each item stored the score as a sort key and an auto‑incremented ID to break ties. A Lambda function (the “heap worker”) periodically scans the table using `Scan` with `Limit=1000`, applies **in‑memory binary‑heap** logic, and writes back the top 10K items to a dedicated DynamoDB partition that serves reads via `GetItem`. This is essentially an external heap backed by DynamoDB.

For the priority queue abstraction, I exposed an API Gateway endpoint. Clients submit events; Lambda pushes them into Kinesis, which triggers another Lambda that updates the heap in DynamoDB. Reads hit the “top‑k” table for instant response.

**Result (R)**  
Latency dropped from 1.2 s to **< 200 ms** during peak hours, and throughput scaled to 50 M events/day with < 0.5 % error rate. Cost was $3,200/month versus the prior on‑prem solution’s $12,000.  

*Leadership Principles:* **Ownership** – I drove end‑to‑end design; **Dive Deep** – iterated on heap implementation to balance read/write costs. *Bar‑raiser cues:* clear metrics, trade‑off analysis (Kinesis vs. SQS), and a learning loop from initial latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
