---
qid: ing_c5d6ebf3ee__star__local
question: 'Explain: Apache Zookeeper — DevOps-SRE/5_ClusterCoordination/ApacheZookeeper.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 291
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:39-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling our micro‑service architecture from a single data center to three geographically distributed regions. The existing service discovery system kept failing under cross‑region traffic spikes, causing unpredictable latency and downtime.

**Task** – I had to implement a reliable cluster coordination layer that could elect leaders, manage configuration changes, and provide high‑availability for critical services without adding significant overhead.

**Action** – I chose Apache ZooKeeper as the backbone. First, I set up a 5‑node ensemble across the regions, using the `zoo.cfg` to enable *read‑only* mode in two nodes for load balancing. I wrote a Python wrapper around the Curator framework to handle session timeouts and automatic retry logic. For configuration management, I stored service endpoints in znodes with versioned data, enabling atomic updates via ZooKeeper’s optimistic concurrency control. To reduce latency, I deployed an in‑memory cache that watched znodes for changes and refreshed locally when notified.

**Result** – After deployment, inter‑region request latency dropped from 350 ms to 120 ms on average, and service uptime improved to 99.97%. The team learned that a well‑tuned ZooKeeper ensemble can deliver both strong consistency and low overhead in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
