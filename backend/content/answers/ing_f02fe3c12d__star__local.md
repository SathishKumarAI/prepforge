---
qid: ing_f02fe3c12d__star__local
question: 'Explain: Layer 3: Network — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 357
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:33-05:00'
sources: []
---

**Situation:** In my last role I was building a real‑time recommendation engine that had to ingest user events from millions of devices, process them through an ML pipeline, and push predictions back to edge servers within 50 ms. The latency bottleneck turned out to be the data transport layer.

**Task:** My goal was to redesign the network stack so that the end‑to‑end data path met the strict latency requirement while staying cost‑effective and scalable across multiple regions.

**Action:** I mapped the problem onto OSI Layer 3, focusing on IP routing, subnetting, and BGP peering. First, I introduced a private VPC with carefully sized CIDR blocks to avoid overlapping routes, then implemented a transit gateway to centralize inter‑VPC traffic. Using MPLS over AWS Direct Connect, I created deterministic paths that bypassed public internet jitter. I also set up QoS policies on the edge routers to prioritize ML data packets and used ECMP (Equal‑Cost Multi‑Path) routing to balance load across redundant links. Finally, I monitored RTT with traceroute probes and iteratively tuned MTU sizes and TCP window scaling.

**Result:** The redesign cut network latency from an average of 120 ms down to 35 ms, keeping the end‑to‑end pipeline within the 50 ms target. Throughput increased by 40% and cross‑region data transfer costs dropped 25%. I learned that treating network design as a first‑class component—especially Layer 3 routing and QoS—is essential for latency‑critical ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
