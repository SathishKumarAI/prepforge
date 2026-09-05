---
qid: ing_e98bd2c742__star__local
question: 'Explain: Conflict Resolution — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 375
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:14-05:00'
sources: []
---

**Situation:**  
At my previous company we built a distributed recommendation engine that trained on user click data across three datacenters. The model parameters were replicated in each region to reduce latency for inference.

**Task:**  
I had to decide how the parameter updates would be reconciled so that users always saw fresh recommendations without sacrificing accuracy, and to implement a conflict‑resolution strategy that fit our SLA of <200 ms per request.

**Action:**  
I evaluated two consistency models. With **strong consistency**, I implemented a Paxos‑based lock on each shard’s weights: every update acquired the leader lock, applied the gradient, then replicated it via synchronous Raft to all replicas before releasing the lock. This guaranteed zero divergence but introduced a 70 ms average latency spike during peak traffic.  
For **eventual consistency**, I switched to an asynchronous Kafka‑based write‑ahead log where each replica pulled updates at its own pace and resolved conflicts using *last‑write‑wins* timestamped by a logical clock. I added a lightweight conflict detector that merged gradients via weighted averaging if two replicas updated the same weight within 50 ms, otherwise applied them sequentially.

**Result:**  
The eventual consistency approach reduced average inference latency to 120 ms while keeping model drift under 0.3% over a week of production traffic. We also cut infrastructure costs by 25% because we no longer needed dedicated leader nodes. I learned that choosing the right consistency level hinges on the trade‑off between staleness tolerance and system throughput, especially in ML pipelines where parameters can be safely merged with a well‑designed conflict policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
