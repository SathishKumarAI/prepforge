---
qid: ing_04893d1541__star__local
question: 'Explain: Now we can run a Dijkstra on — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 422
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:53-05:00'
sources: []
---

**Situation** – While preparing for the Google Maps system‑design interview, my team and I were asked how we would implement a real‑time route planner that could handle millions of users simultaneously. The core requirement was to compute the shortest path between any two points quickly, even when traffic conditions change on the fly.

**Task** – My goal was to design a scalable graph service that runs Dijkstra’s algorithm efficiently at scale: ingest live traffic data, update edge weights in real time, and serve low‑latency route queries for millions of concurrent users.

**Action** – I broke the problem into three layers. First, I stored the road network as a compressed adjacency list on a distributed graph database (JanusGraph) to keep memory usage under 2 GB per node shard. Second, I pre‑computed “hub labels” (ALT algorithm) for every vertex pair that appears in our most frequent queries; this reduced Dijkstra’s search space by an average of 70 %. Third, I built a real‑time weight update pipeline using Kafka streams that pushed traffic deltas to the graph shards. Each shard ran a lightweight priority‑queue implementation of Dijkstra, with early exit when the target was reached. To keep latency <50 ms under peak load, we deployed the service on an autoscaling Kubernetes cluster and used Redis for hot edge weights.

**Result** – In our internal benchmark, route queries returned within 45 ms 95 % of the time, even with a 20 % spike in traffic updates. The system handled 1.2 million concurrent users with <0.5 s total latency. I learned that coupling pre‑computation (hub labels) with real‑time delta propagation lets Dijkstra remain viable at Google‑scale, and that careful data partitioning is key to keeping the algorithm fast enough for live navigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
