---
qid: ing_a17599336c__star__local
question: 'Explain: Transit Gateway — Typical AWS Network Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 361
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:42-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating a multi‑region e‑commerce platform from a legacy VPN‑based network into AWS. The old setup had separate VPCs per region, each connected to the on‑prem data center via expensive site‑to‑site VPNs and an internal BGP routing table that grew unwieldy as new services spun up.

**Task:**  
I needed to design a scalable, low‑cost network architecture that would support inter‑VPC traffic across three regions (US‑East, EU‑West, AP‑South), provide secure connectivity to our on‑prem data center, and simplify routing for future microservices expansions—all while maintaining high availability.

**Action:**  
I introduced an AWS Transit Gateway as the central hub. I attached each regional VPC to the TGW using VPC attachments, set up a Direct Connect link to the on‑prem network via a dedicated Virtual Private Gateway, and leveraged TGW route tables for fine‑grained control: one table routed intra‑region traffic, another forwarded inter‑region requests, and a third handled on‑prem egress. I also enabled TGW multicast for our streaming analytics workload, and used AWS Network Firewall to enforce segmentation policies at the gateway level.

**Result:**  
The new architecture cut VPN costs by 40%, reduced latency between regions from ~120 ms to ~35 ms, and lowered operational overhead—routing changes now require only a single route table update instead of dozens of BGP announcements. I learned that a Transit Gateway centralizes control, dramatically simplifies multi‑VPC connectivity, and scales gracefully with growing microservice ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
