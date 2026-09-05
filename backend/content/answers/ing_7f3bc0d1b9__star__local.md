---
qid: ing_7f3bc0d1b9__star__local
question: How to Make a Remote Procedure Call? — Remote Procedure Call (RPC) in Operating
  System - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 330
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:48:07-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a distributed recommendation engine. The front‑end microservice in Go needed to query a Python‑based inference service over the network, but our latency SLA was 30 ms and we had to support thousands of concurrent requests.

**Task:**  
I had to design an efficient Remote Procedure Call layer that would serialize inputs, handle retries, and keep throughput high while staying within the latency budget.

**Action:**  
I chose gRPC with Protocol Buffers because it gives zero‑copy marshalling and supports HTTP/2 multiplexing. I defined a `Recommend` service in a `.proto` file, generated Go stubs, and wrapped the call in a client that used exponential backoff for transient failures. On the server side, I implemented the same proto on Python with a thread‑pool executor to parallelize inference. To keep latency low, I added per‑request context timeouts of 25 ms, logged metrics via Prometheus, and tuned gRPC keepalive pings to detect dead connections early.

**Result:**  
The new RPC layer cut average round‑trip time from 80 ms to 18 ms, boosted throughput from 1.2k req/s to 4.5k req/s, and reduced error rates by 70%. I learned that careful protocol choice, timeout handling, and observability are key to meeting strict SLA targets in a distributed ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
