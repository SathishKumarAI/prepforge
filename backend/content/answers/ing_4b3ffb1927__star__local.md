---
qid: ing_4b3ffb1927__star__local
question: 'Explain: CIDR and Subnets — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:45-05:00'
sources: []
---

**Situation**  
When I joined the data‑science team, we had to spin up an on‑prem GPU cluster for training large language models. The existing campus network was a flat /24 subnet, and every node hit a single router, causing packet loss during nightly distributed training runs.

**Task**  
I needed to redesign the IP addressing so that each compute rack could communicate efficiently, limit broadcast traffic, and allow future scaling to 200 nodes without re‑configuring the whole network.

**Action**  
I first mapped out the physical topology: five racks with 12 GPUs each. Using CIDR notation I carved a /22 block (10.0.0.0/22) into five /28 subnets, one per rack. This gave 14 usable IPs per subnet, enough for the 12 GPUs plus two network‑edge devices. I configured each rack’s switch with VLAN tagging to isolate traffic and set up static routes on the core router so that inter‑rack communication used the least‑cost path. I also implemented a small DHCP pool within each /28 to ease future node additions.

**Result**  
Packet loss dropped from 4% to <0.1%, training throughput increased by 35%, and we added two more racks in under an hour with no downtime. I learned that proper CIDR planning turns a congested flat network into a scalable, low‑latency fabric—critical for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
