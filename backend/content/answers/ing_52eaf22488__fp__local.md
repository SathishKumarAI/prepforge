---
qid: ing_52eaf22488__fp__local
question: 'Explain: Under the hood: Broadcasting live video to millions - Engineering
  at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 402
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:01:13-05:00'
sources: []
---

**Broadcasting a live stream to millions on Meta: a systems‑theoretic view**

At its core the problem is *time‑sensitive data distribution*: a single source must deliver a continuous, low‑latency stream to a global audience whose nodes are heterogeneous and geographically dispersed. The solution rests on three intertwined principles:

1. **Decoupled publish–subscribe with erasure coding** – the encoder splits each video frame into blocks, applies Reed–Solomon codes, and streams them over a CDN of edge servers. This turns a single source into many *independent* paths; any server can recover missing blocks from peers, so bandwidth is maximized without sacrificing reliability.

2. **Adaptive bitrate + pipelined buffering** – each edge predicts downstream capacity using a Kalman‑filter on RTT and packet loss, then selects the next codec level that balances quality against queue depth. The pipeline keeps *buffer occupancy* constant, preventing stalls while respecting user QoE constraints.

3. **Consistent hash routing with geo‑aware shards** – viewers are mapped to shards via consistent hashing weighted by latency; each shard owns a partition of the stream’s keyspace. This ensures that any viewer’s packets hit the same set of edge nodes, reducing inter‑shard traffic and enabling efficient multicast at scale.

> **Non‑obvious insight:**  
> The erasure coding layer is not merely for fault tolerance—it *acts as a natural load balancer*. Because each block can be reconstructed from any subset of peers, servers that become overloaded simply drop redundant blocks; the system automatically redistributes load without explicit routing changes. This emergent behavior turns what would be a brittle network into a self‑healing fabric capable of sustaining millions of concurrent viewers with minimal hand‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
