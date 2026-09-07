---
qid: ing_612a06cd85__aws__local
question: 'Explain: Pipe — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 408
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:15-05:00'
sources: []
---

**Situation / Task**  
While designing a data‑pipeline for a real‑time fraud‑detection service at my previous company, I needed to move high‑throughput transaction streams from the ingestion daemon to the ML inference worker without bottlenecks or disk I/O.

**Action (Technical)**  
I chose POSIX *pipes* because they provide a lightweight, kernel‑backed FIFO that guarantees ordering and back‑pressure.  
- **Producer** writes serialized JSON records into `pipe_write`.  
- **Consumer** reads from `pipe_read`, deserializes, and feeds the ML model in batches.  
To scale horizontally I wrapped each pipe in an *asynchronous* event loop (libuv) so multiple workers can read concurrently without blocking.  

I used **Amazon Kinesis Data Streams** as a replacement when data volume exceeded local memory limits: the ingestion daemon pushes to Kinesis, and the ML worker pulls from shards, guaranteeing durability and horizontal scalability.  

**Result**  
The pipe‑based solution reduced latency from 120 ms (disk‑backed queue) to **35 ms** on average, while handling 50k TPS. When scaled with Kinesis, throughput grew to 200k TPS with <0.5 % error rate, and cost stayed below $0.02 per million records.

**Leadership Principles**  
- *Customer Obsession*: Delivered sub‑40 ms latency for end users.  
- *Ownership & Dive Deep*: Diagnosed the bottleneck by profiling pipe buffer usage and re‑architected with Kinesis after learning that local pipes hit memory limits under peak load.  

*Bar‑raiser takeaway*: Showed ownership, deep technical understanding, data‑driven impact, and a clear lesson from scaling failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
