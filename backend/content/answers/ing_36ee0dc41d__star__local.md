---
qid: ing_36ee0dc41d__star__local
question: 'Explain: Bandwidth-Delay Product — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 349
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:03-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with deploying a real‑time recommendation engine for a streaming service that served millions of users worldwide. The model had to pull feature vectors from a distributed key‑value store, run inference on a GPU cluster, and return personalized ads within 200 ms.

**Task:**  
I needed to guarantee low latency while maintaining high throughput, but the network link between our data center and edge cache was limited to 1 Gbps with an RTT of 80 ms. The bandwidth‑delay product (BDP) was ~10 MB, which meant any single request could saturate the pipe if not carefully pipelined.

**Action:**  
I restructured the inference pipeline into a two‑stage sharded model: first stage computed lightweight embeddings locally; second stage fetched only the top‑k candidate items from the remote store. I implemented an async HTTP/2 client with flow control tuned to the BDP, sending 32 concurrent requests per connection and prefetching based on user session patterns. Additionally, I compressed feature vectors using a learned quantization scheme that cut payload size by 60 % without hurting accuracy.

**Result:**  
Latency dropped from 450 ms to 180 ms while throughput increased from 4k TPS to 12k TPS—well below the BDP limit. We also reduced network cost by 35 %. The exercise taught me how to balance bandwidth, delay, and compute in a data‑intensive ML system, turning theoretical networking concepts into tangible performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
