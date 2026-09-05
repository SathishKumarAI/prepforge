---
qid: ing_5f3cb1043f__star__local
question: 'Explain: How Routing Works — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 343
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:46-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the internal data‑plane for a mid‑tier microservice mesh that handled ~1.2 M requests per second across three availability zones. The existing flat topology caused 45 % packet loss during peak traffic and latency spiked from 12 ms to 35 ms.

**Task** – I needed to build a scalable routing layer that could route packets by destination IP, support zero‑downtime upgrades, and keep per‑zone round‑trip time under 20 ms while keeping memory usage below 200 MB on each node.

**Action** – I implemented a hierarchical routing table using radix tries for the IPv4 prefixes. Each service node ran an in‑memory BPF program that matched incoming packets against the trie, looked up the next hop IP and applied source NAT to preserve endpoint isolation. To avoid single points of failure, the routing tables were distributed via a lightweight Raft cluster; each change propagated asynchronously with versioned snapshots so nodes could roll back on bad updates. I also added per‑zone route caching with a 5 ms eviction window to keep hot paths in L1 cache.

**Result** – After deployment, packet loss dropped below 0.02 %, latency fell to an average of 14 ms, and the system handled a 60 % traffic surge without any new hardware. I learned that combining compact trie structures with BPF for fast matching can deliver high‑throughput routing while keeping resource footprints minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
